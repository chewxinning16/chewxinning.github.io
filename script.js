function toggleMenu() {
    // A function to toggle or untoggle the menu and icon state

    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    } else {
        menu.classList.add('open');
        icon.classList.add('open');
    }
}