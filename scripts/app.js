import { chats } from './chat.js'
import { ui } from './ui.js'


const room = document.querySelectorAll('.but1')
const memButton = document.querySelectorAll('.memberbutton')
const display = document.querySelector('.messgebody')
const inptMsg = document.querySelector('.msg')
const inptUser = document.querySelector('#registrationForm')

const newChat = new chats('Charitha', 'Shanaka', 'General')
const newUi = new ui(display)


const userList = ["Shanaka", "Shan", "Dilini", "Navodhya", "Sangeeth", "Manoj", "Charitha", "Amali", "Umesha"]


room.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptRoom = element.innerText
        newChat.updateRoom(inptRoom)
        newChat.getChatRoom((snapshot) => {
            newUi.render(snapshot)
        })
    })
})

memButton.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptMem = element.innerText
        newChat.updateSubUser(inptMem)
        newChat.getFilteredChats((snapshot) => {
            newUi.render(snapshot)
        })
    })
})

inptMsg.addEventListener('click', (e) => {
    e.preventDefault()
    const inptMessage = inptMsg.inputmsg.value
    newChat.addMessage(inptMessage)
    inptMsg.reset()
})

inptUser.enter.addEventListener('click', (e) => {
    e.preventDefault()
    const newN = inptUser.username.value
    if (userList.includes(newN)) {
        newChat.updatePrimaryUser(newN)
    } else {
        alert('you are not authorized')
    }
    inptUser.reset()
})

