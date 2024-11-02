document.getElementById('open-a').onclick = open;
document.getElementById('close-a').onclick = close;

var a = document.getElementsByClassName('resp_a');

function open(){
    document.getElementById("open").style.fontSize = "0px";
    document.getElementById("close").style.fontSize = "3.5vh";
    document.getElementById("resp_nav").style.width = "clamp(275px, 75vw, 600px)";
    document.getElementById("resp_nav").style.border = "2px solid #e55451";
    for(var i=0; i< a.length; i++){
        a[i].style.fontSize = "3vh";
    }    
}

function close(){
    document.getElementById("open").style.fontSize = "3.5vh";
    document.getElementById("close").style.fontSize = "0px";
    document.getElementById("resp_nav").style.width = "0px";
    document.getElementById("resp_nav").style.border = "0px";
    for(var i=0; i< a.length; i++){
        a[i].style.fontSize = "0px";
    }    
}