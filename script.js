const popupBg = document.getElementsByClassName('popup__bg');
const popup = document.getElementsByClassName('popup');
const accountLogin = document.getElementById('account-login');
const backgroundSelect = document.getElementById('background-selection');
const closePopupBtn = document.getElementsByClassName('close-popup')
const boxContainer = document.querySelector('.box-container')
const inputColors = document.querySelector('#input-colors')
const addСolor = document.querySelector('#add-color')







accountLogin.addEventListener('click', (e) => {
    e.preventDefault();
    popupBg[0].classList.add('active')
    popup[0].classList.add('active')
})

closePopupBtn[0].addEventListener('click', () => {
    popupBg[0].classList.remove('active');
    popup[0].classList.remove('active');

})

backgroundSelect.addEventListener('click', (e) => {

    popupBg[1].classList.add('active')
    popup[1].classList.add('active')

    if (boxContainer.children.length == 0) {
        let colors = [];
        inputColors.focus()
        addСolor.addEventListener('click', () => {
    
            if (inputColors.value !== "") {
                console.log(inputColors.value)
                colors = []
                colors.push(inputColors.value)
                inputColors.value = "";
                console.log(colors)

                for (let i = 0; i < colors.length; i++) {

                    let box = document.createElement('div');
                    box.className = "box";
                    boxContainer.appendChild(box)
                    box.style.background = colors[i];
                    box.addEventListener('click', () => {
                        document.body.style.background = box.style.backgroundColor
                    })
                }
            }
            else {
                alert('Ви ввели не вірний колір')
            }

        })



        // for (let i = 0; i < colors.length; i++) {

        //     let box = document.createElement('div');
        //     box.className = "box";
        //     boxContainer.appendChild(box)
        //     box.style.background = colors[i];
        //     box.addEventListener('click', () => {
        //         document.body.style.background = box.style.backgroundColor
        //     })
        // }


    }



})


closePopupBtn[1].addEventListener('click', () => {
    popupBg[1].classList.remove('active');
    popup[1].classList.remove('active');

})


document.addEventListener('click', (e) => {
    if (e.target === popupBg[0] || e.target === popupBg[1]) {
        popupBg[0].classList.remove('active');
        popup[0].classList.remove('active');
        popupBg[1].classList.remove('active');
        popup[1].classList.remove('active');

    }
})