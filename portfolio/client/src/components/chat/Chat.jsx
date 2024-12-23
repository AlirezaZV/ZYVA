import React, { useState } from "react";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

const Chatbott = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleUserMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages((prevMessages) => [...prevMessages, userMessage]);

    try {
      const conversationHistory = messages
        .map((msg) => (msg.sender === "user" ? `User: ${msg.text}` : `Bot: ${msg.text}`))
        .join("\n");

      const prompt = `${conversationHistory}\nUser: ${input}\nBot:`;

      const response = await hf.textGeneration({
        model: "facebook/blenderbot-400M-distill", // Replace with any conversational model
        inputs: prompt,
        parameters: { max_length: 100 },
      });

      const botMessage = {
        sender: "assistant",
        text: response.generated_text.trim(),
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error with Hugging Face API:", error);
      const errorMessage = {
        sender: "assistant",
        text: "Sorry, something went wrong. Please try again later.",
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-title">
        <h1>Chatbot</h1>
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`message ${
              msg.sender === "user" ? "message-personal" : "new"
            }`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="message-box">
        <textarea
          type="text"
          className="message-input"
          placeholder="Type a message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
        />
        <button className="message-submit" onClick={handleUserMessage}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbott;
