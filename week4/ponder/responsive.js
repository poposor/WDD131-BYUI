menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('change');
    nav = document.querySelector('nav');
    nav.classList.toggle('hide');
    // nav.children[0].style.display = nav.children[0].style.display === 'block' ? 'none' : 'block';
    // nav.children[1].style.display = nav.children[1].style.display === 'block' ? 'none' : 'block';
    // nav.children[2].style.display = nav.children[2].style.display === 'block' ? 'none' : 'block';
    // nav.children[3].style.display = nav.children[3].style.display === 'block' ? 'none' : 'block';

}); 