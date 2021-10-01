const text_box = document.querySelector('#text_box');

document.querySelector('#bigger_button').addEventListener('click', () => {
  text_box.style.fontSize = '24pt';
});

document.querySelector('#moo_button').addEventListener('click', () => {
  text_box.value = text_box.value.toUpperCase().split(".").join("Moo.");
});

for (element of document.querySelectorAll('#fancy_radio, #boring_radio')) {
  element.addEventListener('change', (e) => {
    if (e.currentTarget == document.querySelector('#fancy_radio')) {
      text_box.style.fontWeight = 'bold';
      text_box.style.color = 'blue'
      text_box.style.textDecoration = 'underline'
    } else if (e.currentTarget == document.querySelector('#boring_radio')) {
      text_box.style.fontWeight = 'normal';
      text_box.style.color = 'black'
      text_box.style.textDecoration = 'none'
    }
  });
}
