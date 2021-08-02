"use strict";
const playButton = document.querySelector(".js-play-button");
const artist = document.querySelector(".js-select");
const message = document.querySelector(".js-message");

function FunctionHandler() {
  message.classList.remove("red");
  if (artist.value === "animals") {
    animals();
  }
  if (artist.value === "dark") {
    darkSide();
  }
  if (artist.value === "wish") {
    wishYouWereHere();
  }
  if (artist.value === "division") {
    theDivisionBell();
  }
  if (artist.value === "wall") {
    theWall();
  }
  if (artist.value === "atom") {
    atomHeartMother();
  }
  if (artist.value === "piper") {
    thePiper();
  }

  if (artist.value === "choose") {
    message.innerHTML = "Debes escoger una artista";
  }
}

playButton.addEventListener("click", FunctionHandler);

const windowsPinkFloyd = document.querySelector(".js-window-pinkfloyd");

function wishYouWereHere() {
  windowsPinkFloyd.innerHTML = `
  <div class="container-hendrix">
  <img src="./assets/images/wishyou.jpg" alt="wishyou" class="wishyou"/>
  <div class="message">
     <p class="message__artist-history">
       <span class="hendrix-name">Jimi Hendrix</span> Nació en Seattle, Washington aunque encontró el éxito en Londres, que le recibió con los brazos abiertos y dónde empezó la gira con su banda <span class="band">The Jimi Hendrix Experience.</span> Hubo un momento clave en toda su carrera que lo elevó a los altares del rock y ese fue en el <span class="woodstock">Woodstock (1970)</span> y en el Festival de Monterrey en 1967 cuando prendió fuego a su blanca stratocaster 🎸 Fue un total autodidacta y quizá eso fue determinante para que fuese innovador en la música. Al igual que <span class="artists-club">Janis Joplin, Kurt Cobain y Jim Morrison</span> entre otros, él también forma parte del <span class="club">club de los 27.</span>
     </p>
     </div>
</div>
`;
  eventReturn();
}

function eventReturn() {
  const isTrue = document.querySelector(".message");
}
function theWall() {
  windowsHendrix.innerHTML = `
  <div class="container-hendrix">
  <img src="./assets/images/wall.jpg" alt="wishyou" class="wishyou"/>
  <div class="message">
     <p class="message__artist-history">
       another brick in the wall pertenece al album the wall
     </p>
     </div>
</div>
`;
  eventReturn();
}
