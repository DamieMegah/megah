
let nacbar = document.querySelector('.nacbar');

document.querySelector('.fa-navicon').onclick =()=>
{
nacbar.classList.toggle('active')
}

let loginform = document.querySelector('.login-form');

document.querySelector('#account').onclick =()=>
{
    loginform.classList.toggle('active');

}

let nav = document.querySelector('.nav');

document.querySelector('.fa-list').onclick =()=>
{
    nav.classList.toggle('active');
}

window.onscroll = () =>{
    nav.classList.remove('active');
    loginform.classList.remove('active');
}
window.ondblclick =() =>{
    nav.classList.remove('active');
    loginform.classList.remove('active');
}

let images = document.querySelectorAll('.slider .img');
let currentIndex=0;

function showNextImage(){
    images[currentIndex].classList.remove('active');
    currentIndex++;
    if(currentIndex >=images.length){
        currentIndex=0;
    }
    images[currentIndex].classList.add('active');
}
setInterval(showNextImage,3000);


let cartCounter = document.querySelector('.cart-numbers');
let items = document.querySelectorAll('.fa-cart-plus');
items.forEach((item)=>
{
item.addEventListener('click',()=>{
     let count   =parseInt(
        cartCounter.innerHTML
    )+1;
    
    if (count < 10) {
        cartCounter.innerHTML = '0'+ count;
        
    } else {
        cartCounter.innerHTML=count;
    }
});
});


    

/*


*/


