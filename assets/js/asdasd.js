import {
    Humano,
    Saiyan,
    Freezer,
    Namekiano,
    Androide,
} from "./clases/personaje.js";
let personajesObjeto = {};
let personajesArrayCards = [];
(async () => {
    try {
        const res = await fetch("personajes.json");
        const { personajes } = await res.json();
        personajes.forEach((item) => {
            personajesObjeto[item.name] = item;
        });
    } catch (error) {
        console.log(error);
    }
})();
const formulario = document.getElementById("formulario");
const listaPersonajes = document.getElementById("listaPersonajes");
const nombrePersonaje = document.getElementById("nombrePersonaje");
const poderPersonaje = document.getElementById("poderPersonaje");
const comentariosPersonaje = document.getElementById("comentariosPersonaje");
const previewPersonaje = document.getElementById("previewPersonaje");
nombrePersonaje.addEventListener("change", (e) => {
    console.log(e.target.value); // Goku
    previewPersonaje.innerHTML = `
    <img src="assets/imgs/${
        personajesObjeto[e.target.value].imagen
    }" alt="" class="img-fluid">
    `;
});
const pintarPersonajes = () => {
    listaPersonajes.innerHTML = "";
    personajesArrayCards.forEach((item) => {
        listaPersonajes.innerHTML += `
        <article class="card">
            <img src="assets/imgs/${item.imagen}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
                <p>${item.poder}</p>
            </div>
        </article>
        `;
    });
};
formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    if (nombrePersonaje.value === "Goku") {
        const goku = new Saiyan(
            nombrePersonaje.value,
            poderPersonaje.value,
            comentariosPersonaje.value,
            personajesObjeto[nombrePersonaje.value].imagen
        );
        personajesArrayCards.push(goku);
    }
    if (nombrePersonaje.value === "A18") {
        const a18 = new Androide(
            nombrePersonaje.value,
            poderPersonaje.value,
            comentariosPersonaje.value,
            personajesObjeto[nombrePersonaje.value].imagen
        );
        personajesArrayCards.push(a18);
    }
    if (nombrePersonaje.value === "Piccolo") {
        const piccolo = new Namekiano(
            nombrePersonaje.value,
            poderPersonaje.value,
            comentariosPersonaje.value,
            personajesObjeto[nombrePersonaje.value].imagen
        );
        personajesArrayCards.push(piccolo);
    }
    if (nombrePersonaje.value === "Freezer") {
        const freezer = new Freezer(
            nombrePersonaje.value,
            poderPersonaje.value,
            comentariosPersonaje.value,
            personajesObjeto[nombrePersonaje.value].imagen
        );
        personajesArrayCards.push(freezer);
    }
    if (nombrePersonaje.value === "Krilin") {
        const krilin = new Humano(
            nombrePersonaje.value,
            poderPersonaje.value,
            comentariosPersonaje.value,
            personajesObjeto[nombrePersonaje.value].imagen
        );
        personajesArrayCards.push(krilin);
    }
    pintarPersonajes();
});










