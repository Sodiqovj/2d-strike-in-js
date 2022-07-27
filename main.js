let attackKnifeBtn = document.querySelector('.attackKnifeBtn')
let battleSound = document.querySelector('.battle-sound')
let knifeSound = document.querySelector('.knife-sound')
let startSound = document.querySelector('.start-sound')
let bombSound = document.querySelector('.bomb-sound')
let character = document.querySelector('.character')
let attackBtn = document.querySelector('.attackBtn')
let gunSound = document.querySelector('.gun-sound')
let characterStill = 'images/character/still.png'
let allImages = document.querySelectorAll('img')
let bullet = document.querySelector('.bullet')
let fullBox = document.querySelector('.full')
let zombi = document.querySelector('.zombi')
let arena = document.querySelector('.arena')
let text = document.querySelector('#text')
let characterStatus = 'stand'
let dronesNumber = 0
let turnDron = true
let gameStart = true
let knife = false
let load = true
let turn = true


character.style.transition = '0s !important'
// [failed works]

// battle sound [not play]!
// drone war [not installed]!

// [end failed]


// controls character position
window.addEventListener('keyup', function(event){
    switch (event.key) {
        case "ArrowLeft":
            characterStatus = 'left'
            break;
        case "ArrowRight":
            characterStatus = 'right'
            break;

        default:
            break;
    }
})

// checking Status
let ckeckingStatus = setInterval(() => {
    if(gameStart==true){
        battleSound.play()
             // stand if 
            if (characterStatus=='stand') {
                character.src = characterStill
            }

            // left if
            if(characterStatus=='left'){
                character.style.transition = '0'
                character.style.transform = 'rotateY(180deg)'
            }

            // right if
            if(characterStatus=='right'){
                character.style.transition = '0'
                character.style.transform = 'rotateY(0deg)'
            }
    }

}, 600);


attackBtn.addEventListener('click', function(){
    if (gameStart==true&&turn==true) {
        gunSound.play()
        turn = false
        if (characterStatus=='left') {
            bullet.classList.add('bulletLeft')
        }
        else if (characterStatus=='right') {
            bullet.classList.add('bulletRight')
        }
        else{
            bullet.classList.add('bulletRight')
        }
        setTimeout(() => {
            turn = true
            bullet.classList.remove('bulletLeft')
            bullet.classList.remove('bulletRight')
        }, 100);
    }
})

let loading = setInterval(() => {
            if (load==true) {
                let loadBox = document.querySelector('.loading-container')
                loadBox.style.display = 'flex'
                fullBox.style.display = 'none'
            }
            setTimeout(() => {
                load = false
                let loadBox = document.querySelector('.loading-container')
                loadBox.style.display = 'none'
                fullBox.style.display = 'flex'
            }, 1000);
}, 1);

let createDonre =  setInterval(() => {
    if(turnDron==true&&gameStart==true){
        setTimeout(() => {
            turnDron = false
        }, 100);
        let drone = document.createElement('div')
        arena.appendChild(drone)
        drone.classList.add('left')
        drone.classList.add('droneGo')
    }
    if(turnDron==false&&gameStart==true){
        setTimeout(() => {
            turnDron = true
        }, 100);
        let drone = document.createElement('div')
        arena.appendChild(drone)
        drone.classList.add('right')
        drone.classList.add('droneGo')
    }
}, 5000);

let deadDrone = setInterval(() => {
    let drones = document.querySelectorAll('.droneGo')
    drones.forEach(function(item){
        let itemLeft = parseInt(window.getComputedStyle(item).getPropertyValue('left'))
        let itemRight = parseInt(window.getComputedStyle(item).getPropertyValue('right'))
        drones.forEach(function(item2){
            let itemLeft2 = parseInt(window.getComputedStyle(item2).getPropertyValue('right'))
            let itemRight2 = parseInt(window.getComputedStyle(item2).getPropertyValue('right'))
            if (turn==false&&itemLeft<itemLeft2&&characterStatus=='left') {
                item.classList.add('dead')
                setTimeout(() => {
                    item.remove()
                }, 2000);
            }
            if (turn==false&&itemRight<itemRight2&&characterStatus=='right') {
                item.classList.add('dead')
                setTimeout(() => {
                    item.remove()
                }, 2000);
            }
        })
    })
}, 100);

if (item.classList=='dead') {
        item.style.backgroundImage = "url('images/bomb/bomb-1.png')"
        setTimeout(() => {
            if (item.classList=='dead') {
                item.style.backgroundImage = "url('images/bomb/bomb-1.png')"
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-1.png')"
                }, 100);
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-2.png')"
                }, 300);
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-3.png')"
                }, 700);
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-4.png')"
                }, 900);
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-5.png')"
                }, 1300);
                setTimeout(() => {
                    item.style.backgroundImage = "url('images/bomb/bomb-6.png')"
                }, 170);
        }
    }, 100);
}




















// attackKnifeBtn.addEventListener('click', function(){
//     if (gameStart==true&&turn==true&&knife==false) {
//         knife = true
//         knifeSound.play()
//     }
// })






//    not over
// allImages.forEach(function(img){
//     img.addEventListener('loadeddata', function(){
//         fullBox.style.display = 'none'
//         document.body.innerHTML = 'Loading...'
//     })
// })

