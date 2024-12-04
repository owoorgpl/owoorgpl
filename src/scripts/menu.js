const menuItems = document.getElementById('menu-items');
const menu = document.getElementById('menu-top');
const openMenu = document.getElementById('button-burger');
let h = window.innerHeight;
let opened = false;
const onClickOutside = (element, callback) => {

  document.addEventListener('click', e => {
    if (!element.contains(e.target)) callback();
  });
};
onClickOutside(menu, () => {
  opened = false;
  menuItems.setAttribute('data-show', opened);
});

const menuButtons = document.querySelectorAll('#menu-items > a');

for (let i = 0; i < menuButtons.length; i++) {
  const button = menuButtons[i];
  button.addEventListener('click', () => {
    opened = false;
    menuItems.setAttribute('data-show', opened);
  })
}


window.addEventListener('resize', e => {
  h = window.innerHeight;
});

openMenu.addEventListener('click', e => {
  opened = !opened;
  menuItems.setAttribute('data-show', opened);
});

window.addEventListener('scroll', e => {
  if (window.scrollY >= h && menu.getAttribute('data-show') == 'false') {
    menu.setAttribute('data-show', 'true');
  } else if (window.scrollY < h && menu.getAttribute('data-show') == 'true') {
    menu.setAttribute('data-show', 'false');
  }
});
