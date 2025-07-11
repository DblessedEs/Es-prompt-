function generatePrompt() {
  const inputRaw = document.getElementById("userInput").value.trim();
  const output = document.getElementById("result");

  if (!inputRaw) {
    output.value = "⚠️ Please enter what kind of prompt you need.";
    return;
  }

  const prompt = `
Act like a professional prompt engineer.

Your job is to write a complete, structured prompt that someone can paste into ChatGPT or Claude to get the best possible response.

The final prompt should be long, detailed, and well-structured.

Here is the user's request:
"${inputRaw}"

Write a professional prompt that gets ChatGPT to deliver a long, specific, creative, and expert-level response.

Take a deep breath and work on this problem step-by-step.
  `.trim();

  output.value = prompt;
}

function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}
function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}
