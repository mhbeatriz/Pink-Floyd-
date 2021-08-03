"use strict";
// const playButton = document.querySelector(".js-play-button");
const albums = document.querySelector(".js-select");
// const message = document.querySelector(".js-message");
const album1 = document.querySelector(".js-animals");
const album2 = document.querySelector(".js-wall");
const album3 = document.querySelector(".js-wishyou");
const album4 = document.querySelector(".js-dark");

// function FunctionHandler() {
//   message.classList.remove("red");
//   if (albums.value === "animals") {
//     animals();
//   }
//   if (albums.value === "dark") {
//     darkSide();
//   }
//   if (albums.value === "wish") {
//     wishYouWereHere();
//   }
//   if (albums.value === "wall") {
//     theWall();
//   }
// }

// albums.addEventListener("click", FunctionHandler);
const windowsPinkFloyd = document.querySelector(".js-window-pinkfloyd");

//ANIMALS
function animals() {
  windowsPinkFloyd.innerHTML = `
  
  <div class="message">
     <p>
     Fue uno de los trabajos mas controvertidos y políticamente incorrectos, y eso, es lo que lo hace majestuoso. Una mirada ácida hacia el capitalismo y las relaciones entre las personas en la que se hace un guiño a rebelión de la granja de George Orwell, usando a tres animales para representar tres clases sociales; los cerdos <span class="span">(Pigs on the Wing)</span> representan a los políticos dictadores, los perros <span class="span">(Dogs)</span> el capitalismo devorador de ovejas, y éstas <span class="span">(Sheep)</span>, los títeres que representan a las masas que se dejan llevar sin criterio propio. 
     </p>
     </div>

`;
}
album1.addEventListener("click", animals);

//WISH YOU WRE HERE
function wishYouWereHere() {
  windowsPinkFloyd.innerHTML = `
  
  <div class="message">
     <p>
     Es una obra maestra, ya no solo por su componente melódico, sino por el emocional, ya que fue un álbum de reconocimiento a una persona, hacia una amistad perdida y que se inspiró en un sentimiento de añoranza por la ausencia tanto física como emocional de unos de los fundadores de Pink Floyd: Syd Barret obligado a abandonar la banda por una crisis nerviosa debida al consumo de drogas y a quien dedican la majestuosa pieza de <span class="span">Shine on You Crazy Diamond</span> y <span class="span"> Wish You Were Here </span> cuya letra trata no sólo de la condición de Barrett, sino también con la dicotomía del carácter de Waters y su personalidad dominante. También encontramos temas como <span class="span">Have a Cigar</span> o <span class="span">Welcome to the Machine</span>. 
     </p>
     </div>

`;
}
album2.addEventListener("click", wishYouWereHere);
//THE WALL
function theWall() {
  windowsPinkFloyd.innerHTML = `
  <div class="message">
     <p>
     Lanzado en el 79 fue la segunda joya de Pink Floyd, una de las operas rock mas importantes. A través de The Wall, Pink Floyd hace una reflexión de la sociedad, especialmente con el tema de <span class="span">Another Brick in the Wall</span>, una canción que llegó al mundo para dar un mensaje y que podemos considerarlo como otro himno protesta, una obra maestra que nos invita a hacer un examen de conciencia, una llamada a los mayores para que escuchen a los niños, representando una educación que oprime y que limita nuestros otros tipos de inteligencias, sobretodo la creativa. Otro de los temas de este álbum es <span class="span">Mother</span> en el que refleja cómo su madre lo educo de una forma muy victoriosa y estricta basada en dogmas. <span class="span">Comfortably Numb</span>,es considerada como parte del canon de la historia del rock clásico y trata de como se sintió Roger Waters cuando estaba enfermo con fiebre en su infancia y como adulto, volvió a sentir esa sensación de nuevo, entrando en estado de delirio, donde se sintió de cierta manera desconectado de la realidad.
     </p>
     </div>

`;
}
album3.addEventListener("click", theWall);

//DARK SIDE OF THE MOON
function darkSide() {
  windowsPinkFloyd.innerHTML = `
  
  <div class="message">
     <p>
     Grabado en el <span class="span">Abbey Road(The Beatles)</span>, en el 1972, fue el tercer álbum más vendido en la historia de la música en el que se buscaba narrar a través de sus canciones las presiones a las que debía enfrentarse un músico. Y en el que encontramos temas como <span class="span">Money</span>, en el que se esconde una crítica sarcástica del dinero, denunciando la opresión y corrupción que hay detrás y como puede cambiar a las personas en seres mas ambiciosos y egoístas. Otros como <span class="span">Time</span> cuya letra trata sobre el paso del tiempo: "la vida pasa, pero muchas personas no se dan cuenta hasta que es demasiado tarde". Es el único tema del disco en el que participan como compositores los cuatro miembros de la banda, y en el que finaliza con el tema <span class="span">Breathe</span>, una invitación a tomarse un respiro, a detenerse y reflexionar sobre el significado de la vida, para no caer en la búsqueda de metas sin sentido.
     </p>
     </div>

`;
}
album4.addEventListener("click", darkSide);

//# sourceMappingURL=main.js.map
