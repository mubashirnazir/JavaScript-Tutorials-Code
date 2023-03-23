// Character counter

const emptyInput = "Please Enter something above";
function charTextFunc() {
    let dummyText = document.getElementById("text").value;
    console.log(typeof(dummyText));
    // if there is nothing in the input it returns npthing in the output
    if(dummyText === ""){
       return
    }
    dummyText = dummyText.replaceAll(" ","" || "  ",""); //replaced all spaces into Empty string
    document.getElementById("displayInputChar").value = dummyText.length;
}


// Words counter 
//string.split() method is converting the string to an Array

function wordTextFunc() { 
    let dummyText = document.getElementById("text").value;
    // if there is nothing in the input it returns npthing in the output
    if(dummyText === ""){
        return
    }
    return document.getElementById("displayInputWord").value = dummyText.split(" ").length;
}





