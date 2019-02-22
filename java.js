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


for (var i = 0; i < 40; i++) {  
  var tiny = document.createElement('div');
  tiny.classList.add('tiny');

  tiny.style.borderRadius = randomNumber(0, 50) + 'px';
  tiny.style.marginLeft = randomNumber(0, 700) + 'px';
  tiny.style.backgroundColor = '#' + randomNumber (0, 999999)
  container.appendChild(tiny);
}


var container = document.querySelector(".content");


for (var i = 0; i < 80; i++) {  
  var shape = document.createElement('div');
  shape.classList.add('shape');

  shape.style.borderRadius = randomNumber(0, 50) + 'px';
  shape.style.marginLeft = randomNumber(0, 700) + 'px';
  shape.style.backgroundColor = '#' + randomNumber (0, 999999)
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


for (var i = 0; i < 40; i++) {  
  var shapee = document.createElement('div');
  shapee.classList.add('shapee');

  shapee.style.borderRadius = randomNumber(0, 50) + 'px';
  shapee.style.marginLeft = randomNumber(0, 700) + 'px';
  shapee.style.backgroundColor = '#' + randomNumber (0, 999999)
  container.appendChild(shapee);
}

for (var i = 0; i < 40; i++) {  
  var huge = document.createElement('div');
  huge.classList.add('huge');

  huge.style.borderRadius = randomNumber(0, 50) + 'px';
  huge.style.marginLeft = randomNumber(20, 23) + 'px';
  huge.style.marginRight = randomNumber(0, 20) + 'px';
  huge.style.backgroundColor = '#' + randomNumber (0, 999999)
  container.appendChild(huge);
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








