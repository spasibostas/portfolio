window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu');
    const burger = document.querySelector('.welcome__header-burger');
    const body = document.querySelector('body');
    const menuItems = document.querySelectorAll('.nav__menu-item');
    const btns = document.querySelectorAll('.button');
    const serviceCards = document.querySelectorAll('.service__cards-item');
    const buttonGarden = document.querySelector('button.gardens');
    const buttonLawn = document.querySelector('button.lawn');
    const buttonPlanting = document.querySelector('button.planting');


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

    const onGardenButtonClick = () => {
        buttonGarden.addEventListener('click', () => {
            buttonGarden.classList.toggle('active');
            serviceCards.forEach(serviceCard => {
                if (serviceCard.classList.contains('lawn') || serviceCard.classList.contains('planting')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonGarden.classList.contains('active') && buttonLawn.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonGarden.classList.contains('active') && buttonPlanting.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
            });
        });
    }
    
    const onLawnButtonClick = () => {
        buttonLawn.addEventListener('click', () => {
            buttonLawn.classList.toggle('active');
            serviceCards.forEach(serviceCard => {
                if (serviceCard.classList.contains('gardens') || serviceCard.classList.contains('planting')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonLawn.classList.contains('active') && buttonGarden.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonLawn.classList.contains('active') && buttonPlanting.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
            })
        })
    }

    const onPlantingButtonClick = () => {
        buttonPlanting.addEventListener('click', () => {
            buttonPlanting.classList.toggle('active');
            serviceCards.forEach(serviceCard => {
                if (serviceCard.classList.contains('gardens') || serviceCard.classList.contains('lawn')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonPlanting.classList.contains('active') && buttonGarden.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
                if (buttonPlanting.classList.contains('active') && buttonLawn.classList.contains('active')) {
                    serviceCard.classList.toggle('blur');
                }
            })
        })
    }


    onGardenButtonClick();

    onLawnButtonClick();

    onPlantingButtonClick();

    const accordionOpenButtons = document.querySelectorAll('.accordion__btn');
    const accordionBasics = document.querySelector('.accordion__wrapper.basics'); 
    const accordionStandard = document.querySelector('.accordion__wrapper.standard');
    const accordionProCare = document.querySelector('.accordion__wrapper.pro-care');
    const accordionCloseButtons = document.querySelectorAll('.accordion__content-btn');
    
    accordionOpenButtons.forEach(accordionOpenButton => {
        accordionOpenButton.addEventListener('click', (e) => {
            const basics = e.currentTarget;
            if (basics.classList.contains('basics')) {
                accordionBasics.classList.add('open');
                accordionBasics.style.maxHeight = accordionBasics.scrollHeight + 'px';
            }
            if (!basics.classList.contains('basics')) {
                accordionBasics.classList.remove('open');
            }
            if (accordionBasics.classList.contains('open')) {
                accordionBasics.style.maxHeight = accordionBasics.scrollHeight + 'px'; 
            } else {
                accordionBasics.style.maxHeight = null;
            }
        })


        accordionOpenButton.addEventListener('click', (e) => {
            const standard = e.currentTarget;
            if (standard.classList.contains('standard')) {
                accordionStandard.classList.add('open');
            }
            if (!standard.classList.contains('standard')) {
                accordionStandard.classList.remove('open');
            }
            if (accordionStandard.classList.contains('open')) {
                accordionStandard.style.maxHeight = accordionStandard.scrollHeight + 'px'; 
            } else {
                accordionStandard.style.maxHeight = null;
            }
        })

        accordionOpenButton.addEventListener('click', (e) => {
            const proCare = e.currentTarget;
            if (proCare.classList.contains('pro-care')) {
                accordionProCare.classList.add('open');
            }
            if (!proCare.classList.contains('pro-care')) {
                accordionProCare.classList.remove('open');
            }
            if (accordionProCare.classList.contains('open')) {
                accordionProCare.style.maxHeight = accordionProCare.scrollHeight + 'px'; 
            } else {
                accordionProCare.style.maxHeight = null;
            }
        })
        
    })

    accordionCloseButtons.forEach(accordionCloseButton => {
        accordionCloseButton.addEventListener('click', (e) => {
            const basicsClose = e.currentTarget;
            if (basicsClose.classList.contains('basics')) {
                accordionBasics.classList.toggle('open');
            }
            if (accordionBasics.classList.contains('open')) {
                accordionBasics.style.maxHeight = accordionBasics.scrollHeight + 'px'; 
            } else {
                accordionBasics.style.maxHeight = null;
            }
        })


        accordionCloseButton.addEventListener('click', (e) => {
            const standardClose = e.currentTarget;
            if (standardClose.classList.contains('standard')) {
                accordionStandard.classList.toggle('open');
            }
            if (accordionStandard.classList.contains('open')) {
                accordionStandard.style.maxHeight = accordionStandard.scrollHeight + 'px'; 
            } else {
                accordionStandard.style.maxHeight = null;
            }
            
        })

        accordionCloseButton.addEventListener('click', (e) => {
            const proCareClose = e.currentTarget;
            if (proCareClose.classList.contains('pro-care')) {
                accordionProCare.classList.toggle('open');
            }
            if (accordionProCare.classList.contains('open')) {
                accordionProCare.style.maxHeight = accordionProCare.scrollHeight + 'px'; 
            } else {
                accordionProCare.style.maxHeight = null;
            }
        })
        
    })

})