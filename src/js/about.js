import "../css/about.css"

import mapImg from "../img/maps.png"

const aboutBtn = document.getElementById("about-btn")
aboutBtn.addEventListener("click", showAbout)

function showAbout () {
    const content = document.querySelector(".content")
    content.innerHTML = `
    <div class="about">
      <p><strong>tel:</strong> +569 8765 4321</p>
      <p><strong>email:</strong> contact@gelat.uk</p>
      <p><strong>adress:</strong> old street 143</p>
      <p><strong>Schedule:</strong> 8:00 - 17:00</p>
      <img src="${mapImg}" alt="map adress">
    </div>
    `
}