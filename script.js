function generatePrompt() {
  const inputRaw = document.getElementById("userInput").value.trim();
  const input = inputRaw.toLowerCase();
  const output = document.getElementById("result");

  if (!inputRaw) {
    output.value = "⚠️ Please type what you want a prompt for.";
    return;
  }

  let prompt = "";

  if (input.includes("blog") || input.includes("article")) {
    prompt = `Write a complete blog post about "${inputRaw}". Start with an engaging introduction, break down ideas into clear sections, and end with a practical conclusion. Ensure the content is unique and plagiarism-free.`;
  }

  else if (
    input.includes("sport") ||
    input.includes("prediction") ||
    input.includes("football") ||
    input.includes("match")
  ) {
    prompt = `Predict the outcome of "${inputRaw}". Include key player stats, recent form, team news, and a final prediction. Keep it concise and focused on facts.`;
  }

  else if (input.includes("story")) {
    prompt = `Write a compelling story based on the idea: "${inputRaw}". Include strong characters, clear conflict, and a powerful ending. Make the story creative and original.`;
  }

  else {
    // General fallback prompt
    prompt = `Create a detailed and creative AI prompt for the following task: "${inputRaw}". Make it clear, structured, and effective.`;
  }

  output.value = prompt;
}

function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}
