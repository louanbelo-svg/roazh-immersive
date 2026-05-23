const fades = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if(entry.isIntersecting){
      entry.target.classList.add('visible');
    }

  });

},{
  threshold:0.15
});

fades.forEach(fade => {
  observer.observe(fade);
});

const cursor = document.querySelector('.cursor-light');

document.addEventListener('mousemove', e => {

  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

});
