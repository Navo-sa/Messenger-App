



const room = document.querySelectorAll('.but1')
const memButton = document.querySelectorAll('.memberbutton')
const display = document.querySelector('.messgebody')
const inptMsg = document.querySelector('.sendmessage')

room.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptRoom = element.innerText
        console.log(inptRoom)
    })
})

memButton.forEach((element) => {
    element.addEventListener('click', (e) => {
        e.preventDefault()
        const inptMem = element.innerText
        console.log(inptMem)
    })
})

inptMsg.addEventListener('click', (e) => {
    e.preventDefault()
    const inptMessage = inptMsg.inputmsg.value
    console.log(inptMessage)
})

