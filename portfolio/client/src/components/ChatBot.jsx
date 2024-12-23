import React, { useRef, useState, useEffect } from "react";
import "./chat/chat.css";
import 'simplebar-react/dist/simplebar.min.css';
import SimpleBar from "simplebar-react";
import { HfInference } from "@huggingface/inference";

const hf = new HfInference("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");

 function SvgSpinners3DotsScale(props) {
	return (<svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}><circle cx={4} cy={12} r={3} fill="currentColor"><animate id="svgSpinners3DotsScale0" attributeName="r" begin="0;svgSpinners3DotsScale1.end-0.25s" dur="0.75s" values="3;.2;3"></animate></circle><circle cx={12} cy={12} r={3} fill="currentColor"><animate attributeName="r" begin="svgSpinners3DotsScale0.end-0.6s" dur="0.75s" values="3;.2;3"></animate></circle><circle cx={20} cy={12} r={3} fill="currentColor"><animate id="svgSpinners3DotsScale1" attributeName="r" begin="svgSpinners3DotsScale0.end-0.45s" dur="0.75s" values="3;.2;3"></animate></circle></svg>);
  }

const knowledgeBase = {
  greetings: {
    english: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "helo", "slm", "salam", "heelo", "heey"],
    persian: ["سلام", "خداقوت", "درود", "صبح بخیر", "عصر بخیر", "شب بخیر", "بخير", "عرض ادب"],
  },
  _greetings: {
    english: ["what up", "sap", "how is it going", "how you doing", "helo", "slm", "salam", "how are you", "are you ok", "whats up", "what's up"],
    persian: ["تعریف کن", "چخبرا", "چخبر", "خبی", "چیطوری", "چطوری", "حالت خوبه", "خوبی", "چه خبر"],
  },
  tnxs: {
    english: [
      "thank you",
      "thanks",
      "many thanks",
      "thanks a lot",
      "thanks a million",
      "thank you very much",
      "thanks so much",
      "I appreciate it",
      "I’m grateful",
      "much appreciated",
      "thanks a ton",
    ],
    persian: [
      "ممنون",
      "مرسی",
      "خیلی ممنون",
      "دستت درد نکنه",
      "ممنونم",
      "مرسی خیلی",
      "تشکر میکنم",
      "ممنون ازت",
      "خوشحالم کردی",
      "از لطف شماست",
    ],
  },
  farewells: {
    english: ["bye", "goodbye", "see you", "take care"],
    persian: ["خداحافظ", "بدرود", "موفق باشی", "خدافظ", "باي", "بای", "موفق باشی"],
  },
  personalInfo: {
    whoIsAlireza: {
      english: "Alireza Zaman Vaziri is a senior UI/UX designer using Figma and a senior web developer with expertise in React.js, Three.js, Node.js, and React Native.",
      persian: "علیرضا زمان وزیری یک طراح ارشد UI/UX است که از Figma استفاده می‌کند و یک توسعه‌دهنده ارشد وب با تخصص در React.js، Three.js، Node.js و React Native است.",
    },
    whatAlirezaDoes: {
      english: "Alireza is a designer and developer who works with both front-end and back-end technologies, specializing in React, Three.js, Node.js, and React Native.",
      persian: "علیرضا طراح و توسعه‌دهنده‌ای است که با تکنولوژی‌های فرانت‌اند و بک‌اند کار می‌کند و تخصص در React، Three.js، Node.js و React Native دارد.",
    },
    location: {
      english: "You are on Alireza's portfolio site. Alireza lives in Isfahan, Iran.",
      persian: "شما در سایت نمونه کارهای علیرضا هستید. علیرضا در اصفهان، ایران زندگی می‌کند.",
    },
    currentTime: () => {
      const now = new Date();
      return {
        english: `The current time is ${now.toLocaleTimeString("en-US")}.`,
        persian: `زمان کنونی ${now.toLocaleTimeString("fa-IR")} است.`,
      };
    },
    services: {
      english: "Alireza offers UI/UX design, front-end development, 3D animation, and Node.js back-end development services.",
      persian: "علیرضا خدمات طراحی UI/UX، توسعه فرانت‌اند، انیمیشن سه‌بعدی و توسعه بک‌اند با Node.js را ارائه می‌دهد.",
    },
    contact: {
      english: "You can contact Alireza via email at arzv.info@gmail.com.",
      persian: "می‌توانید با علیرضا از طریق ایمیل arzv.info@gmail.com ارتباط برقرار كنيد.",
    },
    birthdate: {
      english: "Alireza was born on September 8, 1998.",
      persian: "علیرضا در تاریخ ۸ سپتامبر ۱۹۹۸ به دنیا آمده است.",
    },
    skills: {
      english: "Designing and developing using Figma, Adobe Photoshop, Adobe Illustrator, Adobe After Effects, React, Three.js, Express.js, Node.js, React Native, Flutter, and PostgreSQL.",
      persian: "طراحی و توسعه با استفاده از Figma، Adobe Photoshop، Adobe Illustrator، Adobe After Effects، React، Three.js، Express.js، Node.js، React Native، Flutter و PostgreSQL.",
    },
    capabilities: {
      english: "Alireza can design beautiful websites and apps and develop them in a perfect way.",
      persian: "علیرضا می‌تواند وبسایت‌ها و اپلیکیشن‌های زیبا طراحی کند و به شکلی بی‌نقص توسعه دهد.",
    },
    personality: {
      english: "Alireza was born in September 1998, lives in Isfahan but can work remotely. He enjoys playing guitar, drawing, bike riding, traveling in nature, and car driving.",
      persian: "علیرضا در سپتامبر ۱۹۹۸ به دنیا آمده، در اصفهان زندگی می‌کند اما می‌تواند به صورت دورکاری فعالیت کند. او به نواختن گیتار، طراحی، دوچرخه‌سواری، سفر به طبیعت و رانندگی علاقه‌مند است.",
    },
  },
  generalResponses: {
    english: [
      "I'm here to help!",
      "How can I assist you today?",
      "Feel free to ask me anything!",
      "What can I do for you?",
    ],
    persian: [
      "من اینجا هستم تا کمک کنم!",
      "چطور می‌توانم به شما کمک کنم؟",
      "هر سوالی دارید بپرسید!",
      "چطور می‌توانم به شما خدمت کنم؟",
    ],
  },
  unknown: {
    english: [
      "Sorry, I don't understand.",
      "Could you please clarify?",
      "I’m not sure how to answer that.",
      "Let me check on that for you.",
    ],
    persian: [
      "ببخشید، متوجه نشدم.",
      "لطفاً بیشتر توضیح بدهید.",
      "مطمئن نیستم که چطور به این سوال جواب بدهم.",
      "بذارید بررسی کنم.",
    ],
  },
};

const Chatbot = ({visible}) => {
  const scrollRef = useRef(null);
  const [messages, setMessages] = useState([{ text: "Hi, how can i help you?😊 You can ask me in english or persion.", sender: "bot" }]);
  const [input, setInput] = useState("");

useEffect(() => {
  const scrollToBottom = () => {
    if (scrollRef.current) {
      const scrollableNode = scrollRef.current.querySelector('.simplebar-content-wrapper');
      if (scrollableNode) {
        scrollableNode.scrollTop = scrollableNode.scrollHeight;
      }
    }
  };

  // Allow DOM to update before scrolling
  const timeout = setTimeout(scrollToBottom, 100);

  return () => clearTimeout(timeout); // Clean up the timeout
}, [messages]);



                // just in js
const handleUserMessage = () => {
  if (input.trim()) {
    // Replace Arabic 'ي' with Persian 'ی' in the input
    const normalizedInput = input
        .replace(/ي/g, "ی")
        .replace(/ك/g, "ک");

    setMessages([...messages, { text: normalizedInput, sender: "user" }]);
    const response = generateResponse(normalizedInput);
    setMessages((prv) => [...prv, { text: <SvgSpinners3DotsScale />, sender: "bot" }]);
    setTimeout(() => setMessages((prev) => [...prev.slice(0, -1)]), 990);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: response, sender: "bot" }]);
    }, 1000);
    setInput("");
  }
};


              // api from huggingface
// const handleUserMessage = async () => {
//   if (!input.trim()) return;

//   const userMessage = { sender: "user", text: input };
//   setMessages((prevMessages) => [...prevMessages, userMessage]);

//   try {
//     // Context about the user (this is where you introduce yourself)
//     const userIntroduction = "my name is Alireza \n you are my personal assistance \n my phone number is +989134436052 \n i am a designer and developer and you are in my portfolio website and this on of my client that aksing about me in next line";

//     // Build conversation history and include the user introduction
//     const conversationHistory = messages
//       .map((msg) => (msg.sender === "user" ? `User: ${msg.text}` : `Bot: ${msg.text}`))
//       .join("\n");

//     // Add the user introduction at the start of the prompt
//     const prompt = `${userIntroduction}\n ${input}`;

//     // Send the prompt to the Hugging Face model
//     const response = await hf.textGeneration({
//       model: "facebook/blenderbot-400M-distill", // Replace with any conversational model
//       inputs: prompt,
//       parameters: { max_length: 100 },
//     });

//     const botMessage = {
//       sender: "assistant",
//       text: response.generated_text.trim(),
//     };

//     setMessages((prevMessages) => [...prevMessages, botMessage]);
//   } catch (error) {
//     console.error("Error with Hugging Face API:", error);
//     const errorMessage = {
//       sender: "assistant",
//       text: "Sorry, something went wrong. Please try again later.",
//     };
//     setMessages((prevMessages) => [...prevMessages, errorMessage]);
//   }

//   setInput("");
// };

  const detectLanguage = (message) => {
    const persianCharacters = /[\u0600-\u06FF]/;
    return persianCharacters.test(message) ? "persian" : "english";
  };

const getRandomResponse = (responses) => {
  const randomIndex = Math.floor(Math.random() * responses.length);
  return responses[randomIndex];
};

const generateResponse = (message) => {
  const language = detectLanguage(message);

  // Match greetings
  if (knowledgeBase.greetings[language].some((greet) => message.includes(greet))) {
    const greetingResponses = language === "english" 
      ? ["Hello🤗! How can I help you today?", "Hey there! How can I assist you?", "Hi! What's on your mind today?"] 
      : ["سلام🤗! چطور می‌توانم به شما کمک کنم؟", "سلام! چطور می‌توانم کمک کنم؟", "سلام! چی شده؟"];
    return getRandomResponse(greetingResponses);
  }

  if (knowledgeBase._greetings[language].some((greet) => message.includes(greet))) {
    const greetingResponses = language === "english" 
      ? ["I'm doing very well 😅. Feel free to ask anything about Alireza.", "I'm good, thanks for asking! Ask away.", "I'm doing great! Anything you want to know about Alireza?"] 
      : ["من خوبم ممنون😅، هر سوالي راجع به عليرضا داري از من بپرس", "حالم خوبه، ممنون! از علیرضا سوالی داری؟", "من خوبم، هر چی میخوای بپرس!"];
    return getRandomResponse(greetingResponses);
  }

  if (knowledgeBase.tnxs[language].some((greet) => message.includes(greet))) {
    const thankYouResponses = language === "english" 
      ? ["You're very welcome! Let me know if you need anything else.", "Glad I could help! What else can I do for you?", "No problem! Feel free to ask more questions."] 
      : ["خواهش می‌کنم! اگر نیاز به چیزی داشتی بپرس.", "خوشحال شدم که تونستم کمک کنم! سوالی داری؟", "هیچ مشکلی نیست! هر سوالی داری بپرس."];
    return getRandomResponse(thankYouResponses);
  }

  // Match farewells
  if (knowledgeBase.farewells[language].some((farewell) => message.includes(farewell))) {
    const farewellResponses = language === "english"
      ? ["Goodbye! Feel free to ask more questions anytime.", "Take care! I'm here if you need anything else.", "See you later! Don't hesitate to reach out."] 
      : ["خداحافظ! هر زمان سوالی داشتی بپرس.", "موفق باشی! هر وقت خواستی باز به من پیام بده.", "بدرود! سوالات بعدیتو مطرح کن."];
    return getRandomResponse(farewellResponses);
  }

  // Portfolio-related queries
  if (message.includes("who are you") || message.includes("who is alireza") || message.includes("علیرضا کیست") || message.includes("عليرضا كيست") || message.includes("علیرضا کیه")) {
    return knowledgeBase.personalInfo.whoIsAlireza[language];
  }

  if (message.includes("what do you do") || message.includes("what are you") || message.includes("شغل علیرضا")  || message.includes("شغل عليرضا")) {
    return knowledgeBase.personalInfo.whatAlirezaDoes[language];
  }

  if (message.includes("where am i") || message.includes("کجا هستم")) {
    return knowledgeBase.personalInfo.location[language];
  }

  if (message.includes("time") || message.includes("ساعت")) {
    return knowledgeBase.personalInfo.currentTime()[language];
  }

  if (message.includes("services") || message.includes("what can you do") || message.includes("خدمات علیرضا چیست")) {
    return knowledgeBase.personalInfo.services[language];
  }

  if (message.includes("contact") || message.includes("call alireza") || message.includes("تماس")) {
    return knowledgeBase.personalInfo.contact[language];
  }

  if (message.includes("alireza") || message.includes("ali") || message.includes("علیرضا") || message.includes("علی") ) {
    return knowledgeBase.personalInfo.whoIsAlireza[language];
  }
  if (["ok", "yes", "no",'باشه','اها','aha','آها','اوكي','خب','حله','نه','خير','hm','هم'].some((word) => message.toLowerCase().includes(word))) {
    return language === "english"
      ? "Got it! Let me know if there's anything else you need."
      : "متوجه شدم! اگر چیز دیگری نیاز داشتید اطلاع دهید.";
  }

  // Specific queries
  if (message.includes("who are you") || message.includes("شما کی هستید")) {
    return language === "english"
      ? "I'm Alireza's personal assistant and I'm here to help you."
      : "من دستیار شخصی علیرضا هستم و اینجا هستم تا به شما کمک کنم.";
  }

  if (message.includes("skills") || message.includes("مهارت‌های علیرضا")) {
    return knowledgeBase.personalInfo.skills[language];
  }

  if (message.includes("what can he do") || message.includes("علیرضا چه کاری می‌تواند انجام دهد")) {
    return knowledgeBase.personalInfo.capabilities[language];
  }

  if (message.includes("personality") || message.includes("habits") || message.includes("age") || message.includes("شخصیت") || message.includes("علایق")) {
    return knowledgeBase.personalInfo.personality[language];
  }

  return language === "english"
    ? "I'm sorry🤕, I didn't understand that. Can you ask more clearly?"
    : "متاسفم🤕، متوجه نشدم. می‌توانید واضح تر بپرسید؟";
};

useEffect(()=>{
  if(!visible){
    setTimeout(()=>{
      setMessages([{ text: "Hi, how can i help you?😊 You can ask me in english or persion.", sender: "bot" }])
    },1000)
  }
},[visible])

  return (
    <>
          <div className="chat" ref={scrollRef}>
            <div className="chat-title">
              <h1>Personal Assistance</h1>
              <h2>of Alireza's portfolio</h2>
              <figure className="avatar">
                <img
                  src="/avatar.jpg"
                  alt="Avatar"
                />
              </figure>
            </div>
            <div className="messages">
              <div className="messages-content" >
              <SimpleBar style={{height:'380px'}}>
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${
                      msg.sender === "user" ? "message-personal" : "new"
                    }`}
                  >
                  {msg.sender !== "user" && (
                    <figure className="avatar">
                      <img
                        src="/avatar.jpg"
                        alt="Bot Avatar"
                      />
                    </figure>
                  )}
                    <span style={{fontFamily:'IRANSans'}}> {msg.text} </span>
                  </div>
                ))}</SimpleBar>
              </div>
            </div>
            <div className="message-box">
              <textarea
                style={{fontFamily:'IRANSans', overflow:'hidden'}}
                type="text"
                className="message-input"
                placeholder="Type message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleUserMessage()}
              />
              <button
                type="submit"
                className="message-submit"
                onClick={handleUserMessage}
              >
                Send
              </button>
            </div>
          </div>
    </>
  );
};

export default Chatbot;
