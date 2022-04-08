/*

Consegna:
1.Dai tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
 creare un array di oggetti (manualmente)
2. aggiornare il codice con i nuovi valori
3. aggiungere allo slider una timing function per far partire lo slider in automatico (con un bottone per fermarlo)
4. refactoring
Bonus:
aggiungere un effetto al cambio dell'immagine

*/

const items = [
  {
    immagine: 'img/01.jpg',
    titolo: "Svezia",
    testo:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
  },
  {
    immagine: 'img/02.jpg',
    titolo: "Svizzera",
    testo:  "Lorem ipsum",
  },
  {
    immagine: 'img/03.jpg',
    titolo: "Gran Bretagna",
    testo:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
  },
  {
    immagine: 'img/04.jpg',
    titolo: "Germania",
    testo:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  },
  {
    immagine: 'img/05.jpg',
    titolo: "Paradise",
    testo:  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
  }
];
console.log(items);

//variabile per raccogliere tutto l'html che va in items-container
let itemTemplate = "";

//variabile per raccogliere tutto l'html che va in thumbs-container
let thumbTemplate = "";

// preparo una varibile con l'indice dell'elemento attivo e la pongo inizialmente a 0 ovvero il primo elemento dell'array
let currentIndexActive = 0;

//eseguo il ciclo for sull'array delle immagini (items), vado a prendermi gli oggetti e le chiavi che mi interessano e popolo l'html delle due varibaili da stampare nei due contenitori (immagini e thumbnails)
for (let i = 0; i < items.length; i++) {

  let itemsImmagine = items[i].immagine;
  let itemsTitolo = items[i].titolo;
  let itemsTesto = items[i].testo;

  let classActive = "";
  if (i === currentIndexActive) {
    classActive = "active";
  }
  itemTemplate += `
  <div class="item ${classActive}">
    <img src="${itemsImmagine}" />
      <div class="title">
        <h2>${itemsTitolo}</h2>
        <p>${itemsTesto}</p>
      </div>
  </div>`;
  thumbTemplate += `
  <div class="thumb ${classActive}">
    <img src="${itemsImmagine}" alt="" />
  </div>`;
}
//console.log(thumbTemplate);

// metto in due variabili rispettivamente i contenitori che si trovano nell'html
const itemsContainer = document.querySelector(".items-container");
const thumbsContainer = document.querySelector(".thumbs-container");
//console.log(itemContainer);

//stampo l'html corrispondente nei due contenitori
itemsContainer.innerHTML = itemTemplate;
thumbsContainer.innerHTML += thumbTemplate;
//document.querySelector(".item").classList.add("active");

//Pulsanti
//.next .fa-circle-chevron-down
//.prev .fa-circle-chevron-up
//metto nelle variabili next e prev i due pulsanti
const next = document.querySelector(" .fa-circle-chevron-down");
const prev = document.querySelector(" .fa-circle-chevron-up");
//console.log(next, prev);
function slideDown() {
  //prendere immagine con currentIndexActive e togliere classe active
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 4) {
    currentIndexActive = 0;
  } else {
    currentIndexActive++;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}
function slideUp() {
  const imgs = document.getElementsByClassName("item");
  imgs[currentIndexActive].classList.remove("active");
  const thumbs = document.getElementsByClassName("thumb");
  thumbs[currentIndexActive].classList.remove("active");
  //console.log(imgs);
  if (currentIndexActive === 0) {
    currentIndexActive = items.length - 1;
  } else {
    currentIndexActive--;
  }
  //console.log(currentIndexActive);
  imgs[currentIndexActive].classList.add("active");
  //console.log(currentIndexActive);
  thumbs[currentIndexActive].classList.add("active");
}

next.addEventListener("click", slideDown);
prev.addEventListener("click", slideUp);

// aggiungo slideshow automatico 

let startSlideShow = document.getElementById('button').addEventListener('click', startSetInterval);

let myInterval;

function startSetInterval() {
    myInterval = setInterval(automaticSlideShow, 1000);
}

let stopSlideShow = document.getElementById('button-2').addEventListener('click', stopSetInterval);

function stopSetInterval() {
    clearInterval (myInterval)
}

function automaticSlideShow(){
  for (let i = 0; i < items.length; i++) {

    let itemsImmagine = items[i].immagine;
    let itemsTitolo = items[i].titolo;
    let itemsTesto = items[i].testo;
  
    let classActive = "";
    if (i === currentIndexActive) {
      classActive = "active";
    }
    itemTemplate += `
    <div class="item ${classActive}">
      <img src="${itemsImmagine}" />
        <div class="title">
          <h2>${itemsTitolo}</h2>
          <p>${itemsTesto}</p>
        </div>
    </div>`;
    thumbTemplate += `
    <div class="thumb ${classActive}">
      <img src="${itemsImmagine}" alt="" />
    </div>`;
  }
  slideDown();
}



