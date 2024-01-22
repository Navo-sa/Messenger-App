export class ui{
    constructor(displayChat, chatRooms){
    this.displayChat = displayChat
    this.chatRooms = chatRooms
    }

    render(snapshot){
        let chatArray = []

        snapshot.docs.forEach((element) => {
            chatArray.push({...element.data()})            
        });
        console.log(chatArray);
    }
}