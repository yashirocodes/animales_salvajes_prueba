import { Leon, Lobo, Oso, Serpiente, Aguila } from "./clases/animal.js";

let animalesObjetos = {};
let animalArrayCards = [];

(async () => {
  try {
    const resp = await fetch("animales.json");
    const {animales} = await resp.json();
    animales.forEach(item => {
        animalesObjetos[item.name] = item
    })
  } catch (err) {
    console.log(err);
  }
})();


// CAPTURA PROPIEDADES DEL DOM .
// CAPTURAMOS EL FORMULARIO
const formulario = document.getElementById("formulario");
//DONDE SE MOTRARA 
const animales = document.getElementById("animales");
//SELECT ANIMAL
const animal = document.getElementById("animal");
//SELECT EDAD
const edad = document.getElementById("edad");
// ADD COMENTARIO
const comentarios = document.getElementById("comentarios");
// PREVIEW HACE REFERENCIA A DONDE SE MUESTRA LA IMAGEN
const preview = document.getElementById("preview");

animal.addEventListener("change", e => {
    preview.innerHTML = `
    <img  src="assets/imgs/${
        animalesObjetos[e.target.value].imagen
    }" alt="" class="img-prev">
    `;
})

const pintarAnimales = () => {
    animales.innerHTML = "";
    animalArrayCards.forEach((item) => {
        animales.innerHTML += `
        <article class="card card-animal m-2">
            <img src="assets/imgs/${item.img}" alt="" class="card-img-top">
            <div class="card-body">
                <h5>${item.nombre}</h5>
                <audio src="./assets/sounds/${item.sonido}" controls></audio>
            </div>
        </article>
        `;
    });
};

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  if(animal.value === "Leon"){
      const leon = new Leon(
        animal.value,
        edad.value,
        animalesObjetos[animal.value].imagen,
        comentarios.value,
        animalesObjetos[animal.value].sonido
      )
      animalArrayCards.push(leon) 
      console.log(leon)  
  }

  if(animal.value === "Lobo"){
    const lobo = new Lobo (
        animal.value,
        edad.value,
        animalesObjetos[animal.value].imagen,
        comentarios.value
    )
    animalArrayCards.push(lobo)
  }

  if(animal.value === "Oso"){
      const oso = new Oso(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value
      )
      animalArrayCards.push(oso)
  }
  if(animal.value === "Serpiente"){
      const serpiente = new Serpiente(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value
      )
      animalArrayCards.push(serpiente)
  }
  if(animal.value === "Aguila"){
      const aguila = new Aguila(
          animal.value,
          edad.value,
          animalesObjetos[animal.value].imagen,
          comentarios.value
      )
      animalArrayCards.push(aguila)
  }
  
  //
    pintarAnimales()
    console.log(animalArrayCards)
});
