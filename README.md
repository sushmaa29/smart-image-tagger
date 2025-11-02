*Smart Image Tagger

**Smart Image Tagger** is a web-based AI application that identifies everyday objects and analyzes environmental greenery directly in the browser — powered by **TensorFlow.js** and **JavaScript**.

This project demonstrates how pre-trained deep learning models can be integrated into web applications to make AI lightweight, fast, and sustainable.

---

##   Features
-  Upload any image — the app automatically detects and classifies objects.  
-   Uses **MobileNet (TensorFlow.js)** to recognize over **1,000 ImageNet categories**.  
-   Calculates vegetation coverage percentage using pixel-level color analysis.  
-   Emoji-enhanced, user-friendly interface built with **HTML, CSS, and JavaScript**.  
-   Runs completely in-browser — **no server or external API required**.

---

##   Tech Stack
| Category | Technologies |
|-----------|---------------|
| **Frontend** | HTML, CSS, JavaScript |
| **AI / ML** | TensorFlow.js (MobileNet) |
| **Hosting** | GitHub Pages |
| **Tools** | VS Code, Git, GitHub |

---

## 🚀 How It Works
1. Loads the **MobileNet** deep learning model from TensorFlow.js.  
2. When an image is uploaded, it’s processed into tensors and classified.  
3. Displays top predicted labels with confidence percentages.  
4. Performs pixel-wise analysis to calculate greenery coverage.  
5. Shows both AI predictions and greenery score in an intuitive UI.

---

## 💻 Run Locally
To run this project on your computer:
```bash
# Clone the repository
git clone https://github.com/sushmaa29/smart-image-tagger.git

# Open the folder
cd smart-image-tagger

# Run
Open index.html in your web browser
🧩 Future Improvements

🔹 Add live camera input for real-time detection.

🔹 Integrate COCO-SSD for multiple object recognition.

🔹 Visualize confidence scores with bar indicators.

🔹 Store detection results for analytics.

🌱 Impact

This project contributes to sustainable technology by promoting AI for environmental awareness, enabling object recognition and greenery analysis — reflecting the use of AI in climate and ecological applications.

👩‍💻 Author

Sushma Koduri
Built with ❤️ using JavaScript and TensorFlow.js