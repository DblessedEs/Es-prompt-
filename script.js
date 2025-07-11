function showTab(tabId) {
  const tabs = document.querySelectorAll('.tab');
  const links = document.querySelectorAll('nav a');
  tabs.forEach(tab => tab.classList.remove('active'));
  links.forEach(link => link.classList.remove('active-link'));

  document.getElementById(tabId).classList.add('active');
  event.target.classList.add('active-link');
}

function generatePrompt() {
  const inputRaw = document.getElementById("userInput").value.trim();
  const input = inputRaw.toLowerCase();
  const output = document.getElementById("result");

  if (!input) {
    output.value = "⚠️ Please enter what kind of prompt you want.";
    return;
  }

  let prompt = `Write a high-quality, complete prompt for this task: "${inputRaw}".`;

  // 📝 Add blog-style rules
  if (input.includes("blog")) {
    prompt += ` The prompt should be in human tone, contain no plagiarism, and be 0% AI-detectable.`;
  }

  // ⚽ Add sports-style rules
  if (
    input.includes("football") ||
    input.includes("match") ||
    input.includes("prediction") ||
    input.includes("sport")
  ) {
    prompt += ` Include a confidence level in percentage (e.g. 85%).`;
  }

  // ✅ Final formatting
  prompt += ` Make it clear, actionable, and optimized for tools like ChatGPT.`;

  output.value = prompt;
}

function copyPrompt() {
  const result = document.getElementById("result");
  result.select();
  document.execCommand("copy");
  alert("✅ Prompt copied to clipboard!");
}