// src/model.js
import * as tf from "@tensorflow/tfjs";
import { trainingData } from "./data";

export const trainModel = async () => {
  const questions = trainingData.map(item => item.question);
  const answers = trainingData.map((_, index) => index);

  // Preprocess Data
  const tokenizer = (text) => text.toLowerCase().split(" ");
  const vocabulary = [...new Set(questions.flatMap(tokenizer))];
  const MAX_SEQUENCE_LENGTH = 22;

  const encode = (text) => {
    const tokens = tokenizer(text).map(word => vocabulary.indexOf(word) + 1 || 0);
    if (tokens.length > MAX_SEQUENCE_LENGTH) {
      return tokens.slice(0, MAX_SEQUENCE_LENGTH); // Truncate
    } else {
      return [...tokens, ...Array(MAX_SEQUENCE_LENGTH - tokens.length).fill(0)]; // Pad with zeros
    }
  };

  const inputs = questions.map(encode);
  const labels = answers;

  // TensorFlow.js Model
  const model = tf.sequential();
  model.add(tf.layers.dense({ inputShape: [MAX_SEQUENCE_LENGTH], units: 16, activation: "relu" }));
  model.add(tf.layers.dense({ units: trainingData.length, activation: "softmax" }));

  model.compile({
    optimizer: "adam",
    loss: "sparseCategoricalCrossentropy",
    metrics: ["accuracy"],
  });

  const xs = tf.tensor2d(inputs, [inputs.length, MAX_SEQUENCE_LENGTH]);
  const ys = tf.tensor1d(labels);

  console.log("Training...");
  await model.fit(xs, ys, { epochs: 500 });
  console.log("Training Complete");

  return { model, vocabulary };
};

