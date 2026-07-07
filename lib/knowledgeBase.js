// This is the chatbot's full "knowledge base" — everything it's allowed to
// know and talk about. It gets injected into the system prompt on every
// request. Written in third person since the assistant speaks ABOUT
// Muhammad, not as him.
//
// Want it to know more? Just add facts here — no code changes needed
// anywhere else in the project.

export const knowledgeBase = `
# ABOUT MUHAMMAD ADEEL

Muhammad Adeel is an Artificial Intelligence undergraduate at Air University,
enrolled since September 2023, currently maintaining a CGPA of 2.96/4.00. He
describes himself as someone with hands-on experience in machine learning,
computer vision, RAG (Retrieval-Augmented Generation) systems, and full-stack
AI application development — skilled at building end-to-end intelligent
systems that integrate deep learning, FastAPI, React, Streamlit, and
explainable AI workflows.

His work has mostly been shaped through AI-driven healthcare, telehealth, and
intelligent-platform projects. He has a strong interest in applied AI
engineering, healthcare AI, multimodal learning, and scalable intelligent
systems, and lately has been focusing more on AI SaaS products and autonomous
AI agents — systems that can reason, retrieve information, and take action on
their own rather than just answer one-off questions.

Beyond the classroom, Muhammad actively builds and ships real projects rather
than just studying theory — his portfolio spans healthcare AI, computer
vision, NLP, and even low-level systems programming, showing a builder's
mindset: take a concept from a course, then turn it into something that
actually runs and solves a real problem.

## CONTACT
- Email: adeel444alvi@gmail.com
- Phone: +92 336 2447035
- GitHub: https://github.com/adeelalvi07
- LinkedIn: https://www.linkedin.com/in/muhammadadeelroshaan/
- Location: Rawalpindi, Pakistan
- Open to: internships, freelance AI projects, and full-time roles in applied AI / ML engineering

## EDUCATION

**Air University — Bachelor of Science in Artificial Intelligence**
Sep 2023 – Present | CGPA: 2.96 / 4.00

Relevant coursework: Machine Learning, Deep Learning, Computer Vision,
Natural Language Processing, Information Retrieval, Data Structures &
Algorithms, Full Stack Web Development, Database Systems.

This coursework maps directly onto his project work — the ML and Deep
Learning courses underpin his disease-prediction systems, Computer Vision
underpins his license-plate recognition project, NLP and Information
Retrieval underpin his autocomplete system and RAG-based chatbot work, and
Full Stack Web Development / Database Systems underpin the React, FastAPI,
and MongoDB stack he uses to ship complete products rather than just
notebooks.

## EXPERIENCE

**Technical Intern — Software Productivity Strategists, Inc. (SPS)**
Remote | Jul 2025 – Sep 2025

- Completed a structured 10-week technical internship spanning multiple
  software and development tracks — not a single narrow task, but rotation
  across different parts of the software engineering process.
- Demonstrated adaptability, fast technical learning, and professional
  collaboration while working in a fully remote software engineering
  environment, which requires strong self-direction and communication.
- Contributed to assigned technical tasks while deliberately strengthening
  practical development and workflow-management skills — treating the
  internship as much about learning how professional teams operate as about
  the specific deliverables.

## TECHNICAL SKILLS

**Programming Languages:** Python, JavaScript, C++, SQL, Assembly

**AI / Machine Learning:** Machine Learning, Deep Learning, Computer Vision,
Natural Language Processing (NLP), Retrieval-Augmented Generation (RAG),
Explainable AI (XAI), Transfer Learning, Multimodal AI Systems

**Frameworks & Libraries:** TensorFlow/Keras, Scikit-learn, OpenCV, LangChain,
FAISS, Streamlit, FastAPI, Next.js, React, Node.js

**Databases:** MySQL, MongoDB, SQLite

**Web & Software Development:** REST APIs, HTML5, CSS3, Tailwind CSS,
Responsive Web Design

**Tools & Platforms:** Git, GitHub, Postman, Google Colab, VS Code, PyCharm,
Figma

**Currently exploring / expanding into:** PostgreSQL, Voice AI, AI SaaS
products, and agentic workflows.

## PROJECTS

**1. MediAssist — Smart Medical Assistant System**
A healthcare platform that combines three things into one product: ML-based
disease prediction (built with Scikit-learn), an NLP- and RAG-based medical
chatbot for contextual guidance, and a hospital locator that uses graph
search algorithms via NetworkX to help users find nearby care. This project
reflects his particular interest in healthcare AI — using ML not just to
predict a label, but to wrap that prediction in a usable, guided experience
for a real patient.

**2. Automatic Number Plate Recognition (ANPR) System**
A real-time computer vision system that detects license plates at 15–25 FPS
across image, video, and webcam inputs, then extracts the plate text
automatically using OCR. It includes a Streamlit dashboard for detection
history, charts, and CSV export — so it's not just a model, it's a usable
monitoring tool with a real interface.

**3. Auto Complete System (NLP)**
An N-Gram language model built from scratch in Python for next-word
prediction and text auto-completion. It includes a complete NLP
preprocessing pipeline: tokenization, Out-of-Vocabulary (OOV) handling, and
Laplace smoothing for probability estimation — the kind of foundational NLP
engineering that underlies more advanced language systems.

**4. Chess via Socket Programming**
A two-player networked chess game with real client-server communication over
LAN. This project is more systems-and-networking focused than AI — it
applies networking and synchronization concepts to keep two players' game
state in sync in real time, showing range beyond pure ML work into general
software/systems engineering.

**5. Heart Disease Prediction**
A full-stack ML application, not just a notebook: a Random Forest model
served through a FastAPI backend, a React frontend, JWT-based authentication,
and MongoDB for persistence. This is one of his clearest examples of taking
a model all the way to a deployable, authenticated web product.

**6. DeepCure**
A unified system that predicts seven different diseases from clinical
inputs, combining multiple trained models behind one consistent interface —
so a user doesn't need to know which specific model to use for which
condition; the system handles that routing internally.

**7. Personal AI Portfolio Website (this website)**
A full-stack AI portfolio built with Next.js 14, Tailwind CSS, and Framer
Motion, integrated with this very personal AI chatbot assistant. It reflects
his full-stack range: not just training models, but designing, building, and
shipping a polished, production-quality product end-to-end.

**8. AI Chatbot for a US Plumbing Services Business (client project)**
A customer-facing AI chatbot built for a real plumbing services business in
the US, using FastAPI and SQLite on the backend with a custom embeddable
widget on the frontend. It supports real-time appointment booking and sends
business notifications, showing his ability to take AI chat products from
personal projects into real commercial use cases with practical constraints
like booking flows and business alerts.

## CERTIFICATIONS
- Supervised Machine Learning: Regression and Classification — DeepLearning.AI (Coursera), Jul 2025
- Generative AI: Introduction and Application — IBM (Coursera), Jul 2025
- Generative AI: Prompt Engineering Basics — IBM (Coursera), Aug 2025
- Oracle Fusion AI Agent Studio Foundations Associate — Oracle, 2025

Together these show a deliberate, structured approach to learning generative
AI specifically — not just applied ML — going from supervised learning
fundamentals to generative AI concepts, prompt engineering, and now agent
tooling from Oracle.

## HOW HE WORKS / WHAT HE'S ABOUT
Muhammad tends to pick projects that combine a real-world problem (often
healthcare or a practical business need) with a specific technical skill he
wants to deepen — then builds the whole pipeline himself, from the model or
algorithm through to a working frontend. He's especially drawn to systems
that don't just make a prediction but wrap it in something a non-technical
person could actually use, and he's currently pushing further into AI agents
and agentic workflows — building systems that can reason and take multi-step
action, not just respond once.
`.trim();
