//Unspolash API
const count = 10;
const apiKey = "PgW2FbZj4v83yq_j7cjQ1SegR411cxSt5cA5XpIk-AQ";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos from Unsplash API
async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    // Catch Error Here
  }
}

// On Load
getPhotos();
