import "../css/menu.css"

import chocoImg from "../img/cioccolato.jpg"
import fragolaImg from "../img/fragola.jpg"
import cocoImg from "../img/coco.jpg"
import mentaImg from "../img/menta.png"
import nutellaImg from "../img/nutella.jpg"
import almondImg from "../img/mandorla.jpg"


const menuBtn = document.getElementById("menu-btn")
menuBtn.addEventListener("click", showMenu)

function showMenu () {
    const content = document.querySelector(".content")
    content.innerHTML = `
    <div class="menu">
      <div class="card">
        <img src="${chocoImg}" alt="cioccolato flavor">
        <div class="img-shadow"></div>
        <p><strong>Cioccolato</strong>: Chocolate flavored icecream with choco chips</p>
      </div>
      <div class="card">
        <img src="${fragolaImg}" alt="fragola flavor">
        <div class="img-shadow"></div>
        <p><strong>fragola</strong>: Strawberry flavored icecream with frozen fruits</p>
      </div>
      <div class="card">
        <img src="${cocoImg}" alt="coco flavor">
        <div class="img-shadow"></div>
        <p><strong>cocco</strong>: Coconut flavored icecream with grated coconut toppers</p>
      </div>
      <div class="card">
        <img src="${mentaImg}" alt="menta flavor">
        <div class="img-shadow"></div>
        <p><strong>menta</strong>: Mint flavored icecream with frozen mint liquor</p>
      </div>
      <div class="card">
        <img src="${nutellaImg}" alt="nutella flavor">
        <div class="img-shadow"></div>
        <p><strong>nutella</strong>: Nutella flavored icecream with chestnut pieces</p>
      </div>
      <div class="card">
        <img src="${almondImg}" alt="mandorla flavor">
        <div class="img-shadow"></div>
        <p><strong>mandorla</strong>: Almond flavored icecream with almond toppers</p>
      </div>
    </div>
    `
}

