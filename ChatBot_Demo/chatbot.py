
import difflib


qa_pairs = {
   
    "hi": "Hello! 😊 Nice to meet you.",
    "hii": "Hello! 👋 How are you?",
    "hello": "Hi there! 🌸",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "i am fine": "Glad to hear that! Keep smiling 😊",
    "i am also fine": "Awesome! Stay positive and take care 🌟",
    "What is your name ": "I am your Student Mental Health Assistant 🤖 ",
    "what can you do": "I can help answer questions about student mental health and support features! Ask me anything.",
    "thank you": "You're welcome! If you have more questions, feel free to ask",
    "thanks": "No problem! I'm here to help anytime 😊",
    "bye": "Goodbye! Take care and stay positive! 👋",
     "ok bye": "Goodbye! Take care and stay positive! 👋",
     "What is your purpose": "My purpose is to assist students with mental health challenges by providing information and support resources.",
     "what is your short  name" : "Call me Just a Friend  😉",
    " can i ask one more question": "Of course! Ask me anything about student mental health and support features.",
    "sure": "Great! What would you like to know?",
    "ok": "Alright! Feel free to ask your question.",

   
    "what are the most common mental health challenges faced by students in higher education":
        "The most common challenges include stress, anxiety, depression, burnout, and feelings of isolation.",

    "how do academic pressures impact students’ psychological well-being":
        "High academic pressure often leads to stress, anxiety, lack of sleep, and sometimes depression.",

    "what role does social isolation or homesickness play in student mental health":
        "Social isolation and homesickness can increase loneliness, stress, and make students more vulnerable to depression.",

    "how do financial or career-related worries affect students’ stress levels":
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
        "Around 10–20 minutes daily for quick activities and resources.",

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
        "Gamification, regular updates, and personalized suggestions help keep students engaged."
}


def chatbot_response(user_input):
    user_input = user_input.lower().strip()

    
    best_match = difflib.get_close_matches(user_input, qa_pairs.keys(), n=1, cutoff=0.6)
    if best_match:
        return qa_pairs[best_match[0]]
    else:
        return "Sorry, I don’t know the answer to that yet. 🙏"



print("🤖 Chatbot: Hi, I am your Student Mental Health Assistant!")
print("Ask me a question (type 'quit' to exit).")

while True:
    user = input("You: ")
    if user.lower() == "quit":
        print("🤖 Chatbot: Take care! Goodbye 👋")
        break
    response = chatbot_response(user)
    print("🤖 Chatbot:", response)
