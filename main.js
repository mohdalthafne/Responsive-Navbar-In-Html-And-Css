const menuBar = document.getElementById('navbar'),
      menuBtn = document.getElementById('toggle'),
      menuLink = document.querySelectorAll('.menu_link');

menuBtn.addEventListener('click', () =>{
    menuBar.classList.toggle('show');
    menuBtn.classList.toggle('active');
});

function linkAction(){
    menuLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
}

menuLink.forEach(n => n.addEventListener('click', linkAction));