const generateBtn = document.querySelector(".generate-button");
const promptInput = document.querySelector(".prompt-input");
const generatedImage = document.querySelector(".generated-image");

const showNotification = (message) => {
  alert(message);
};

const generateImage = async () => {
  const prompt = promptInput.value;

  if (prompt) {
    try {
      generatedImage.scr = "./images/placeimg.svg";

      const response = await fetch("http://localhost:4000/generateImage", {
        method: "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify({prompt: prompt}),
      });

      const data = await response.json();
    } catch (error) {
      console.log(error);
      showNotification("The image could not be generated...");
      generatedImage.scr = "./images/myImg.gif/";
    }
  } else {
    showNotification("Please enter a prompt");
  }
};

generateBtn.addEventListener("click", generateImage);
