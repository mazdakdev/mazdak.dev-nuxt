var burgerBtn = document.getElementById('burgerBtn');
var mobile = document.getElementById('mobile');
var demo1 = document.getElementById('demo1');
var demo2 = document.getElementById('demo2');
var demo3 = document.getElementById('demo3');

burgerBtn.addEventListener('click', function () {
    mobile.classList.toggle('navigation');
}, false);

demo1.addEventListener('click', function () {
    demo1.classList.add('active');
    demo2.classList.remove('active');
    demo3.classList.remove('active');
    mobile.classList.add('demo1');
    mobile.classList.remove('demo2', 'demo3', 'navigation');
}, false);

demo2.addEventListener('click', function () {
    demo2.classList.add('active');
    demo1.classList.remove('active');
    demo3.classList.remove('active');
    mobile.classList.add('demo2');
    mobile.classList.remove('demo1', 'demo3', 'navigation');
}, false);

demo3.addEventListener('click', function () {
    demo3.classList.add('active');
    demo1.classList.remove('active');
    demo2.classList.remove('active');
    mobile.classList.add('demo3');
    mobile.classList.remove('demo1', 'demo2', 'navigation');
}, false);