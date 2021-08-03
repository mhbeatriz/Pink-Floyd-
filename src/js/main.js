"use strict";
const albums = document.querySelector(".js-select");
const album1 = document.querySelector(".js-animals");
const album2 = document.querySelector(".js-wall");
const album3 = document.querySelector(".js-wishyou");
const album4 = document.querySelector(".js-dark");

const windowsPinkFloyd = document.querySelector(".js-window-pinkfloyd");

//ANIMALS
function animals() {
  windowsPinkFloyd.innerHTML = `
  <div class="container-message">
    <img src="./assets/images/animals.jpeg" alt="album" value="animals" class="js-image">
    <div class="message">
    <h1 class="title-album">Animals</h1>
       <p class="text">
       Fue uno de los trabajos mas controvertidos y políticamente incorrectos, y eso, es lo que lo hace majestuoso. Una mirada ácida hacia el capitalismo y las relaciones entre las personas en la que se hace un guiño a rebelión de la granja de George Orwell, usando a tres animales para representar tres clases sociales; los cerdos <a href="https://www.youtube.com/watch?v=rMBI9aApoik" target="blank" class="a">(Pigs on the Wing)</a> representan a los políticos dictadores, los perros <a href="https://www.youtube.com/watch?v=4QA30qkRYy8" target="blank" class="a">(Dogs)</a> el capitalismo devorador de ovejas, y éstas <a href="https://www.youtube.com/watch?v=3GE-sfEbJ7I" target="blank" class="a">(Sheep)</a>, los títeres que representan a las masas que se dejan llevar sin criterio propio.
       </p>
       </div>
  </div>

`;
}
album1.addEventListener("click", animals);

//WISH YOU WRE HERE
function wishYouWereHere() {
  windowsPinkFloyd.innerHTML = `
  <div class="container-message">
  <img src="./assets/images/wishyou.jpg" alt="album"  class="js-image">
  <div class="message">
  <h1 class="title-album">Wish You Were Here</h1>
     <p class="text">
     Es una obra maestra, ya no solo por su componente melódico, sino por el emocional, ya que fue un álbum de reconocimiento a una persona, hacia una amistad perdida y que se inspiró en un sentimiento de añoranza por la ausencia tanto física como emocional de unos de los fundadores de Pink Floyd: Syd Barret obligado a abandonar la banda por una crisis nerviosa debida al consumo de drogas y a quien dedican la majestuosa pieza de <a href="https://www.youtube.com/watch?v=cWGE9Gi0bB0" target="blank"class="a">Shine on You Crazy Diamond</a> y <a href="https://www.youtube.com/watch?v=IXdNnw99-Ic" target="blank" class="a"> Wish You Were Here </a> cuya letra trata no sólo de la condición de Barret, sino también de la dicotomía del carácter de Waters y su personalidad dominante. También encontramos temas como <a href="https://www.youtube.com/watch?v=tbdpv7G_PPg" target="blank" class="a">Have a Cigar</a> o <a target="blank" href="https://www.youtube.com/watch?v=lt-udg9zQSE"class="a">Welcome to the Machine</a>. 
     </p>
     </div>
     </div>

`;
}
album3.addEventListener("click", wishYouWereHere);

//THE WALL
function theWall() {
  windowsPinkFloyd.innerHTML = `
  <div class="container-message">
  <img src="./assets/images/wall.jpg" alt="album"  class="js-image">
  <div class="message">
  <h1 class="title-album">The Wall</h1>
     <p class="text">
     Lanzado en el 79 fue la segunda joya de Pink Floyd, una de las operas rock mas importantes. A través de The Wall, Pink Floyd hace una reflexión de la sociedad, especialmente con el tema de <a href="https://www.youtube.com/watch?v=YR5ApYxkU-U" target="blank" class="a">Another Brick in the Wall</a>, una canción que llegó al mundo para dar un mensaje y que podemos considerarlo como otro himno protesta, una obra maestra que nos invita a hacer un examen de conciencia, una llamada a los mayores para que escuchen a los niños, representando una educación que oprime y que limita nuestros otros tipos de inteligencias, sobretodo la creativa. Otro de los temas de este álbum es <a href="https://www.youtube.com/watch?v=lX3uCuFKlqw" target="blank" class="a">Mother</a> en el que refleja cómo su madre lo educo de una forma muy victoriona y estricta basada en dogmas. <a href="https://www.youtube.com/watch?v=QHhNt6q06_k" target="blank"class="a">Comfortably Numb</a>, es considerada como parte del canon de la historia del rock clásico y trata de como se sintió Roger Waters cuando estaba enfermo con fiebre en su infancia, y como adulto volvió a sentir esa sensación de nuevo, entrando en estado de delirio, donde se sintió de cierta manera desconectado de la realidad.
     </p>
     </div>

`;
}
album2.addEventListener("click", theWall);

//DARK SIDE OF THE MOON
function darkSide() {
  windowsPinkFloyd.innerHTML = `
  <div class="container-message">
  <img src="./assets/images/dark.jpg" alt="album"  class="js-image">
  <div class="message">
  <h1 class="title-album">Dark Side of the Moon</h1>
     <p class="text">
     Grabado en el <a target="blank" href="https://es.wikipedia.org/wiki/Abbey_Road_Studios"class="a">Abbey Road(The Beatles)</a>, en el 1972, fue el tercer álbum más vendido en la historia de la música en el que se buscaba narrar a través de sus canciones las presiones a las que debía enfrentarse un músico. Y en el que encontramos temas como <a target="blank" href="https://www.youtube.com/watch?v=JkhX5W7JoWI" class="a">Money</a>, en el que se esconde una crítica sarcástica del dinero, denunciando la opresión y corrupción que hay detrás y como puede cambiar a las personas en seres mas ambiciosos y egoístas. Otros como <a target="blank" href="https://www.youtube.com/watch?v=JwYX52BP2Sk"class="a">Time</a> cuya letra trata sobre el paso del tiempo: "la vida pasa, pero muchas personas no se dan cuenta hasta que es demasiado tarde". Es el único tema del disco en el que participan como compositores los cuatro miembros de la banda, y en el que finaliza con el tema <a target="blank" href="https://www.youtube.com/watch?v=mrojrDCI02k&t=70s" class="a">Breathe</a>, una invitación a tomarse un respiro, a detenerse y reflexionar sobre el significado de la vida, para no caer en la búsqueda de metas sin sentido.
     </p>
     </div>

`;
}
album4.addEventListener("click", darkSide);
