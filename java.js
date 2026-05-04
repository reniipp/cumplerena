document.fonts.ready.then(() => {
  document.body.classList.add("fonts-loaded");
});

const video = document.getElementById("introVideo");
const fondo = document.getElementById("fondo");
const overlay = document.getElementById("overlay");
const overlay2 = document.getElementById("overlay2");
const overlay3 = document.getElementById("overlay3");
const overlay4 = document.getElementById("overlay4");

video.addEventListener("ended", () => {
  video.style.transition = "opacity 0.5s ease";
  video.style.opacity = 0;
  fondo.style.opacity = 1;
  setTimeout(() => {
    video.style.display = "none";
    overlay.classList.add("visible");
  }, 600);
});

setTimeout(() => {
  if (!overlay.classList.contains("visible")) {
    video.style.transition = "opacity 0.5s ease";
    video.style.opacity = 0;
    fondo.style.opacity = 1;
    setTimeout(() => {
      video.style.display = "none";
      overlay.classList.add("visible");
    }, 600);
  }
}, 12000);

// Act I → Act II
document.getElementById("btnEnviar1").addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  if (!nombre) { document.getElementById("nombre").focus(); return; }
  overlay.style.display = "none";
  overlay2.style.display = "flex";
  setTimeout(() => overlay2.classList.add("visible"), 50);
});

// Act II → Act III
document.querySelector(".btnConfirmar").addEventListener("click", () => {
  overlay2.style.display = "none";
  overlay3.style.display = "flex";
  setTimeout(() => overlay3.classList.add("visible"), 50);
});

// Act III → Act IV
document.getElementById("btnEnviar3").addEventListener("click", () => {
  overlay3.style.display = "none";
  overlay4.style.display = "flex";
  setTimeout(() => overlay4.classList.add("visible"), 50);
});

function seleccionar(opcion) {
  document.getElementById("corazonSi").classList.toggle("oculto", opcion !== 'si');
  document.getElementById("corazonNo").classList.toggle("oculto", opcion !== 'no');
}

function seleccionar4(opcion) {
  document.getElementById("corazonSi4").classList.toggle("oculto", opcion !== 'si');
  document.getElementById("corazonNo4").classList.toggle("oculto", opcion !== 'no');
}


const videoFinal = document.getElementById("videoFinal");
const finalVideo = document.getElementById("finalVideo");
const finalFoto = document.getElementById("finalFoto");

document.getElementById("btnEnviar4").addEventListener("click", () => {
  overlay4.style.display = "none";
  videoFinal.style.display = "block";
  finalVideo.play();

  finalVideo.addEventListener("ended", () => {
    finalVideo.style.transition = "opacity 0.5s ease";
    finalVideo.style.opacity = 0;
    finalFoto.style.display = "block";
    setTimeout(() => {
      finalFoto.style.opacity = 1;
    }, 50);
  });
});