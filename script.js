const buttonNO = document.querySelector('#no')
const buttonYes = document.querySelector('#yes')

let fontSize = 2

let messages = [
    'Estas seguro?',
    'Piensalo bien',
    'Piensalo muy bien',
    'Mira el otro boton'
]

buttonNO.addEventListener('click', ()=> {
    fontSize = fontSize + .5
    buttonYes.style.fontSize = `${fontSize}rem`

    const indexRandom = Math.floor(Math.random()*messages.length)

    buttonNO.textContent = messages[indexRandom]
    
})

buttonYes.addEventListener('click', ()=> {
    document.querySelector('#message').style.display = 'flex'
})