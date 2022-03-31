let menuIsOpened = false;
const button = document.querySelector('nav ul.button');
const menu = document.querySelector('nav.mobile ul');

button.addEventListener("click", () => {
    if (!menuIsOpened) {
        menu.style.display = 'flex';
        menuIsOpened = true;
    } else {
        menu.style.display = 'none';
        menuIsOpened = false;
    }
})

button.removeEventListener('click', this.onClick);