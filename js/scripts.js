const progressBar = document.querySelector(".progress");

var thumbs = new Swiper(".slide-thumb", {
    spaceBetween: 20,
    slidesPerView: 5,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".slide-principal", {
    direction: "vertical",
    autoplay: {
        delay: 5e3,
        disableOnInteraction: false,
    },
    thumbs: {
        swiper: thumbs,
    },
    effect: "fade",
    fadeEffect: {
        crossfade: true,
    },
});

progressBar.addEventListener("animationend", myEndFunction);

// Retrigger Animation on Slide Change

function myEndFunction() {
  swiper2.slideNext();
  progressBar.style.animation = "none";
  void progressBar.offsetWidth; // Triggers Reflow
  progressBar.style.animation = null;
}

// Reset Progress Bar On Slide Change

swiper2.on("slideChange", function () {
  progressBar.style.animation = "none";
  void progressBar.offsetWidth; // Triggers Reflow
  progressBar.style.animation = null;
});


function login() {
    if (document.getElementById('login').classList.contains('show-modal')) {
        document.getElementById('login').classList.remove('show-modal');
        console.log('Login modal closed');
    }
    else {
        document.getElementById('login').classList.add('show-modal');
        console.log('Login modal opened');
    }
}

function hiddenMenu(menuId, btnId) {
    if (document.getElementById(menuId).classList.contains('menu-active')) {
        document.getElementById(menuId).classList.remove('menu-active')
        document.getElementById(btnId).classList.remove('btn-menu-active')
        console.log('Hidden menu closed');
    }
    else {
        document.getElementById('esportes').classList.remove('menu-active')
        document.getElementById('btn-esportes').classList.remove('btn-menu-active')
        document.getElementById('jogos').classList.remove('menu-active')
        document.getElementById('btn-jogos').classList.remove('btn-menu-active')
        document.getElementById(menuId).classList.add('menu-active')
        document.getElementById(btnId).classList.add('btn-menu-active')
        console.log('Hidden menu opened');
    }
}

function gameCards(menuId, btnId) {
    document.getElementById(menuId).classList.remove('games-cards-active')
    setTimeout(() => {
        document.getElementById(btnId).classList.add('active');
        document.getElementById(menuId).classList.add('games-cards-active');
    }, 100);
    if (btnId == 'battle-net') {
        document.getElementById('switch').classList.remove('active')
        document.getElementById('xbox').classList.remove('active')
        document.getElementById('ps').classList.remove('active')
    }
    else if (btnId == 'switch') {
        document.getElementById('battle-net').classList.remove('active')
        document.getElementById('xbox').classList.remove('active')
        document.getElementById('ps').classList.remove('active')
    }
    else if (btnId == 'xbox') {
        document.getElementById('battle-net').classList.remove('active')
        document.getElementById('switch').classList.remove('active')
        document.getElementById('ps').classList.remove('active')
    }
    else if (btnId == 'ps') {
        document.getElementById('battle-net').classList.remove('active')
        document.getElementById('xbox').classList.remove('active')
        document.getElementById('switch').classList.remove('active')
    }
}
