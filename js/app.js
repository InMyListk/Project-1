// Start

// getting navigation bar From DOM

const navigation = document.querySelector('#header');

// making navigation bar change it's background

document.addEventListener('scroll',()=>{
    if(window.scrollY >= 30 ) {
        navigation.setAttribute('style','background-color:white; box-shadow: 0 7px 9px 0 rgba(0, 0, 0, 0.2)')
    }else {
        navigation.setAttribute('style','background-color:White;')
    }
})

// Getting Top page button from DOM

const topPageBtn = document.querySelector('#Top-page');

// Making Top button appear While scrolling

document.addEventListener('scroll',()=>{
    if(window.scrollY >= 700 ) {
        topPageBtn.setAttribute('style','display:block;')
    }else {
        topPageBtn.setAttribute('style','display:none;')
    }
})

// Making When click on Top page button scroll to top page

topPageBtn.addEventListener('click',()=>{
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
})

// this function instead of behavior: "smooth", because it only work for me in Fire Fox !!!!

// getting Top page button ( topPageBtn ) scrollY 

let topPageBtnY = window.scrollY + topPageBtn.getBoundingClientRect().top;

function topPage(){
    setTimeout(()=>{
        window.scrollTo({
            top: topPageBtnY,
        });
        topPageBtnY = topPageBtnY - 10;
        if (topPageBtnY >= 20) {
            
            topPage();
        }else {
            topPageBtnY = window.scrollY + topPageBtn.getBoundingClientRect().top;
        }
    },1)
}

topPageBtn.addEventListener('click',topPage);

// getting navigation elements 

let sectionContainer = document.querySelector('#section-container');

// const btnOne = document.createElement('li');
// const btnTwo =document.createElement('li');
// const btnThree = document.createElement('li');
// const btnFour = document.createElement('li');

// let liContent = [btnOne, btnTwo, btnThree, btnFour];
let sections2 = Array.from(document.querySelectorAll('.section-padding'))
let count1 = 0;

console.log(sections2)
for (const i of sections2) {
    let li = document.createElement('li');
    count1++
    li.textContent = 'section';
    li.classList.add('links');
    let span = document.createElement('span');
    span.textContent = ' 0'+ count1
    li.appendChild(span);
    sectionContainer.appendChild(li);
    li.addEventListener('click', ()=>{
        smoothScroll(1000);
        
    })
    function smoothScroll(duration){
        // var element = document.querySelector(element);
        let elementPosition = i.getBoundingClientRect().top;
        let startPosition = window.pageYOffset;
        let startTime = 0;
    
        function scrollAnimation (currentTime) {
            if(startTime === 0) startTime = currentTime;
            let timeElapced = currentTime - startTime;
            let easeFunction = ease(timeElapced, startPosition, elementPosition, duration)
            window.scrollTo(0, easeFunction);
            if(timeElapced < duration) requestAnimationFrame(scrollAnimation);
        }
    
        function ease (t, b, c, d){
            t /= d;
            t--;
            return c * Math.sqrt(1 - t*t) + b;
        }
        requestAnimationFrame(scrollAnimation);
    }
}

// for (const i of liContent) {
//     count1++
//     i.textContent = 'section';
//     i.classList.add('links');
//     let span = document.createElement('span');
//     span.textContent = ' 0'+ count1
//     i.appendChild(span);
//     sectionContainer.appendChild(i);
// }

// Making navigation elements go to the selected position

// Used requestAnimationFrame and scrollTo methods !

// function smoothScroll(element,duration){
//     var element = document.querySelector(element);
//     let elementPosition = element.getBoundingClientRect().top;
//     let startPosition = window.pageYOffset;
//     let startTime = 0;

//     function scrollAnimation (currentTime) {
//         if(startTime === 0) startTime = currentTime;
//         let timeElapced = currentTime - startTime;
//         let easeFunction = ease(timeElapced, startPosition, elementPosition, duration)
//         window.scrollTo(0, easeFunction);
//         if(timeElapced < duration) requestAnimationFrame(scrollAnimation);
//     }

//     function ease (t, b, c, d){
//         t /= d;
// 	    t--;
// 	    return c * Math.sqrt(1 - t*t) + b;
//     }
//     requestAnimationFrame(scrollAnimation);
// }


// btnOne.addEventListener('click', ()=>{
//     smoothScroll('#section-one', 1000);
// })
// btnTwo.addEventListener('click', ()=>{
//     smoothScroll('#section-two', 1000);
// })
// btnThree.addEventListener('click', ()=>{
//     smoothScroll('#section-three', 1000);
// })
// btnFour.addEventListener('click', ()=>{
//     smoothScroll('#section-four', 1000);
// })

// Set class active to sections when scroll to it

// making when window.scrollY equal sectionY add a (active) class

let sections = document.querySelectorAll('.section-padding')

document.addEventListener('scroll',()=>{
    for (const i of sections) {
        let d = i.getBoundingClientRect().top+window.scrollY;
        if ((window.scrollY) >= (d) && (window.scrollY) <= (d+(i.offsetHeight))) {
            i.classList.add('active');
        } else {
            i.classList.remove('active');
        }
    }
})

// End
