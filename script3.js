var code;
var att = 0;
function createCaptcha() {
  //clear the contents of captcha div first 
  document.getElementById('captcha').innerHTML = "";
  var charsArray =
  "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ@!#$%^&*";
  var lengthOtp = 6;
  var captcha = [];
  for (var i = 0; i < lengthOtp; i++) {
    //below code will not allow Repetition of Characters
    var index = Math.floor(Math.random() * charsArray.length + 1); //get the next character from the array
    if (captcha.indexOf(charsArray[index]) == -1)
      captcha.push(charsArray[index]);
    else i--;
  }
  var canv = document.createElement("canvas");
  canv.id = "captcha";
  canv.width = 100;
  canv.height = 50;
  var ctx = canv.getContext("2d");
  ctx.font = "25px Georgia";
  ctx.strokeText(captcha.join(""), 0, 30);
  code = captcha.join("");
  document.getElementById("captcha").appendChild(canv); // adds the canvas to the body element
}
function validateCaptcha() {
  event.preventDefault();
  debugger
  switch(att){
    case 0: alert("Invalid Captcha. try Again"); att+=1; createCaptcha(); break;
    case 1: alert("It's terrible. Clean your glasses."); att+=1; createCaptcha(); break;
    case 2: alert("OK I understand your anger. But try again, answer is so close."); createCaptcha(); att+=1; break;
    case 3: alert("SO close. Answers's font size: 600 pixels"); att+=1; createCaptcha(); break;
    case 4: alert("O_o. OK. Select WHOLE text on the page. May be you can't see the answer."); createCaptcha(); break;
  }
}
