// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQU
const firebaseConfig = {
    apiKey: "AIzaSyB9NgVN_vEVBB3pvh605yYVETXH7hLbaJM",
    authDomain: "kwitter-36a05.firebaseapp.com",
    databaseURL: "https://kwitter-36a05-default-rtdb.firebaseio.com",
    projectId: "kwitter-36a05",
    storageBucket: "kwitter-36a05.appspot.com",
    messagingSenderId: "31875634813",
    appId: "1:31875634813:web:d2332e6987e26b337fc314"
  };I


// Inicialize o Firebase
firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
    localStorage.setItem("user_name", user_name);
    

   window.location = "chat_room.html";




