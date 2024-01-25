export class ui {
    constructor(displayChat) {
        this.displayChat = displayChat
    }

    render(snapshot) {
        let chatArray = []

        snapshot.docs.forEach((element) => {
            chatArray.push({ ...element.data() })
        });
        let query = `<p>
                      <span></span>
                      <span></span>
                    </p>`
        this.displayChat.innerHTML = query
        chatArray.forEach((element) => {
            query = `<div class="d-flex justify-content-start mb-4">
                    <span class="mesagename">${element.userName}</span>
                    <div class="msg_cotainer">
                      ${element.message}
                    </div>
                </div>`
            this.displayChat.innerHTML += query
        })
    }
}