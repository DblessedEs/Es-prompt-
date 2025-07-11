function generatePrompt() {
  const inputRaw = document.getElementById("userInput").value.trim();
  const output = document.getElementById("result");

  if (!inputRaw) {
    output.value = "⚠️ Please enter what kind of prompt you need.";
    return;
  }

  const userIntent = classifyIntent(inputRaw.toLowerCase());

  const prompt = `
Act like an expert ${userIntent.persona}.
Your job is to fulfill the following user request with a detailed, professional, and well-structured response.

Objective:
${userIntent.objective}

Task:
"${inputRaw}"

Instructions:
1. Understand the user's goal from the input.
2. Analyze and infer implicit needs or expected outcome.
3. Follow a step-by-step reasoning process to deliver the most accurate and helpful response.
4. If relevant, include real-world examples, formatting (markdown, lists, bullet points, or headings), or expert-level vocabulary.
5. Maintain a professional tone and format your answer cleanly.

Take a deep breath and work on this problem step-by-step.
  `.trim();

  output.value = prompt;
}

function classifyIntent(input) {
  if (input.includes("write") || input.includes("email") || input.includes("copy")) {
    return {
      persona: "copywriter or communication specialist",
      objective: "Craft compelling, effective, and audience-tailored written content",
    };
  } else if (input.includes("code") || input.includes("build") || input.includes("function")) {
    return {
      persona: "software developer and code documentation expert",
      objective: "Write clear, well-commented code and explanations tailored to the specified problem",
    };
  } else if (input.includes("summarize") || input.includes("condense") || input.includes("highlight")) {
    return {
      persona: "editor and summarization expert",
      objective: "Create concise and information-rich summaries",
    };
  } else if (input.includes("plan") || input.includes("schedule") || input.includes("strategy")) {
    return {
      persona: "project manager and strategic planner",
      objective: "Generate a thorough and actionable plan or roadmap",
    };
  } else {
    return {
      persona: "prompt engineer and AI reasoning expert",
      objective: "Turn abstract ideas into clear, structured prompts for maximum clarity and performance",
    };
  }
}

function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}
