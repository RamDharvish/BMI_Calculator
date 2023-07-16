

function bmicalc(){
    h=document.getElementById("height").value 
    w=document.getElementById("weight").value 
    var bmi 
    bmi=w/(h/100*h/100)
    if(bmi<10){
        document.getElementById("screen").innerHTML=bmi+ "is underweighted"
    }else if(bmi >10 && bmi<=20){
        document.getElementById("screen").innerHTML=bmi+ "is normal weight"

    }else{
        document.getElementById("screen").innerHTML=bmi+ "is overweighted"
    }
}

function clearFields() {
    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("screen").innerHTML = "";
}
