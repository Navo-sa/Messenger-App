import { chat } from './chat.js'
import { ui } from './ui.js'


const room = document.querySelectorAll('.but1')
const memButton = document.querySelectorAll('.memberbutton')
const display = document.querySelector('.messgebody')
const inptMsg = document.querySelector('.sendmessage')

const newChat = new chat('Charitha', 'Shanaka', 'General')
const newUi = new ui(display)


room.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptRoom = element.innerText
        newChat.updateRoom(inptRoom)
        getChatRoom((snapshot) => {
            newUi.render(snapshot)
        })
    })
})

memButton.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptMem = element.innerText
        newChat.updateMemName(inptMem)
        getChatMem((snapshot) => {
            newUi.render(snapshot)
        })
    })
})

inptMsg.addEventListener('click', (e) => {
    e.preventDefault()
    const inptMessage = inptMsg.inputmsg.value
    newChat.addChat(inptMessage)
})

