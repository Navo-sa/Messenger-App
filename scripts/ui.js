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
            query = `<p>
                            <span>${element.userName}</span>
                            <span>${element.message}</span>
              </p>`
            this.displayChat.innerHTML += query
        })
    }
}