// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Alabama, Arkansas, I do love my Ma' and Pa'", time: 14 },
  { text: "Not the way that I do love you", time: 18 },
  { text: "Well, holy moly, me oh my, you're the apple of my eye", time: 21 },
  { text: "Girl, I've never loved one like you", time: 26 },
  { text: "Man, oh, man, you're my best friend, I scream it to the nothingness", time: 30 },
  { text: "There ain't nothing that I need", time: 34 },
  { text: "Well, hot and heavy pumpkin pie, chocolate candy, Jesus Christ", time: 37 },
  { text: "Ain't nothing please me more than you", time: 42 },
  { text: "Oh, home, let me come home", time: 45 },
  { text: "Home is wherever I'm with you", time: 50 },
  { text: "Oh, home, let me come home", time: 53 },
  { text: "Home is wherever I'm with you", time: 58 },
  { text: "La-la-la-la, take me home", time: 79 },
  { text: "Mother, I'm coming home", time: 85 },
  { text: "I'll follow you into the park, through the jungle, through the dark", time: 104 },
  { text: "Girl, I never loved one like you", time: 109 },
  { text: "Moats and boats and waterfalls, alleyways and pay phone calls", time: 112 },
  { text: "I been everywhere with you", time: 116 },
  { text: "We laugh until we think we'll die, barefoot on a summer night", time: 120 },
  { text: "Nothing new is sweeter than with you", time: 124 },
  { text: "And in the streets, we run afree, like it's only you and me", time: 130 },
  { text: "Geez, you're something to see", time: 134 },
  { text: "Home, let me come home", time: 140 },
  { text: "Home is whenever I'm with you", time: 143 },
  { text: "Home, let me come home", time: 146 },
  { text: "Home is whenever I'm with you", time: 149 },
  { text: "Home, let me come home", time: 173 },
  { text: "Home is whenever I'm with you", time: 176 },
  { text: "Home, let me come home", time: 180 },
  { text: "Home is whenever I'm with you", time: 183 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);