import React, { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    try {
      const response = await axios.post('http://localhost:5000/chat', { question: input });
      const botMessage = { sender: "bot", text: response.data.answer };
      setMessages([...messages, userMessage, botMessage]);
    } catch (error) {
      console.error(error);
    }

    setInput("");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ border: "1px solid #ccc", padding: "10px", height: "400px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx} style={{ textAlign: msg.sender === "user" ? "right" : "left" }}>
            <p><strong>{msg.sender}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      <input 
        type="text" 
        value={input} 
        onChange={(e) => setInput(e.target.value)} 
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()} 
        style={{ width: "80%" }} 
      />
      <button onClick={sendMessage} style={{ width: "20%" }}>Send</button>
    </div>
  );
};

export default Chatbot;
