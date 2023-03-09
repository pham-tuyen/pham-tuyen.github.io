var brname = "";
var d = new Date();
if(d.getMonth() == 2) {
    switch(d.getDate()) {
        case 11:
            brname = "Kỳ";
            break;
        case 12:
            brname = "Tuấn";
            break;
        default:
            brname = "một thằng nào đó";
    }
}

document.getElementById("submit").addEventListener("click", () => {
    var name = document.getElementById("name").value;
    if(name != brname) alert("Ê cu, tao biết là mày đang lừa tao mà. Mày là " + brname + " mà");
    else {
        document.getElementById("namewrap").style.marginTop = "10vh";
        document.getElementById("namewrap").style.color = "white";
        document.getElementById("namewrap").style.fontSize = "60px";
        document.getElementById("namewrap").innerHTML = `Chúc mừng sinh nhật ` + brname + ` nha&#127881;&#x1F389;&#127881;&#x1F389;<br>
        <audio autoplay loop>
            <source src="/sn.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <video id="myVideo" width="640" height="352" autoplay loop muted>
            <source src="./cum.mp4" type="video/mp4">
            Your browser does not support HTML5 video.
        </video>`;
        document.getElementById("myVideo").play();
    }
})
