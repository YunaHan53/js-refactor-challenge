let html = '';
let red;
let green;
let blue;
let rgbColor;

function randomRGB() {
  return Math.floor(Math.random() * 256 );
}

for ( let i = 1; i <= 10; i++ ) {
  red = randomRGB();
  green = randomRGB();
  blue = randomRGB();
  rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);
