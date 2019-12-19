// configs.
var lsKey = 'amma-str';

window.canvasDataUrl = null;

$( document ).ready(function() {
    // Read localStorage
    var str = getFromLocalStorage();
    if (str !== null) {
        $( '#textbox' ).val(str);
        draw();
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

function resetSession() {
    window.localStorage.removeItem(lsKey);
    resetCanvas();
    $( '#textbox' ).val('');
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

function resetCanvas() {
    var canvas = document.getElementById("input_canvas");
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}


function download() {
    var canvas = document.getElementById("input_canvas");
    window.canvasDataUrl = canvas.toDataURL('image/jpeg');
    this.href = window.canvasDataUrl;
};
downloadLnk.addEventListener('click', download, false);

function commandBackspace() {
    $( "#textbox" ).val(
        function(index, value){
            return value.substr(0, value.length - 1);
    });
    draw();
}

function print() {
    var dataUrl = document.getElementById("input_canvas").toDataURL(); //attempt to save base64 string to server using this var  
    var windowContent = '<!DOCTYPE html>';
    windowContent += '<html>'
    windowContent += '<head><title>Print canvas</title></head>';
    windowContent += '<body>'
    windowContent += '<img src="' + dataUrl + '">';
    windowContent += '</body>';
    windowContent += '</html>';
    var printWin = window.open('','','width=340,height=260');
    printWin.document.open();
    printWin.document.write(windowContent);
    printWin.document.close();
    printWin.focus();
    printWin.print();
    printWin.close();
}