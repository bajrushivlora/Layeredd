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


/////////////////////////////////////////////////////////////////


var container = document.querySelector(".content");


for (var i = 0; i < 30; i++) {  
  var shape = document.createElement('div');
  shape.classList.add('shape');

  shape.style.borderRadius = randomNumber(0, 50) + 'px';
  shape.style.marginLeft = randomNumber(40, 700) + 'px';
  shape.style.marginBottom = randomNumber (20, 40) + 'px';
  container.appendChild(shape);
}

for (var i = 0; i < 30; i++) {  
  var shape = document.createElement('div');
  shape.classList.add('shape');

  shape.style.borderRadius = randomNumber(0, 50) + 'px';
  shape.style.marginLeft = randomNumber(40, 700) + 'px';
  shape.style.marginBottom = randomNumber (20, 40) + 'px';
  container.appendChild(shape);
}


var hue = randomNumber(0, 360);
var color = hslColor(hue, 360, 50);
var element = document.querySelectorAll('.shape');
element.style.background = color;



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



