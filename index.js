var txt = document.getElementById("mainTextName");
var txt2 = document.getElementById("mainTextName2");
var email = document.getElementById("mainTextEmail");
var email2 = document.getElementById("mainTextEmail2");
var btn = document.getElementById("submitBtn");
var btn2 = document.getElementById("submitBtn2");
var fireHeading = document.getElementById('fireHeading');
var firebaseRef = firebase.database().ref();

firebaseRef.child("Heading").set("Sis");
    var firebaseHeadingRef = firebase.database().ref().child("Heading");
    firebaseHeadingRef.on('value', function(datasnapshot){
    fireHeading.innerText = datasnapshot.val();
});


function submitClick(){
    firebaseRef.child("User01").child("Nome").set(txt.value);
    firebaseRef.child("User01").child("E-mail").set(email.value);
    
    firebaseRef.child("User02").child("Nome").set(txt2.value);
    firebaseRef.child("User02").child("E-mail").set(email2.value);
}


function submitClick2(){
    var firebaseRef = firebase.database().ref();
    var user = txt.value;
    var usuario2 = "Felipe";
    firebaseRef.child("Users").push(0).set(usuario2);
}