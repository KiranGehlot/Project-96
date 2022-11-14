var firebaseConfig = {
    apiKey: "AIzaSyCylaSqCqbHkQg8sDCtvI9-EjAmNqMi95U",
    authDomain: "let-s-chat-ddfe3.firebaseapp.com",
    databaseURL: "https://let-s-chat-ddfe3-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-ddfe3",
    storageBucket: "let-s-chat-ddfe3.appspot.com",
    messagingSenderId: "609222411312",
    appId: "1:609222411312:web:875d7e2081d0ae2c79d9f5"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome   " + user_name;

function addroom()  {
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose: "adding room name"
    })
    localStorage.setItem("room_name" , room_name);
    window.location="chat_page.html"
}




function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("room_name-" + Room_names);
    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>"+Room_names+"</div> <hr> " ;
    document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();


function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location="chat_page.html";

}







