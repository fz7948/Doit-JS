function newRegister() {
    var newP = document.createElement("p");
    var userName = document.querySelector("#userName");
    var newText = document.createTextNode(userName.value);
    newP.appendChild(newText);
    var nameList = document.querySelector("#nameList");
    nameList.insertBefore(newP,nameList.childNodes[0]);
    userName.value = "";
}