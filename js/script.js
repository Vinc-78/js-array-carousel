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

let currentIndex = 0;

//ciclo for per assegnare le immagini all'aside

for(let i=0; i<items.length; i++){
     const anteprimaCorrente = items[i];

     

    //una variabile a cui assegnare il primo indice e la classe per mostrare l'anteprima

     let attivaAnteprima = " ";

     if (i===currentIndex){ attivaAnteprima ="attiva"}

//crep gli elementi Anteprima e l'inserirsco in HTML

const tagAnteprima =` <div class="anteprima ${attivaAnteprima}"><img src="${anteprimaCorrente}" alt="img ${i}"></div>`;

aside.innerHTML +=tagAnteprima;

}




//lavoro sulle freccie 


const frecciaSu =document.querySelector(".fa-angle-up");
const frecciaGiu =document.querySelector(".fa-angle-down");


frecciaSu.addEventListener("click", function(){

    const attivaAnteprima=aside.querySelector(".attiva");

    attivaAnteprima.classList.remove("attiva");

    currentIndex--;

    console.log(currentIndex)

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
      }

      console.log(currentIndex);

      const imgAnteprima = aside.querySelectorAll(".anteprima");

      console.log(imgAnteprima);

      const newAnteprima = imgAnteprima[currentIndex];

      console.log(newAnteprima)

      newAnteprima.classList.add("attiva");

});

frecciaGiu.addEventListener("click", function(){

    const attivaAnteprima=aside.querySelector(".attiva");

    attivaAnteprima.classList.remove("attiva");

    currentIndex++;

    console.log(currentIndex);

    if (currentIndex > items.length -1) {
        currentIndex = 0;
      }

      console.log(currentIndex);

      const imgAnteprima = aside.querySelectorAll(".anteprima");

      const newAnteprima = imgAnteprima[currentIndex];

      newAnteprima.classList.add("attiva");

});


