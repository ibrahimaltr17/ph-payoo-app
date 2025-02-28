function convertInnerTextByID(id){
    let textOfID=document.getElementById(id).innerText;
    let convertedText=parseInt(textOfID);
    return convertedText;
}
function convertValueByID(id){
    let valueOfID=document.getElementById(id).value;
    let convertedValue=parseInt(valueOfID);
    return convertedValue;
}
function updatedBalance(id,value){
    document.getElementById(id).innerText=value;
}

function displayStatus(id,status){
    document.getElementById(id).style.display=status;
}
