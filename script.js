function toggleMenu() {
    
    // get the menu and icon elements
    const menu = document.querySelector('.menu-links');
    const icon = document.querySelector('.hamburger-icon');
    
    // toggle the 'open' class on both elements
    menu.classList.toggle('open');
    icon.classList.toggle('open');
}