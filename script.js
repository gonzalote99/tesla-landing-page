var header = document.getElementById('header');
var ms = document.getElementById('models');
var m3 = document.getElementById('model3');
var mx = document.getElementById('modelx');
var my = document.getElementById('modely');
var model = document.getElementById('model');
var benefit1 = document.getElementById('benefit1');
var benefit2 = document.getElementById('benefit2');
var benefit3 = document.getElementById('benefit3');
var feature1 = document.getElementById('feature1');
var feature2 = document.getElementById('feature2');
var feature3 = document.getElementById('feature3');


ms.onclick = function() {
  header.style.backgroundImage = "url(https://raw.githubusercontent.com/geeky-prashant/tesla-landing-page/main/images/image-1.jpg)";
  model.innerHTML = "Model S";
  benefit1.innerHTML = "1.9 s";
  feature1.innerHTML = "60 mph";
  benefit2.innerHTML = "200 mph";
  feature2.innerHTML = "Top Speed";
  benefit3.innerHTML = "396 mi";
  feature3.innerHTML = "Max Range";

};

m3.onclick = function() {
  header.style.backgroundImage = "url(https://raw.githubusercontent.com/geeky-prashant/tesla-landing-page/main/images/image-2.jpg)";
  model.innerHTML = "Model 3";
  benefit1.innerHTML = "1.8 s";
  feature1.innerHTML = "55 mph";
  benefit2.innerHTML = "180 mph";
  feature2.innerHTML = "Top Speed";
  benefit3.innerHTML = "355 mi";
  feature3.innerHTML = "Max Range";

};

mx.onclick = function() {
  header.style.backgroundImage = "url(https://raw.githubusercontent.com/geeky-prashant/tesla-landing-page/main/images/image-3.jpg)";
  model.innerHTML = "Model X";
  benefit1.innerHTML = "1.7 s";
  feature1.innerHTML = "60 mph";
  benefit2.innerHTML = "165 mph";
  feature2.innerHTML = "Top Speed";
  benefit3.innerHTML = "350 mi";
  feature3.innerHTML = "Max Range";

};

my.onclick = function() {
  header.style.backgroundImage = "url(https://raw.githubusercontent.com/geeky-prashant/tesla-landing-page/main/images/image-4.jpg)";
  model.innerHTML = "Model Y";
  benefit1.innerHTML = "1.9 s";
  feature1.innerHTML = "55 mph";
  benefit2.innerHTML = "160 mph";
  feature2.innerHTML = "Top Speed";
  benefit3.innerHTML = "325 mi";
  feature3.innerHTML = "Max Range";

};


