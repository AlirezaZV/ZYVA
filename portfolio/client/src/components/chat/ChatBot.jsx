// src/Chatbot.js
import React, { useState, useEffect } from "react";
import { trainModel } from "./model";
import { trainingData } from "./data";
import * as tf from '@tensorflow/tfjs';

const Chatbot = () => {
  const [model, setModel] = useState(null);
  const [vocabulary, setVocabulary] = useState([]);
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  useEffect(() => {
    const loadModel = async () => {
      // Force CPU backend to avoid WebGL issues
      await tf.setBackend('cpu');
      
      const { model, vocabulary } = await trainModel();
      setModel(model);
      setVocabulary(vocabulary);
    };
    loadModel();
  }, []);

  const tokenizer = (text) => text.toLowerCase().split(' ');
  
  const MAX_SEQUENCE_LENGTH = 22; // Ensure that all input sequences are of length 22

  const encode = (text) => {
    const tokens = tokenizer(text).map(word => vocabulary.indexOf(word) + 1 || 0);
    if (tokens.length < MAX_SEQUENCE_LENGTH) {
      return [...tokens, ...Array(MAX_SEQUENCE_LENGTH - tokens.length).fill(0)]; // Pad
    }
    return tokens.slice(0, MAX_SEQUENCE_LENGTH); // Truncate if too long
  };

  const handleInput = (event) => setInput(event.target.value);

  const handleSubmit = () => {
    if (model && input) {
      const encodeInput = encode(input);
      console.log("Encoded Input:", encodeInput); // Debugging
      const inputTensor = tf.tensor2d([encodeInput], [1, MAX_SEQUENCE_LENGTH]);

      console.log("Input Tensor Shape:", inputTensor.shape);  // Should be [1, 22]

      const prediction = model.predict(inputTensor).dataSync();
      const answerIndex = prediction.indexOf(Math.max(...prediction));

      setResponse(trainingData[answerIndex].answer || "Sorry, I don't understand that question.");
    }
  };

  return (
    <div style={{padding:50}}>
      <h1>Alireza's Portfolio Chatbot</h1>
      <input type="text" value={input} onChange={handleInput} placeholder="Ask me something..." />
      <button onClick={handleSubmit}>Ask</button>
      <p>{response}</p>
    </div>
  );
};

export default Chatbot;
