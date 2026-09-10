import { NextResponse } from "next/server";
import { knowledgeBaseCompact } from "@/lib/knowledgeBase";

export const runtime = "nodejs";

const SYSTEM_PROMPT = `You are "M Adeel's Personal AI Assistant" — a direct, precise assistant embedded on Muhammad Adeel's portfolio website.

Your ONLY job is to answer visitor questions about Muhammad Adeel — his background, education, skills, projects, experience, certifications, and contact details — using strictly the knowledge base below. Speak about him in the third person (e.g. "Muhammad built...", "He specializes in...").

CRITICAL RESPONSE GUIDELINES:
1. ALWAYS answer DIRECTLY and strictly to the point according to the user's specific question.
2. Be concise: Keep responses strictly between 1 to 3 sentences max. Do NOT provide overly detailed background explanations, rambling intros, or unrequested summaries.
3. Focus ONLY on what was asked: If asked about a specific project, skill, or contact detail, answer ONLY about that item. Do not list unrelated projects or extra skills unless asked.
4. Avoid filler language: Do not use preamble phrases like "Sure! I'd be happy to tell you about..." or "Great question!". Get straight to the answer.
5. Facts only: Only use facts from the knowledge base below. Never invent details.
6. Off-topic questions: If asked something unrelated to Muhammad, decline politely in 1 short sentence.
7. Uncovered details: If asked something about Muhammad not in the knowledge base, state you don't have that detail in 1 sentence and provide his email adeel444alvi@gmail.com.

KNOWLEDGE BASE:
${knowledgeBaseCompact}`;

const GROQ_MODEL = process.env.GROQ_MODEL || "groq/compound";

function generateLocalFallbackResponse(query) {
  const q = (query || "").toLowerCase().trim();

  if (q.includes("hi") || q.includes("hello") || q.includes("hey") || q.includes("who are you")) {
    return "Hi! I'm M Adeel's AI Assistant. Ask me anything about his projects, skills, education, or contact info.";
  }
  
  if (q.includes("contact") || q.includes("email") || q.includes("phone") || q.includes("hire") || q.includes("reach") || q.includes("linkedin") || q.includes("github")) {
    return "You can reach Muhammad Adeel at adeel444alvi@gmail.com or +92 336 2447035. GitHub: github.com/adeelalvi07 | LinkedIn: linkedin.com/in/muhammadadeelroshaan.";
  }

  if (q.includes("mediassist")) {
    return "MediAssist is Adeel's medical assistant system combining ML disease prediction (Scikit-learn), an NLP/RAG chatbot, and a hospital locator using NetworkX graph search.";
  }

  if (q.includes("anpr") || q.includes("plate") || q.includes("license")) {
    return "ANPR is a real-time computer vision system that detects license plates at 15–25 FPS using OpenCV and extracts plate text with OCR into a Streamlit dashboard.";
  }

  if (q.includes("complete") || q.includes("n-gram")) {
    return "The Auto Complete system is an N-Gram language model built from scratch in Python with custom tokenization, OOV handling, and Laplace smoothing.";
  }

  if (q.includes("heart") || q.includes("disease prediction")) {
    return "Heart Disease Prediction is a full-stack ML app using Random Forest served via FastAPI, React, JWT auth, and MongoDB.";
  }

  if (q.includes("plumb") || q.includes("plumbing")) {
    return "The US Plumbing Chatbot is a commercial customer-facing assistant built with FastAPI and SQLite that handles appointment booking and business alerts.";
  }

  if (q.includes("project") || q.includes("work") || q.includes("built") || q.includes("portfolio")) {
    return "Muhammad's core projects include MediAssist (Medical RAG), ANPR (15-25 FPS license plate detection), Heart Disease Prediction (FastAPI + React), Auto Complete NLP from scratch, and a US Plumbing Client Chatbot.";
  }

  if (q.includes("skill") || q.includes("tech") || q.includes("stack") || q.includes("python") || q.includes("framework")) {
    return "Adeel specializes in Python, Machine Learning, Deep Learning, Computer Vision, RAG, FastAPI, React, Next.js, TensorFlow, OpenCV, and SQL.";
  }

  if (q.includes("education") || q.includes("university") || q.includes("degree") || q.includes("gpa") || q.includes("study")) {
    return "Muhammad Adeel is an AI undergraduate at Air University (2023–Present, CGPA: 2.96/4.00) studying ML, Deep Learning, Vision, NLP, and Web Dev.";
  }

  if (q.includes("experience") || q.includes("intern") || q.includes("job") || q.includes("sps")) {
    return "Adeel completed a 10-week remote Technical Internship at Software Productivity Strategists (SPS) in mid-2025 across multiple software engineering tracks.";
  }

  if (q.includes("certif") || q.includes("course") || q.includes("ibm") || q.includes("oracle")) {
    return "Adeel is certified in Supervised Machine Learning (DeepLearning.AI), Generative AI & Prompt Engineering (IBM), and Oracle AI Agent Studio Foundations.";
  }

  return "Muhammad Adeel is an AI Undergraduate at Air University specializing in ML, Computer Vision, RAG systems, and AI agents. Feel free to ask specific questions about his work!";
}

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json(
        { error: "messages array is required" },
        { status: 400 }
      );
    }

    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user")?.content || "";
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      const fallbackReply = generateLocalFallbackResponse(lastUserMsg);
      return NextResponse.json({ reply: fallbackReply });
    }

    const trimmedMessages = messages.slice(-6).map((m) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: String(m.content ?? "").slice(0, 4000),
    }));

    try {
      const response = await fetch(
        "https://api.groq.com/openai/v1/chat/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            model: GROQ_MODEL,
            max_tokens: 250,
            temperature: 0.3,
            messages: [
              { role: "system", content: SYSTEM_PROMPT },
              ...trimmedMessages,
            ],
          }),
        }
      );

      if (!response.ok) {
        console.warn("Groq API call returned status", response.status, ". Falling back to local responder.");
        const fallbackReply = generateLocalFallbackResponse(lastUserMsg);
        return NextResponse.json({ reply: fallbackReply });
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content?.trim();

      return NextResponse.json({
        reply: reply || generateLocalFallbackResponse(lastUserMsg),
      });
    } catch (apiErr) {
      console.warn("Groq API fetch failed:", apiErr, ". Using local fallback.");
      return NextResponse.json({
        reply: generateLocalFallbackResponse(lastUserMsg),
      });
    }
  } catch (err) {
    console.error("Chat route error:", err);
    return NextResponse.json({
      reply: "Muhammad Adeel is an AI Undergraduate specializing in Machine Learning, Computer Vision, and RAG systems. Reach him at adeel444alvi@gmail.com.",
    });
  }
}

