/* This is for the very fun nav*/

function openNav() {

    let toggler = document.querySelector('.nav-prompt')

    let navigation = document.querySelector('.nav-inner')

    toggler.onclick = function () {
        navigation.classList.toggle('open')
    }
}


openNav();