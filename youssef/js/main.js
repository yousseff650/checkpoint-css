//partie declaratioin variable 
var txt = document.getElementById("texte");
var select = document.getElementById("selector");
var selector=document.getElementById("typeTexte")

// chnagement de style : bold 
function changeBold() {
    if (txt.style.fontWeight == "bold") {
        return txt.style.fontWeight = "normal";
    }
    txt.style.fontWeight = "bold";
}

//chnagement de style : italic
function changeItalic() {
    if (txt.style.fontStyle == "italic") {
        return txt.style.fontStyle = "normal";
    }
    txt.style.fontStyle = "italic";
}

//souligner ma paragraphe 
function souligner() {
    if (txt.style.textDecoration == "underline"){
        return txt.style.textDecoration= "none" ;
    } 
    txt.style.textDecoration= "underline" ;
}


//fonction changement du font-size  
function changeFontSise() {
    txt.style.fontSize = select.value;
}
//fonction changement du type du text 
function typeTexte(){
 txt.style.fontFamily=document.getElementById("type").value ; 
} 

