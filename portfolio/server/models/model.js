const tf = require('@tensorflow/tfjs');

const createModel = (inputShape, outputShape) => {
    const model = tf.sequential();

    model.add(tf.layers.embedding({ inputDim: 256, outputDim: 64, inputLength: inputShape }));
    model.add(tf.layers.lstm({ units: 128, returnSequences: true }));
    model.add(tf.layers.lstm({ units: 64 }));
    model.add(tf.layers.dense({ units: outputShape, activation: 'softmax' }));

    model.compile({ optimizer: 'adam', loss: 'sparseCategoricalCrossentropy', metrics: ['accuracy'] });

    return model;
};

module.exports = { createModel };
