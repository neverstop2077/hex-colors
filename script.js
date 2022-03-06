var backgroundSection = document.getElementsByTagName("body")[0];
var btnChangeColor = document.querySelector(".btn.btn-light.change-color-btn");
var hex_number= ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
var hexcode1, hexcode2;

btnChangeColor.onclick = function(){
    hexcode1 = '';
    hexcode2 = '';

    for(var i = 0; i < 6; i++){
        var random_index1 = Math.floor(Math.random() * hex_number.length);
        hexcode1 += hex_number[random_index1];
    
        var random_index2 = Math.floor(Math.random() * hex_number.length);
        hexcode2 += hex_number[random_index2];
    }

    backgroundSection.style.background = `linear-gradient(to right, #${hexcode1}, #${hexcode2})`;

    document.getElementById("hexcode1").innerHTML = hexcode1;
    document.getElementById("hexcode2").innerHTML = hexcode2;
}

