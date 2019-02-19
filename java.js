function randomNumber (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomFloat (min, max) {
  var float = Math.random();
  var value;

  if (float < 0.5) {
    value = (1 - Math.random()) * (max-min) + min;
  } else {
    value = Math.random() * (max-min) + min;
  }

  return parseFloat(value.toFixed(2));
}


function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

var container = document.querySelector(".content");


for (var i = 0; i < 200; i++) {  
  var shape = document.createElement('div');
  shape.classList.add('shape');

  // add a random animation duration and delay to each shape
  shape.style.borderRadius = randomNumber(0, 200) + 'px';

  container.appendChild(shape);
}

var shapes = document.querySelectorAll('.shape');

shapes.forEach(function(shape) {
 
  shape.addEventListener('mouseover', function() {
    if (shape.classList.contains('shape-interaction')) {
      shape.classList.remove('shape-interaction');
    } else {
      shape.classList.add('shape-interaction');
    }
  });
});


var hue = randomNumber(0, 360);
var color = hslColor(hue, 360, 20);
var element = document.querySelector('.shape');
element.style.background = color;

