import "../css/home.css";
import logoImg from "../img/chef.jpg"

const homeBtn = document.getElementById("home-btn")
homeBtn.addEventListener("click", showHome)

function showHome () {
    const content = document.querySelector(".content")

    content.innerHTML = ""

    const divHome = document.createElement("div")
    divHome.classList.add("home")

    const topText = document.createElement("p")
    topText.classList.add("top-text")
    topText.textContent = "Artesanal tradition since 1976"

    const img = document.createElement("img")
    img.src = logoImg
    img.classList.add("home-img")

    const bottomText = document.createElement("p")
    bottomText.classList.add("bottom-text")
    bottomText.textContent = "come to visit us!"

    divHome.appendChild(topText)
    divHome.appendChild(img)
    divHome.appendChild(bottomText)

    content.appendChild(divHome)
}