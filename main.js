let attackKnifeBtn = document.querySelector('.attackKnifeBtn')
let battleSound = document.querySelector('.battle-sound')
let knifeSound = document.querySelector('.knife-sound')
let startSound = document.querySelector('.start-sound')
let new_bullet = document.querySelector('.new-bullet')
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
        // battleSound.play()
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
            new_bullet.classList.add('new-bullet-left')
        }
        else if (characterStatus=='right') {
            bullet.classList.add('bulletRight')
            new_bullet.classList.add('new-bullet-right')
        }
        else{
            bullet.classList.add('bulletRight')
        }
        setTimeout(() => {
            turn = true
            bullet.classList.remove('bulletLeft')
            bullet.classList.remove('bulletRight')
            new_bullet.classList.remove('new-bullet-left')
            new_bullet.classList.remove('new-bullet-right')
        }, 1000);
    }
})

function new_bullet_reset(){
    bullet.classList.remove('bulletLeft')
    bullet.classList.remove('bulletRight')
}

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

let createDrone =  setInterval(() => {
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
}, 3000);



let dronesFunc = setInterval(() => {
    let drones = document.querySelectorAll('.droneGo')
    drones.forEach(drone => {
        let new_bullet_left = parseInt(window.getComputedStyle(new_bullet).getPropertyValue('left'))
        // let droneLeft = parseInt(window.getComputedStyle(drone).getPropertyValue('left'))
        if (turn==false) {
            if (new_bullet_left<drone.style.left&&drone.classList == 'left droneGo'&&characterStatus=='left') {
                alert('left')
            }
            if (new_bullet_left<drone.style.left&&drone.classList == 'right droneGo'&&characterStatus=='right') {
                alert('right')
            }
            console.log(drones[drone.ariaChecked]);
        }
    });
}, 100);









// let deadDrone = setInterval(() => {
//     let drones = document.querySelectorAll('.droneGo')
//     drones.forEach(function(item){
//         let itemLeft = parseInt(window.getComputedStyle(item).getPropertyValue('left'))
//         let itemRight = parseInt(window.getComputedStyle(item).getPropertyValue('right'))
//         drones.forEach(function(item2){
//             let itemLeft2 = parseInt(window.getComputedStyle(item2).getPropertyValue('right'))
//             let itemRight2 = parseInt(window.getComputedStyle(item2).getPropertyValue('right'))
//             if (turn==false&&itemLeft>itemLeft2&&characterStatus=='left') {
//                 item.classList.add('dead')
//                 setTimeout(() => {
//                     item.remove()
//                 }, 2000);
//             }
//             if (turn==false&&itemRight>itemRight2&&characterStatus=='right') {
//                 item.classList.add('dead')
//                 setTimeout(() => {
//                     item.remove()
//                 }, 2000);
//             }
//             text.textContent = `item: ${itemLeft}, item2: ${itemLeft2}`
//         })
//     })
// }, 100);





// if (item.classList=='dead') {
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-1.png')"
//                 }, 100);
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-2.png')"
//                 }, 400);
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-3.png')"
//                 }, 800);
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-4.png')"
//                 }, 12000);
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-5.png')"
//                 }, 1600);
//                 setTimeout(() => {
//                     item.style.backgroundImage = "url('images/bomb/bomb-6.png')"
//                 }, 1900);
// }




















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

