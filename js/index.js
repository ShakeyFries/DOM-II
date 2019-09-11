// Your code goes here

const navTags = document.querySelectorAll('.nav-link');
//mouse over
navTags.forEach((anchor) => {
      anchor.addEventListener('mouseover', (event) => {
        anchor.style.color = 'red';
        anchor.style.transition = 'transform 0.5s';
      });//mouseout
      anchor.addEventListener('mouseout', (event) => {  
        anchor.style.color = 'black';
        anchor.style.transition = 'transform 0.5s';
      });//click
      anchor.addEventListener('click', (event) => { 
        anchor.textContent = 'DONT!';
        console.log(changeNav);
      });
      //Prevent Default
      anchor.addEventListener('click',(event) => {
        event.preventDefault();
      })
});

const image = document.querySelectorAll('img');
// Wheel
image.forEach((pic) => {
  image[0].addEventListener('click', (event) => {
    image[0].src = "img/zap-plane.jpg";
    event.stopPropagation();
  });
  image[0].addEventListener('drop', (event) => {
    image[0].src = "img/fun-bus.jpg";
  });
  image[1].addEventListener('drag', (event) => {
    image[1].src = "img/fire-bus.jpg";
  });
  image[2].addEventListener('dblclick', (event) => {
    image[2].src = "img/boat-sink.jpg";
  });
});

const title = document.querySelectorAll('h2');

title.forEach((words) =>{
  title[0].addEventListener('mouseover', (event) =>{
    title[0].textContent = "It could happen to you!";
  });
  title[1].addEventListener('mouseover', (event) =>{
    title[1].textContent = "Its A Trap!";
  });
  title[2].addEventListener('mouseover', (event) =>{
    title[2].textContent = "We all float down here...";
  });
});

const backGround = document.querySelector('body');

backGround.addEventListener('scroll', (event) => {
  backGround.style.color = "black";
});

const contain = document.querySelector('.intro');

contain.addEventListener('click', (event) => {
  contain.textContent = "Easter egg here";
});


