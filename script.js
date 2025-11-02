let model;

// ✅ Load MobileNet model from TensorFlow.js (official)
async function loadModel() {
  const result = document.getElementById("result");
  result.innerHTML = "⏳ Loading MobileNet model...";
  model = await mobilenet.load(); // simple, built-in loader
  result.innerHTML = "✅ Model loaded! Upload an image.";
}
loadModel();

// 🧠 Emoji map for fun UI
const emojiMap = {
  tree: "🌳", forest: "🌲", building: "🏢", person: "🧍",
  dog: "🐶", cat: "🐱", bird: "🐦", car: "🚗", flower: "🌸",
  phone: "📱", laptop: "💻", razor: "🪒", bottle: "🧴",
  toothbrush: "🪥", makeup: "💄", food: "🍎", water: "💧"
};

// 📸 Handle image upload
document.getElementById("imageUpload").addEventListener("change", async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const img = document.getElementById("preview");
  const loader = document.getElementById("loader");
  const result = document.getElementById("result");

  result.innerHTML = "";
  img.style.display = "none";
  loader.style.display = "block";

  img.src = URL.createObjectURL(file);
  img.onload = async () => {
    loader.style.display = "none";
    img.style.display = "block";

    const predictions = await model.classify(img);
    displayResults(predictions);
    calculateGreenery(img);
  };
});

// 🪄 Display top 3 predictions
function displayResults(predictions) {
  const result = document.getElementById("result");
  result.innerHTML = "<h3>🔍 AI Predictions:</h3>";

  predictions.forEach((p) => {
    const emoji = findEmoji(p.className);
    result.innerHTML += `
      <div class="prediction-card">
        <span class="emoji">${emoji}</span>
        <span class="label">${p.className}</span>
        <span class="confidence">${(p.probability * 100).toFixed(2)}%</span>
      </div>`;
  });
}

// 🔎 Match emoji by keyword
function findEmoji(label) {
  for (let key in emojiMap) {
    if (label.toLowerCase().includes(key)) return emojiMap[key];
  }
  return "📷";
}

// 🌿 Greenery detector
function calculateGreenery(imgElement) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  canvas.width = imgElement.width;
  canvas.height = imgElement.height;
  ctx.drawImage(imgElement, 0, 0, imgElement.width, imgElement.height);

  const imgData = ctx.getImageData(0, 0, imgElement.width, imgElement.height);
  const data = imgData.data;
  let greenPixels = 0;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (g > 90 && g > r + 20 && g > b + 20) greenPixels++;
  }

  const totalPixels = imgElement.width * imgElement.height;
  const greeneryPercent = ((greenPixels / totalPixels) * 100).toFixed(2);

  result.innerHTML += `
    <div class="greenery-card">
      🌿 <b>Vegetation Coverage:</b> ${greeneryPercent}% of the image
    </div>`;
}
