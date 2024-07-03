const body = document.querySelector("body");
const header = document.querySelector("header");
const mesProjets = document.querySelector(".mesProjets");
const login = document.querySelector(".login");
const instagram = document.querySelector(".instagram");

//Selection des éléments DOM
const btnCat = document.querySelectorAll(".btnCat");
const btnTous = document.getElementById("bouton-tous");
const bandeauEdition = document.querySelector(".bandeauEdition");
const boutonModifier = document.querySelector(".boutonModifier");
const LogOut = document.querySelector(".LogOut");
const openModalHTML = document.querySelector(".js-open-modal-trigger");
const filtresCategories = document.getElementById("filtres-categories");

//Apparition du bandeau et du bouton

async function apparitionEdition() {
  const verifConnection = localStorage.getItem("token");

  if (verifConnection) {
    createBandeau();
    openModalHTML.style.display = "block";
    boutonModifier.style.display = "block";
    filtresCategories.style.display = "none";
    login.innerHTML = "Logout";
    login.addEventListener("click", logout);
  } else {
    console.log("Erreur !");
  }
}

function createBandeau() {
  let bandeauEditionHTML = ` 
<div class="bandeauEdition admin-bandeau"><i class="fa-solid fa-pen-to-square"></i> Mode édition</div>
`;
  header.insertAdjacentHTML("beforebegin", bandeauEditionHTML);
  header.classList.add("admin-main");
}

apparitionEdition();

function logout(event) {
  event.preventDefault();
  // Creation des fonctionnalités du bouton de logout

  localStorage.removeItem("token");
  window.location.href = "index.html";
}
