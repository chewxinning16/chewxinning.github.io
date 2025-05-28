function toggleMenu() {
    
    // get the menu and icon elements
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');

    // toggle or untoggle the 'open' class on both elements
    const isOpen = menu.classList.contains('open');
    if (isOpen) {
        menu.classList.remove('open');
        icon.classList.remove('open');
    } else {
        menu.classList.add('open');
        icon.classList.add('open');
    }
}