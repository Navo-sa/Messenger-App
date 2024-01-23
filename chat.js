import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getFirestore ,collection,addDoc,getDocs,  query, where,onSnapshot} from "https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyC-q2I2cKK_TuFI5gh2wEvNE-vxTdj80K0",
    authDomain: "messenger-app-d04aa.firebaseapp.com",
    projectId: "messenger-app-d04aa",
    storageBucket: "messenger-app-d04aa.appspot.com",
    messagingSenderId: "758313645992",
    appId: "1:758313645992:web:b315134d1eb5f25cfd0f9d",
    measurementId: "G-K143LF1BG5"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore();
  const collectionRef = collection(db, "chats");

  class Chats {
    constructor(primaryUser,subUser,room){
        this.primaryUser=primaryUser,
        this.subUser=subUser,
        this.room = room
    }

    async addMessage(message) {
        const msg = {
          userName: this.primaryUser,
          room: this.room,
          message,
          time: serverTimestamp()
        };
        const chat = await addDoc(collectionRef, msg);
      }

     getFilteredChats(Callback) {
    const filterChats = query(collectionRef, where("userName", '==', this.subUser), where("room", '==', this.room));

    onSnapshot(filterChats, (snapshot) => {
      Callback(snapshot);
    });

      }

     getChatRoom(Callback) {
    const filterChatRoom = query(collectionRef, where("room", '==', this.room));

    onSnapshot(filterChatRoom, (snapshot) => {
      Callback(snapshot);
    });
      }

      updatePrimaryUser(userName){
        this.primaryUser = userName
      }
      updateSubUser(userName2){
        this.subUser = userName2
      }
      updateRoom(selectedroom){
        this.room = selectedroom
      }
}
