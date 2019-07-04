// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

var myImage = document.querySelector('img');

myImage.onclick = function() 
{
  var mySrc = myImage.getAttribute('src');

//    if(mySrc === 'images/firefox-icon.png') 
  if(mySrc === "images/2013_04_02__MAN_AT_WORK_1_ONE.JPG")  // single quotes are used, not double!
  {
    myImage.setAttribute ('src',"images/2013_04_02__MAN_AT_WORK_2_TWO.JPG");
  } 
  else 
  {
    myImage.setAttribute ('src',"images/2013_04_02__MAN_AT_WORK_1_ONE.JPG");
  }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() 
{
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) 
{
  setUserName();
} 
else 
{
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() 
{
  setUserName();
}



