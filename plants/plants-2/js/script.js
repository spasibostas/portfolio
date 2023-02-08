window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu');
    const burger = document.querySelector('.welcome__header-burger');
    const body = document.querySelector('body');
    const menuItems = document.querySelectorAll('.nav__menu-item');
    const btns = document.querySelectorAll('.button');
    const serviceCards = document.querySelectorAll('.service__cards-item');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    })

    document.addEventListener('click', (e) => {
        let target = e.target;
        let its_menu = target === menu || menu.contains(target);
        let its_burger = target === burger;
        let menu_is_active = menu.classList.contains('active');

        if (!its_menu && !its_burger && menu_is_active) {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('lock');
        }
    })

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('active');
            menu.classList.toggle('active');
            body.classList.toggle('lock');
        })
    })

    btns.forEach(btn => {
        serviceCards.forEach(serviceCard => {
            btn.addEventListener('click', () => {
                btn.classList.add('focus');
                if (!serviceCard.classList.contains('gardens')) {
                    serviceCard.classList.add('blur');
                }
        })
        })
    })


})