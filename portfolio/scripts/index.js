const navabar = document.querySelector('.navbar');
const mobileNavbar = document.querySelector('.navbar__mobile');
const button = document.querySelector('.burguer');

button.addEventListener('click', function(){
       mobileNavbar.classList.toggle('active'); //toggle: add ou tirar alguma classe, nesse caso a classe active
});

window.addEventListener('scroll' ,function() {
    //pageYOffset: diz a distâcia que o usuário está da parte de cima da tela
    if(this.window.pageYOffset > 0) return navabar.classList.add('active');
    return navabar.classList.remove('active');
})