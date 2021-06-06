const btn = document.getElementById('btn');
console.log(btn);

function showBtn() {
  window.addEventListener('scroll', function () {
    let toScroll = window.pageYOffset;
    console.log(toScroll);
    if (toScroll >= 1200) {
      btn.style.display = 'inline';
    } else {
      btn.style.display = 'none';
    }
  });
}
showBtn();