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
    }, 0)
    
}

function setLocalStorage(str) {
    window.localStorage.setItem(lsKey, str);
}

function getFromLocalStorage() {
    var str = window.localStorage.getItem(lsKey);
    return str;
}