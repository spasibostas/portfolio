window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav__menu');
    const burger = document.querySelector('.welcome__header-burger');
    const body = document.querySelector('body');
    const menuItems = document.querySelectorAll('.nav__menu-item');
    const serviceButtons = document.querySelectorAll('.service__menu-btns button');
    const serviceCards = document.querySelectorAll('.service__cards-item');

    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        menu.classList.toggle('active');
        body.classList.toggle('lock');
    })

    document.addEventListener('click', (e) => {
        let target = e.target;
        let isMenu = target === menu || menu.contains(target);
        let isBurger = target === burger;
        let isMenuActive = menu.classList.contains('active');

        if (!isMenu && !isBurger && isMenuActive) {
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

    function handleServiceButtonClick(event) {
        const selectedButton = event.target;

        if (selectedButton.classList.contains("active")) {
            selectedButton.classList.remove("active");
            
        const activeButtons = Array.from(serviceButtons).filter(button => button.classList.contains("active"));

        if (activeButtons.length === 0) {
            serviceCards.forEach(card => card.classList.remove("blur"));
        } else {
            serviceCards.forEach(card => {
                const isCardActive = activeButtons.some(button => card.classList.contains(button.id));
                card.classList.toggle("blur", !isCardActive);
            });
        }
        } else {
            serviceButtons.forEach(button => {
                if (button !== selectedButton) {
                    button.classList.remove("active");
                }
            });
            serviceCards.forEach(card => {
                if (card.classList.contains(selectedButton.id)) {
                    card.classList.remove("blur");
                } else {
                    card.classList.add("blur");
                }
            });
    
            selectedButton.classList.add("active");
        }
    }
    
    serviceButtons.forEach(button => {
        button.addEventListener("click", handleServiceButtonClick);
    });

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


    const select = function() {
        const selectButton = document.querySelector('.select__icon');
        const selectBody = document.querySelector('.select__body');
        const select = document.querySelector('.select');
        const selectItems = document.querySelectorAll('.select__item');
        const adresses = document.querySelectorAll('.adress');

        selectButton.addEventListener('click', () => {
            selectButton.classList.toggle('active');
            select.classList.toggle('active');
            selectBody.classList.toggle('active');
            
            if (selectBody.classList.contains('active')) {
                selectBody.style.maxHeight = selectBody.scrollHeight + 'px'; 
            } else {
                selectBody.style.maxHeight = null;
            }




            selectItems.forEach(item => {
                item.addEventListener('click', selectChoose)
            });

            function selectChoose() {
                let text = this.innerText;
                let currentText = this.closest('.select').querySelector('.select__current');
                currentText.innerText = text;
                selectBody.classList.remove('active');
                selectButton.classList.remove('active');
                selectBody.style.maxHeight = null;

                for (let i = 0; i < adresses.length; i++) {
                    if (this === selectItems[i]) {
                        adresses[i].classList.add('active');
                    } else {
                        adresses[i].classList.remove('active');
                    }
                    if (adresses[i].classList.contains('active')) {
                        selectButton.addEventListener('click', () => {
                            select.classList.add('active');
                            adresses[i].classList.remove('active');
                        })
                    }
                }
            }

        })
    }

    select();



})