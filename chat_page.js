//YOUR FIREBASE LINKS
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

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send()    {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name , 
            message:msg ,
            like:0
      })

      document.getElementById("msg").value="";
      

}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
