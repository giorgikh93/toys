
// ======================================================
let anvolLogo2 = document.body.firstElementChild.
getElementsByClassName('anvol-logo2')[0];
let span = anvolLogo2.nextElementSibling;
let header1 = document.body.firstElementChild.firstElementChild;
let backgroundSection = document.body.getElementsByClassName('background-section')[0];
let backgroundUl = backgroundSection.querySelector('ul')
console.log(backgroundUl);
console.log(backgroundSection)
let mainHeader = header1.parentNode;
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.documentElement.scrollTop > 10) {
      anvolLogo2.style.width = "170px";
     span.classList.add('none');
      header1.style.backgroundColor = 'white';
      header1.style.flex = '2';
      mainHeader.style.opacity = '0.8';
        mainHeader.style.position = 'fixed';
        mainHeader.style.left = '0';
        mainHeader.style.right = '0';
        anvolLogo2.style.transition = '1s';
        backgroundUl.style.position = 'none';
    } else {
            span.classList.remove('none');
             anvolLogo2.style.width = '300px';
              span.style.visibility = 'visible';
              header1.style.backgroundColor = '#f6f6f6';
              header1.style.display = 'flex';
                mainHeader.style.position = 'static';
                mainHeader.style.left = '0';
                mainHeader.style.right = '0';
                mainHeader.style.opacity = '1';

    }
    }
// ======================================================
// ==============right top bar============================
let headerReplace = document.body.firstElementChild.children[1];
let menuChildren = headerReplace.querySelector('div');
let menuBar = menuChildren.previousElementSibling;
menuBar.onclick = function () {
  menuChildren.classList.toggle("toggle2");
  menuChildren.style.height = '100vh';
  menuChildren.classList.toggle('dropDawnUl');
}
// ==============right top bar============================

// =======================left menu mouseover==========
let red = document.getElementById('mouseoverF');
let section = document.body.children [1];
let ul = section.querySelector ('ul');
let children = ul.children;
let w = window.innerWidth;

// ================Scroll up/toView================


let footer = document.body.children[20];
console.log(footer);
let button = footer.getElementsByTagName('i')[0];
console.log(button);

button.onclick = function (){
  window.scrollTo(0,0);
}

// ===========================================

$('#blogCarousel').carousel({
  interval: 5000
});
