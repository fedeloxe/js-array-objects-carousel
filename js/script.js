//object
const imagesArray = [
    {
        img:"01.webp",
        title: "Spiderman Miles Morales",
        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo reiciendis ipsa quibusdam. Harum ipsa voluptatem voluptas alias ea eaque tempore",
    },

    {
        img:  "02.webp",
        title: "Ratchet and clank rift apart",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo reiciendis ipsa quibusdam. Harum ipsa voluptatem voluptas alias ea eaque tempore",
    },

    {
        img:"03.webp",
        title:"Fortnite",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo reiciendis ipsa quibusdam. Harum ipsa voluptatem voluptas alias ea eaque tempore",
    },

    {
        img:"04.webp",
        title:"Stray",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo reiciendis ipsa quibusdam. Harum ipsa voluptatem voluptas alias ea eaque tempore",
    },

    {
        img:"05.webp",
        title:"Marvel's Avengers",
        description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quo reiciendis ipsa quibusdam. Harum ipsa voluptatem voluptas alias ea eaque tempore",
    }
]


//Creiamo dinamicamente i div con le immagini del carosello
let itemsContent = '';

for(let i = 0; i < imagesArray.length; i++){
    itemsContent += `<div class="item">
        <img src="./img/${imagesArray[i].img}">
        <div class=description>
            <h3>${imagesArray[i].title}</h3>
            <p>${imagesArray[i].description}</p>
        </div>
        
    </div>`
}

//inseriamo le immagini nel div che le deve contenere
const itemsSlider = document.querySelector('.item-slider');
itemsSlider.innerHTML += itemsContent;

//Prendiamo la prima immagine dell'array e la rendiamo attiva

//const items = document.querySelector('.item'); //ALTERNATIVA

const items = document.getElementsByClassName('item');
let itemActive = 0;

items[itemActive].classList.add('active');

//rendo attivo anche il primo cerchio di navigazione

const circles = document.getElementsByClassName('circle');

circles[itemActive].classList.add('active');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

next.addEventListener('click', function(){

    items[itemActive].classList.remove(`active`);
    circles[itemActive].classList.remove(`active`);

   
    if(itemActive+1 ==imagesArray.length){

        itemActive = 0;

    }

    else{
        itemActive++;
    }

    items[itemActive].classList.add(`active`);
    circles[itemActive].classList.add(`active`);


});

prev.addEventListener('click', function(){
    items[itemActive].classList.remove(`active`);
    circles[itemActive].classList.remove(`active`);

    if(itemActive-1==-1){
        itemActive=imagesArray.length-1
    }

    else{
        itemActive--;
    }
    
    items[itemActive].classList.add(`active`);
    circles[itemActive].classList.add(`active`);
})

//verifico l'elemento attivo (itemActive)

//incremento il suo valore di 1



//aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente
//stessa cosa per i cerchi

//verifico l'elemento attivo (itemActive)
//decremento il suo valore di 1
//aggiungere la class active al nuovo elemento dell'array items e la vado a rimuovere da quello precedente//stessa cosa per i cerchi


//------------------------------------------sercizio base-------------------------------------
// setInterval(function(){
//     items[itemActive].classList.remove(`active`);
//     circles[itemActive].classList.remove(`active`);


   
//     if(itemActive+1 ==imagesArray.length){

//         itemActive = 0;

//     }

//     else{
//         itemActive++;
//     }

//     items[itemActive].classList.add(`active`);
//     circles[itemActive].classList.add(`active`);


// },3000)

//---------------------------------------esercizio bonus-----------------------------------------------

let autoPlay

document.getElementById('start').addEventListener('click', function(){



    autoPlay= setInterval(function(){
        items[itemActive].classList.remove(`active`);
        circles[itemActive].classList.remove(`active`);
    
    
       
        if(itemActive+1 ==imagesArray.length){
    
            itemActive = 0;
    
        }
    
        else{
            itemActive++;
        }
    
        items[itemActive].classList.add(`active`);
        circles[itemActive].classList.add(`active`);
    
    
    },3000)

})

document.getElementById('stop').addEventListener('click', function(){
    clearInterval(autoPlay)
})

