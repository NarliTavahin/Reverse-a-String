function Submit(){  
    var str = document.getElementById("name").value;  
    document.getElementById("reverse").value = reverseString(str);  
    }  
 

function reverseString(str) {
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
    

