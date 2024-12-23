const express = require('express');
const tf = require('@tensorflow/tfjs');
const { preprocessData } = require('../data/data');
const { createModel } = require('../models/model');

const router = express.Router();

let trainedModel;

// Load and preprocess data
const { inputs, outputs } = preprocessData();

// Train the model during server initialization
(async () => {
    console.log('Training model...');
    trainedModel = createModel(inputs[0].length, outputs[0].length);

    // Convert input and output data to tensors
    const inputTensor = tf.tensor2d(inputs);
    const outputTensor = tf.tensor2d(outputs);

    // Train the model
    await trainedModel.fit(inputTensor, outputTensor, {
        epochs: 50,
        batchSize: 32,
        callbacks: {
            onEpochEnd: (epoch, logs) => console.log(`Epoch ${epoch + 1}: Loss = ${logs.loss}`),
        },
    });

    console.log('Model training completed!');
})();

// Chat route
router.post('/chat', (req, res) => {
    if (!trainedModel) {
        return res.status(500).send({ error: 'Model is not yet trained. Please try again later.' });
    }

    const { input } = req.body;
    if (!input || typeof input !== 'string') {
        return res.status(400).send({ error: 'Invalid input. Please provide a string.' });
    }

    // Tokenize and pad the input
    const tokenizedInput = input.split(' ').map(token => token.charCodeAt(0));
    const paddedInput = [...tokenizedInput, ...Array(inputs[0].length - tokenizedInput.length).fill(0)];

    // Convert input to a tensor
    const inputTensor = tf.tensor2d([paddedInput], [1, inputs[0].length]);

    // Make a prediction
    const prediction = trainedModel.predict(inputTensor);
    const outputIndex = prediction.argMax(-1).dataSync()[0];

    // Decode the response (based on your dataset)
    const response = outputs[outputIndex]
        .map(code => String.fromCharCode(code)) // Decode each character code
        .join('');

    res.send({ response });
});

module.exports = router;
