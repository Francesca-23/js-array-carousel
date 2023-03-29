/*
1-inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
2-Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
3-Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
*/

let array = [
    './assets/img/01.webp',
    './assets/img/02.webp',
    './assets/img/03.webp',
    './assets/img/04.webp',
    './assets/img/05.webp',
]

let immagini = document.querySelector('.images');

for(let i=0; i <= 5; i++){

    immagini.innerHTML += 
    `
    <div class="item">
        <img src="${array[i]}"; alt="">
    </div> 
    `
}

let posizione = 0;

immagini.querySelector('.item').classList.add('active')

let frecciaSu = document.querySelector('.arrow-top');
let frecciaGiu = document.querySelector('.arrow-down');


frecciaSu.addEventListener("click", function(){
    
    document.querySelector('.item.active').classList.remove('active');

    if(posizione == array.length -1){
        posizione = 0
    }else{
        posizione++
    }

    document.getElementsByClassName('item')[posizione].classList.add('active');

})

frecciaGiu.addEventListener("click", function(){
    
    document.querySelector('.item.active').classList.remove('active');

    if(posizione == 0){
        posizione = array.length -1
        
    }else{
        posizione--
    }

    document.getElementsByClassName('item')[posizione].classList.add('active');

})
