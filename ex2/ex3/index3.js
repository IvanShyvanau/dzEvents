const links = document.querySelectorAll('[data-tabs-handler]');
console.log(links);

for (const tab of links) {
  tab.addEventListener('click', () => {
    links.forEach(item => {
      if (tab === item) {
        item.classList.add('activ-link');
      } else {
        item.classList.remove('activ-link');
      }
    });
  });
}