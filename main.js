let word = document.querySelectorAll(".word");
word.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = word.length - 1;
word[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = word[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? word[0] : word[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
         },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
    });

    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)


// circle ----------------------------------------------------------------------------------------------------------  -->
const circle = document.querySelectorAll('.circle');
circle.forEach(elem=>{

    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points ="";
    var rotate = 360 / dots;

    for(let i=0;i<dots;i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;

    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0;i<percent;i++ ) {
        pointsMarked[i].classList.add('marked')
    }
})


// mix it up portfolio -----------------------------------------
var mixer = mixitup('.portfolio-gallery');




// active menu ------------------------------------------------------  -->

let menuli = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu() {
    let len = section.length;
    while(--len && window.scrollY + 97 <section[len].offsetTop){}
    menuli.forEach(sec => sec.classList.remove("active"));
    menuli[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


// sticky navbar ------------------------------------------------------------------------------ -->

const header = document.querySelector("header");
window,addEventListener("scroll",function() {
    header.classList.toggle("sticky", this.window.scrollY > 50)
})


// toggle icon navbar ------------------------------------------------------------------------- -->

let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}

window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


// parallax -----------------------------------------------------------------------------  -->

const observe = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }
        else {
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observe.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observe.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observe.observe(el));
















// mouse ke sath rhega but me ise use nhi kr rha hu kyuki mere laptop me sahi se chal nhi rha hai isliye age rkhna ho to rkh skte hai  



// // mouse ke sath jo rhe uska use kiya gya hai full source code hai 



// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });



// // jb mouse move chalaye to wo skew na ho 

// var timeout;
// function circleChaptaKaro() {
//     // define default scale value
//     var xscale=1;
//     var yscale=1;

//     var xprevi = 0;
//     var yprevi = 0;
//     window.addEventListener("mousemove", function(dets){
//         clearTimeout(timeout);

//         xscale = gsap.utils.clamp(.8,1.2, dets.clientX-xprevi);
//         yscale = gsap.utils.clamp(.8,1.2, dets.clientY-yprevi);

//         xprevi = dets.clientX;
//         yprevi = dets.clientY;

//         circleMouseFollower(xscale,yscale);
//         timeout= setTimeout(function(){
//         this.document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;

//         })
//     });
// }

// // circle ke sath rhe uske liye 
// function circleMouseFollower(xscale,yscale) {
//     window.addEventListener("mousemove", function(dets){
//         this.document.querySelector("#mini-circle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
//         console.log(dets.clientX,dets.clientY);
//     })
// }
// circleMouseFollower();
// circleChaptaKaro();
