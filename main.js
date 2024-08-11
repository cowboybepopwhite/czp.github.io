let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/efe5b09ba906e3108b40f45d6ccafb5.jpg");
    alert("切换图片");
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    alert("切换图片");
  }
};


document.querySelector("html").addEventListener("click", function () {
    alert("别点到网页的空白处了");
});

function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "SYSU 酷毙了，" + myName;
    }
  }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "SYSU 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  };


      
  