let myVariable = 'Bob'; // hi
myVariable = 'Steve';

var myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/二小姐.jpg") {
    myImage.setAttribute("src", "images/幼靈夢.jpg");
  } else {
    myImage.setAttribute("src", "images/二小姐.jpg");
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if(!myName || myName === null){
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'Rhythm Game is cool, ' + myName;
    }
  }
  
if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = "Rhythm Game is cool, " + storedName;
}
  
myButton.onclick = function () {
    setUserName();
  };
  

/*
I come from Taiwan
*/