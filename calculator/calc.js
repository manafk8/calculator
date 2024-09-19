function buttonclick(val){
    document.getElementById("display-bar").value=document.getElementById("display-bar").value+val;

}


function clearScreen(){
    document.getElementById("display-bar").value=""
}

function equalvalue(){
    var text=document.getElementById('display-bar').value
    var result=eval(text)
    document.getElementById('display-bar').value=result
}