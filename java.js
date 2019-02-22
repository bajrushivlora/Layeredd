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


for (var i = 0; i < 400; i++) {  
  var shape = document.createElement('div');
  shape.classList.add('shape');

  shape.style.borderRadius = randomNumber(30, 100) + 'px';
  shape.style.marginLeft = randomNumber(20, 1000) + 'px';
  shape.style.marginRight = randomNumber(20, 1000) + 'px';
  shape.style.marginBottom = randomNumber (0, 10) + 'px';
  container.appendChild(shape);
}


function hslColor(h, s, l) {
  var hue = h;
  var saturation = s + "%";
  var luminance = l + "%";

  var color = "hsl(" + hue + "," + saturation + "," + luminance + ")";

  return color;
}

var element = document.querySelectorAll('.shape');

var hue = randomNumber(0, 360);
var color = hslColor(hue, 360, 50);

element.style.backgroundColor = color;






for (var i = 0; i < 200; i++) {  
  var othershape = document.createElement('div');
  othershape.classList.add('othershape');

  othershape.style.borderRadius = randomNumber(100, 200) + 'px';
  othershape.style.marginLeft = randomNumber(20, 1000) + 'px';
  othershape.style.marginRight = randomNumber(20, 1000) + 'px';
  othershape.style.marginTop = randomNumber (300, 301) + 'px';
  container.appendChild(othershape);
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



