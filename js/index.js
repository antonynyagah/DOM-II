// Your code goes here

//variables go here


const nav = document.querySelectorAll('a');
const mouseTrack = document.querySelector(".home");
const headerChange = document.querySelector(".main-navigation");
const headerChangeAgain = document.querySelector(".main-navigation");
const textChange = document.querySelector(".home");
const titleChange = document.querySelector("h1");
const body  = document.querySelector("body");




//event listeners

// //nav event
nav.forEach( tags => {
    tags.addEventListener('click', e => {
        e.preventDefault();
    })});


//Changes text color to purple once clicked anywhere with non-primary mouse button
textChange.addEventListener('auxclick', e =>{
    e.target.style.color = "purple";
});

//Changes Header color to red once mouse exits the header
headerChangeAgain.addEventListener('mouseleave', e =>{
    e.target.style.backgroundColor = "red";
});

//Changes Header color once mouse enters it
headerChange.addEventListener('mouseenter', e =>{
    e.target.style.backgroundColor = "orange";
});


//Changes Fun Bus title to maroon
titleChange.addEventListener('mouseup', e =>{
    e.target.style.color = "maroon";
});


//Tells console if mouse is moving
mouseTrack.addEventListener('mousemove', e =>{
    console.log(`The mouse is a movin'`);
});

body.addEventListener('click', e =>{
	e.target.style.color = 'green';
	console.log("hello there!");
});