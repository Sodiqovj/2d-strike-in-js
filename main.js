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


character.style.transition = 0
// [failed works]

// battle sound [not play]!
// drone war [not installed]!

// [end failed]


// controls character position
window.addEventListener('keyup', function(event){
    battleSound.play()
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
        let drone = document.createElement('div')
        arena.appendChild(drone)
        drone.classList.add('left')
        drone.classList.add('droneGo')
    }
    if(turnDron==false&&gameStart==true){
        let drone = document.createElement('div')
        arena.appendChild(drone)
        drone.classList.add('right')
        drone.classList.add('droneGo')
    }
}, 5000);

let deadDrone = setInterval(() => {
    let drones = document.querySelectorAll('.droneGo')
    drones.forEach(function(item){
        let itemLeft = parseInt(window.getComputedStyle(item).getPropertyValue('bottom'))
        let itemRight = parseInt(window.getComputedStyle(item).getPropertyValue('right'))
        if (turn==false) {
            if (itemLeft&&itemRight) {

            }
        }
    })
}, 10);



















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

