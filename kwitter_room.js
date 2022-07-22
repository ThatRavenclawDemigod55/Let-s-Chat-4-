var firebaseConfig = {
    apiKey: "AIzaSyDBkyyaJz7OhbqUA-R5jCYtkwqgoltyOkw",
    authDomain: "let-s-chat-7e3f6.firebaseapp.com",
    databaseURL: "https://let-s-chat-7e3f6-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-7e3f6",
    storageBucket: "let-s-chat-7e3f6.appspot.com",
    messagingSenderId: "1030985722150",
    appId: "1:1030985722150:web:a1e84a676c5855d4a7f9e7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function AddRoom() {
    room_name = document.getElementById("RoomName").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitterPage.html";
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            Room_names = childKey;
        console.log("Room Name - " + Room_names) ;
        row = "<div class = 'room_name' id = "+Room_names+" onclick = 'redirectToRoomName (this.id)'>"
        + Room_names + "</div> <hr>" ;
        document.getElementById("output").innerHTML += row ; 
        });
    });
}

getData() 

function redirectToRoomName(name) {
    console.log(name) ; 
    localStorage.setItem("room_name", room_name) ; 
    window.location = "kwitterPage.html" ;
}

function LogOut() {
    localStorage.removeItem("user_name") ;
    localStorage.removeItem("room_name") ;
    window.location = "index.html" ;
}