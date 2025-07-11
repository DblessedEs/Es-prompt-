function generatePrompt() {
  const inputRaw = document.getElementById("userInput").value.trim();
  const input = inputRaw.toLowerCase();
  const output = document.getElementById("result");

  if (!inputRaw) {
    output.value = "⚠️ Please type what you want a prompt for.";
    return;
  }

  let prompt = "";

  // BLOG IDEA GENERATION
  if (input.includes("blog ideas") || input.includes("blogging ideas")) {
    prompt = `Create a list of 10 unique blog topics tailored for: "${inputRaw}". Each idea should be specific, practical, and highly relevant. Include a 1–2 sentence explanation under each to help guide the writer. Avoid generic advice — keep it niche, useful, and original.`;
  }

  // BLOG POST WRITING
  else if (input.includes("blog") || input.includes("article")) {
    prompt = `Write a full blog post based on the topic: "${inputRaw}". Begin with a powerful introduction, structure your content with 3–5 subheadings, and end with a helpful conclusion. Keep the tone engaging, informative, and suited to a youth audience.`;
  }

  // STORY WRITING
  else if (input.includes("story")) {
    prompt = `Write a powerful fictional story based on: "${inputRaw}". Include well-developed characters, conflict, and a twist ending. The story should have emotional depth and a realistic setting. Avoid clichés and be creative.`;
  }

  // SPORTS PREDICTION
  else if (
    input.includes("football") ||
    input.includes("match") ||
    input.includes("sport") ||
    input.includes("prediction")
  ) {
    prompt = `Analyze and predict the outcome of this match: "${inputRaw}". Consider recent form, key player stats, injuries, and team motivation. Deliver your final score prediction and goal scorers if relevant. Make it sound like a real sports analyst.`;
  }

  // EVERYTHING ELSE
  else {
    prompt = `Create a complete prompt for this task: "${inputRaw}". It should be direct, creative, and ready to use in an AI tool like ChatGPT or Claude. Focus on making it clear, detailed, and useful.`;
  }

  output.value = prompt;
}

function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}
