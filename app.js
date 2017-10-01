// Tyler's Website
// Variables
    
var config = {
    apiKey: "AIzaSyCuZkmw4FFJ82Uz5gNU74_BpDmjr3u6POs",
    authDomain: "debate-6f98f.firebaseapp.com",
    databaseURL: "https://debate-6f98f:.firebaseio.com",
    storageBucket: "gs://debate-6f98f.appspot.com",
  };
firebase.initializeApp(config);
var auth = firebase.auth();

$(document).on("ready", function(){
   console.log("ready"); 
   $("h4").hide();
   $(".navbar").hide();
});

$(".register").on("click", function(){
    console.log("hit/clicked");
    document.location = "https://preview.c9users.io/tydyethegreat/signup/index.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io";
});

$(".signin").on("click", function(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
         //console.log("error");
         document.location = "https://preview.c9users.io/tydyethegreat/signup/index.html?_c9_id=livepreview0&_c9_host=https://ide.c9.io";
    }).then(function(user){
         console.log("next");
         $("h1").fadeOut("medium");
         $("h3").fadeOut("medium");
         $("p").fadeOut("medium");
         $("p2").fadeOut("medium");
         $(".emailbox").fadeOut("medium");
         $(".passwordbox").fadeOut("medium");
         $(".signin").fadeOut("medium");
         $("h4").fadeIn("medium");
         $(".navbar").fadeIn("medium");
    });
});