

for(let i = 0; i < 4; i++){
    load();
}
function load (){
    let createCol = document.createElement("div");
    createCol.className = "col-lg-4 bg-danger";

    //create card div
    let cardDiv = document.createElement("div");
    cardDiv.className = "card w-100";
    cardDiv.style.width = "18rem";

    //create image
    let img = document.createElement("img");
    img.className = "card-img-top";
    img.src = "../img/air-force-1-07-mens-shoes-jBrhbr.jpg";
    cardDiv.appendChild(img);
    createCol.appendChild(cardDiv);
    document.getElementById("createdivs").appendChild(createCol);
}
windows.onload = function (){

}
function sendRequest(value1){
    let xhr = new XMLHttpRequest();
    let url = "http://localhost/pp1/p1/control/reqdata.php?value="+value;
    xhr.open("GET", url, true);
    xhr.send();
    xhr.onreadystatechange = function (){
        if(this.readyState == 4 && this.status == 200){
            document.getElementById("createdivs").innerHTML = this.responseText;
        }
    }
}
