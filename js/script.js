const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// lavoro su aside e creo le anteprime dall'arrey uno sotto l'altra

const aside = document.querySelector(".aside");
const containerImg = document.querySelector(".container-image")

let currentIndex = 0;

//ciclo for per assegnare le immagini all'aside

for (let i = 0; i < items.length; i++) {
    const anteprimaCorrente = items[i];
    const immagineCorrente = items[i];



    //una variabile a cui assegnare il primo indice e la classe per mostrare l'anteprima

    let attivaAnteprima = " ";
    let attivaImmagine = " ";

    if (i === currentIndex) { attivaAnteprima = "attiva" }
    if (i === currentIndex) { attivaImmagine = "attiva" }

    //crep gli elementi Anteprima e l'inserirsco in HTML

    const tagAnteprima = ` <div class="anteprima ${attivaAnteprima}"><img src="${anteprimaCorrente}" alt="img ${i}"></div>`;
    const tagImmagine = ` <img class="${attivaImmagine}" src="${immagineCorrente}" alt="img ${i}">`;
    aside.innerHTML += tagAnteprima;
    containerImg.innerHTML += tagImmagine;

}




//lavoro sulle freccie 


const frecciaSu = document.querySelector(".fa-angle-up");
const frecciaGiu = document.querySelector(".fa-angle-down");


frecciaSu.addEventListener("click", function () {

    const attivaAnteprima = aside.querySelector(".attiva");

    const attivaImmagine = containerImg.querySelector(".attiva");

    attivaAnteprima.classList.remove("attiva");
    attivaImmagine.classList.remove("attiva");

    currentIndex--;

    console.log(currentIndex)

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    console.log(currentIndex);

    const imgAnteprima = aside.querySelectorAll(".anteprima");

    const imgImmagine = containerImg.querySelectorAll("img");

    console.log(imgAnteprima);
    console.log(imgImmagine);

    const newAnteprima = imgAnteprima[currentIndex];

    const newImmagine = imgImmagine[currentIndex];

    console.log(newAnteprima)

    newAnteprima.classList.add("attiva");

    newImmagine.classList.add("attiva");

});

frecciaGiu.addEventListener("click", function () {

    const attivaAnteprima = aside.querySelector(".attiva");

    const attivaImmagine = containerImg.querySelector(".attiva");

    attivaAnteprima.classList.remove("attiva");
    attivaImmagine.classList.remove("attiva");

    currentIndex++;

    

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

   

    const imgAnteprima = aside.querySelectorAll(".anteprima");

    const imgImmagine = containerImg.querySelectorAll("img");


    const newAnteprima = imgAnteprima[currentIndex];

    const newImmagine = imgImmagine[currentIndex];

    

    newAnteprima.classList.add("attiva");

    newImmagine.classList.add("attiva");

});

