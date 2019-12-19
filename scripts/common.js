// configs.
var lsKey = 'amma-str';

$( document ).ready(function() {
    // Read localStorage
    var str = getFromLocalStorage();
    if (str !== null) {
        $( '#textbox' ).val(str);
    }
});

function triggerTextAreaChange() {
    setTimeout(function() {
        var str = $( '#textbox' ).val();
        setLocalStorage(str);
        draw();
    }, 0)
    
}

function setLocalStorage(str) {
    window.localStorage.setItem(lsKey, str);
}

function getFromLocalStorage() {
    var str = window.localStorage.getItem(lsKey);
    return str;
}

function draw() {
    var canvas = document.getElementById("input_canvas");
    var ctx = canvas.getContext("2d");
    var text = document.getElementById('textbox').value;
    ctx.fillStyle = "red";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.font = "60px Amma-Regular";
    ctx.fillText(text, 750, 190);
    ctx.textAlign = "center";
}

function download() {
    console.log("****");
    var canvas = document.getElementById("input_canvas");
    var dt = canvas.toDataURL('image/jpeg');
    this.href = dt;
};
downloadLnk.addEventListener('click', download, false);