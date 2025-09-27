const qa_pairs = {
 
  hi: "Hello! 😊 Nice to meet you.",
  hii: "Hello! 👋 How are you?",
  hello: "Hi there! 🌸",
  "how are you": "I'm just a bot, but I'm doing great! How about you?",
  "i am fine": "Glad to hear that! Keep smiling 😊",
  bye: "Goodbye! Take care and stay positive! 👋",
  "what is your name": "I am your Student Mental Health Assistant 🤖",
  "what can you do":
    "I can help answer questions about student mental health and support features! Ask me anything.",
  "thank you": "You're welcome! If you have more questions, feel free to ask.",
  thanks: "No problem! I'm here to help anytime 😊",
  "what is your short name": "Call me Just a Friend 😉",
  "i am fine and you":
    "I'm glad to hear that! I'm just a bot, but I'm here to support you.",
  "i am also fine": "Glad to hear that! Keep smiling and stay postive 😊",

  "what are the most common mental health challenges faced by students in higher education":
    "The most common challenges include stress, anxiety, depression, burnout, and feelings of isolation.",
  "how do academic pressures impact students' psychological well-being":
    "High academic pressure often leads to stress, anxiety, lack of sleep, and sometimes depression.",
  "what role does social isolation or homesickness play in student mental health":
    "Social isolation and homesickness can increase loneliness, stress, and make students more vulnerable to depression.",
  "how do financial or career-related worries affect students' stress levels":
    "Financial struggles and career worries often cause constant anxiety, reduced focus, and emotional distress.",
  "what kinds of support do students currently rely on when they feel overwhelmed":
    "Students often rely on friends, family, peer groups, online resources, and sometimes campus counselors.",
  "what gaps exist in the current mental health services offered by universities":
    "Current services often lack accessibility, personalization, awareness, and timely availability.",
  "how comfortable are students with seeking professional counseling in person":
    "Many students feel uncomfortable due to stigma, fear of judgment, or lack of privacy.",
  "what digital resources are students currently using for stress management":
    "Students use meditation apps, journaling apps, motivational podcasts, and online support groups.",
  "how do cultural or social stigmas influence help-seeking behavior":
    "Stigma often prevents students from seeking help, making them feel weak or judged for opening up.",
  "what barriers prevent students from accessing timely psychological support":
    "Barriers include lack of awareness, financial issues, stigma, and insufficient availability of counselors.",

  "should the system provide self-assessment tools for stress, anxiety, and depression":
    "Yes, self-assessment tools can help students identify their mental health conditions early.",
  "would students benefit from mood tracking and journaling features":
    "Yes! Journaling and mood tracking help students reflect and understand emotional patterns.",
  "should the system include guided meditation, breathing exercises, or mindfulness sessions":
    "Absolutely! These activities reduce stress, calm the mind, and improve focus.",
  "how important is integration with academic calendars":
    "It is very important. Exam reminders and stress tips can help students prepare without burnout.",
  "should ai-driven chatbots provide 24/7 emotional support":
    "Yes, 24/7 chatbot support ensures students always have someone to talk to.",
  "should there be options for group discussions or peer support forums":
    "Yes, peer forums encourage community support and reduce loneliness.",
  "how useful would reminders for self-care activities be":
    "Very useful! Gentle reminders for sleep, water, and breaks can boost mental health.",
  "should the system connect students directly to campus counselors":
    "Yes, direct connection to counselors makes the system more effective and reliable.",
  "should gamification be included to encourage use":
    "Yes, gamification keeps students engaged through streaks, progress, and rewards.",
  "how can the system personalize support based on individual student needs":
    "By tracking mood, preferences, and behavior, the system can give tailored suggestions.",

  
  "how can the system ensure inclusivity for students with disabilities":
    "By supporting screen readers, captions, and accessible design.",
  "should the system support multiple languages to cater to international students":
    "Yes, multilingual support makes it inclusive and widely usable.",
  "what design elements would make the system user-friendly and engaging":
    "A clean UI, simple navigation, colorful visuals, and interactive features.",
  "how can offline access be supported":
    "Offline mode with saved resources ensures students can access help anytime.",
  "should the system be mobile-first, web-based, or both":
    "Both! Mobile-first for daily use, web for detailed access.",
  "how much time are students realistically willing to spend on such an app daily":
    "Around 10-20 minutes daily for quick activities and resources.",
  "should notifications be customizable to prevent overwhelm":
    "Yes, customizable notifications prevent overload and improve engagement.",
  "what accessibility features are essential":
    "Screen reader support, color contrast, font adjustment, and voice commands.",
  "should the app integrate with wearables for health tracking":
    "Yes, integration with smartwatches can help monitor stress and sleep.",
  "what kind of onboarding process will reduce initial resistance to use":
    "A simple, fun, and guided onboarding with easy steps will help students start quickly.",


  "how can sensitive mental health data be kept secure and confidential":
    "By using encryption, secure servers, and strict privacy policies.",
  "should students have full control over what data is shared":
    "Yes, full control builds trust and ensures privacy.",
  "how should crisis situations be handled ethically":
    "Immediate escalation to hotlines, professional help, and emergency contacts.",
  "should anonymity be allowed in peer support groups":
    "Yes, anonymity makes students more comfortable to share openly.",
  "what policies must be in place for data retention and deletion":
    "Clear policies for deleting data on request and limiting retention time.",
  "how can transparency about ai-generated responses be ensured":
    "By clearly labeling chatbot responses as AI-generated.",
  "should the app comply with local laws like gdpr or hipaa":
    "Yes, compliance ensures legal protection and user trust.",
  "how can the system prevent misuse of the platform":
    "Through moderation, reporting tools, and strict rules against bullying.",
  "should parental or faculty involvement ever be triggered and if so how":
    "Only in emergencies, and with strict privacy safeguards.",
  "how should the system handle emergency escalation":
    "By giving hotline numbers, counselor contacts, and alerting professionals when needed.",

  
  "what metrics should be used to measure the success of the system":
    "Metrics like student engagement, stress reduction, and satisfaction surveys.",
  "how can student feedback be continuously collected and integrated":
    "Through in-app surveys, feedback forms, and direct input options.",
  "should usage data be analyzed for improvements":
    "Yes, usage data helps improve features and user experience.",
  "what baseline mental health indicators should be tracked for progress":
    "Indicators like mood patterns, stress levels, and sleep quality.",
  "should the app provide personalized reports or insights to students":
    "Yes, personalized reports motivate students and show progress.",
  "how often should content be updated":
    "Content should be updated weekly or monthly for freshness.",
  "what role should professional psychologists play in designing content":
    "They should guide all content to ensure accuracy and safety.",
  "should the system run pilot testing before full-scale implementation":
    "Yes, pilot testing helps identify problems before launch.",
  "how can collaboration with university counseling centers be strengthened":
    "By integrating them into the system and promoting services jointly.",
  "what strategies can ensure long-term student engagement with the system":
    "Gamification, regular updates, and personalized suggestions help keep students engaged.",
};


function chatbotResponse(userInput) {
  let input = userInput.toLowerCase().trim();

  
  input = input
    .replace(/[^\w\s']|_/g, "")
    .replace(/\s+/g, " ")
    .trim();


  if (qa_pairs[input]) {
    return qa_pairs[input];
  }

  
  const questions = Object.keys(qa_pairs);

 
  let bestMatch = null;
  let highestScore = 0;

  for (const question of questions) {
    let score = 0;
    const cleanQuestion = question
      .toLowerCase()
      .replace(/[^\w\s']|_/g, "")
      .replace(/\s+/g, " ")
      .trim();


    if (cleanQuestion.split(" ").length < 4 && !input.includes(cleanQuestion)) {
      continue;
    }

   
    if (input.includes(cleanQuestion) || cleanQuestion.includes(input)) {
      score += 10;
    }

    
    const keyPhrases = getKeyPhrases(cleanQuestion);
    for (const phrase of keyPhrases) {
      if (input.includes(phrase)) {
        score += phrase.split(" ").length * 2; 
      }
    }

    
    const importantWords = getImportantWords(cleanQuestion);
    for (const word of importantWords) {
      if (input.includes(word)) {
        score += 1;
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestMatch = question;
    }
  }

  
  if (bestMatch && highestScore >= 3) {
    return qa_pairs[bestMatch];
  }

  
  if (
    input.includes("ai") ||
    input.includes("chatbot") ||
    input.includes("24/7") ||
    input.includes("emotional support")
  ) {
    return qa_pairs["should ai-driven chatbots provide 24/7 emotional support"];
  }

  
  if (
    input.includes("mental health challenge") ||
    input.includes("common challenge") ||
    (input.includes("student") && input.includes("mental health"))
  ) {
    return qa_pairs[
      "what are the most common mental health challenges faced by students in higher education"
    ];
  }

  return "I'm not sure how to answer that. Try asking about mental health challenges, available resources, or support options. Remember, I'm here to help!";
}


function getKeyPhrases(question) {
  const words = question.split(" ");
  const phrases = [];


  for (let i = 0; i < words.length - 1; i++) {
    for (let j = 2; j <= 4; j++) {
      if (i + j <= words.length) {
        const phrase = words.slice(i, i + j).join(" ");
        if (phrase.split(" ").every((word) => word.length > 3)) {
         
          phrases.push(phrase);
        }
      }
    }
  }

  return phrases;
}


function getImportantWords(question) {
  return question.split(" ").filter((word) => word.length > 4);
}


function sendMessage() {
  const inputField = document.getElementById("userInput");
  const userText = inputField.value;
  if (userText === "") return;

  const chatbox = document.getElementById("chatbox");

  
  const userMessageDiv = document.createElement("div");
  userMessageDiv.className = "user-message message-bubble slide-up";
  userMessageDiv.innerHTML = `
    <div class="flex items-start justify-end">
      <div class="ml-2 text-right flex-1">
        <p class="font-medium text-sm sm:text-base">You</p>
        <p class="text-xs sm:text-sm">${userText}</p>
      </div>
      <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white ml-2 flex-shrink-0">
        <i class="fas fa-user text-xs sm:text-sm"></i>
      </div>
    </div>
  `;
  chatbox.appendChild(userMessageDiv);

  inputField.value = "";
  chatbox.scrollTop = chatbox.scrollHeight;

  const typingIndicator = document.createElement("div");
  typingIndicator.className = "bot-message message-bubble";
  typingIndicator.innerHTML = `
    <div class="flex items-start">
      <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
        <i class="fas fa-robot text-xs sm:text-sm"></i>
      </div>
      <div class="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  `;
  chatbox.appendChild(typingIndicator);
  chatbox.scrollTop = chatbox.scrollHeight;


  setTimeout(() => {
    chatbox.removeChild(typingIndicator);

    const botReply = chatbotResponse(userText);
    const botMessageDiv = document.createElement("div");
    botMessageDiv.className = "bot-message message-bubble slide-up";
    botMessageDiv.innerHTML = `
      <div class="flex items-start">
        <div class="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-blue-500 flex items-center justify-center text-white mr-2 flex-shrink-0">
          <i class="fas fa-robot text-xs sm:text-sm"></i>
        </div>
        <div class="flex-1">
          <p class="font-medium text-sm sm:text-base">Mental Health Assistant</p>
          <p class="text-xs sm:text-sm">${botReply}</p>
        </div>
      </div>
    `;
    chatbox.appendChild(botMessageDiv);
    chatbox.scrollTop = chatbox.scrollHeight;
  }, 1000 + Math.random() * 1000);
}





window.onload = function () {

  setTimeout(() => {
    document.getElementById("userInput").focus();
  }, 500);
};
