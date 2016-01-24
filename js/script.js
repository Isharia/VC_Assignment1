

var messages = [];


//Get the  element having id #chatspace in the document 
var messages_root = document.querySelector("#chatspace");

var typingStatus = document.querySelector("#typing");
var timer = null;

var lastTypedTime = new Date(0); // it's 01/01/1970
var typingDelayMillis = 5000

function init()
{
    //Get the  element having id #usertext in the document 
	var input = document.querySelector("#usertext");
    //specify event to be done when user enter input in to the text field
	input.addEventListener("keydown", onKeyDown );
    input.onclick=myFunction();
    }



function onKeyDown(e) {
    
    //do nothing if the hit key was not "Enter"
	if(e.keyCode != 13)
		return;
    //assign the newly entered value to the "text variable"
	var text = this.value;
    text = text.replace(/\:\)/g, '<img src="emoticons/happy.gif" border="0">');
    text = text.replace(/\:\(/g, '<img src="emoticons/sad.gif" border="0">');
    text = text.replace(/\;\)/g, '<img src="emoticons/winking.gif" border="0">');
    //text = text.replace(/\:\D/g, '<img src="emoticons/biggrin.gif" border="0">');
    text = text.replace(/\:\//g, '<img src="emoticons/confused.gif" border="0">');
    text = text.replace(/\:\P/g, '<img src="emoticons/tongue.gif" border="0">');
    text = text.replace(/\:\*/g, '<img src="emoticons/kiss.gif" border="0">');
    text = text.replace(/\:\o/g, '<img src="emoticons/surprise.gif" border="0">');
   
   
   //once entered clear the text filed
	this.value = "";
    
	//clearTimeout(timer); 
    //timer = setTimeout(refreshTypingStatus(text), 1000)
    // Add  new text item to messages array
	messages.push( text );
    //passing text value to showMessage function
	showMessage( text );
    
    
	
}

/*function refreshTypingStatus(a) {
       if (a == '' || new Date().getTime() - lastTypedTime.getTime() > typingDelayMillis) {
        //typingStatus.html('No one is typing -blank space.');
        document.getElementById("typing").innerHTML= " not typing";
    //} else {
      //  document.getElementById("typing").innerHTML= "typing";
  //  }
//}
 
function updateLastTypedTime() {
   lastTypedTime = new Date();
}

setInterval(refreshTypingStatus, 100);*/



function showMessage( text )
{
    // create a new div element 
	var newDiv = document.createElement("div");
    // gives class name for new div element
	newDiv.className = "msg";
    // assign text passed as the value to new div element
	newDiv.innerHTML = text;
    
    //append new div element to messages_root
	messages_root.appendChild( newDiv );
}

  function updateTime() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        if (minutes < 10){
            minutes = "0" + minutes;
        }
        if (seconds < 10){
            seconds = "0" + seconds;
        }
        var v = hours + ":" + minutes + ":" + seconds + " ";
        if(hours > 11){
            v+="PM";
        } else {
            v+="AM"
        }
        setTimeout("updateTime()",1000);
        document.getElementById('time').innerHTML=new Date(new Date().getTime()).toLocaleTimeString();
    }
    updateTime();


init();