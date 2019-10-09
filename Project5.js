function main() {
    words = ["AFGHANISTAN", "ALGERIA", "ARGENTINA", "BANGLADESH", "BRAZIL", "BURMA",
                 "CANADA", "CHINA", "COLUMBIA", "CONGO", "EGYPT", "ETHIOPIA", "FRANCE",
                 "GERMANY", "GHANA", "INDIA", "INDONESIA", "IRAN", "IRAQ", "ITALY",
                 "JAPAN", "KENYA", "MALAYSIA", "MEXICO", "MOROCCO", "NEPAL", "NIGERIA",
                 "NORTHKOREA", "PAKISTAN", "PERU", "PHILIPPINES", "POLAND", "RUSSIA",
                 "SAUDIARABIA", "SOUTHAFRICA", "SOUTHKOREA", "SPAIN", "SUDAN", "TAIWAN",
                 "TANZANIA", "THAILAND", "TURKEY", "UGANDA", "UKRAINE", "UNITEDKINGDOM",
                 "UNITEDSTATES", "UZBEKISTAN", "VENEZUELA", "VIETNAM", "YEMEN"];
    print(words);
    black.onchange = changeColor;
    white.onchange = changeColor;
    blue.onchange = changeColor;
    selectFont.onchange = changeFont;
    lengthButton.onclick = filterAll;
    choiceN.onchange = filterAll;
    choiceA.onchange = filterAll;
    choiceO.onchange = filterAll; 
    }
  
function print(array){
    countriesList.innerHTML = "<p>";
    for(var i = 0; i < array.length; i++){
        countriesList.innerHTML += array[i] + " ";
    }
    countriesList.innerHTML += "</p>";
    
}

function filterAll(){
    var workingArray= [];
    for (var i = 0; i < words.length; i++){
        workingArray.push(words[i]);
    }
    var min = Number(minimum.value);
    var max = Number(maximum.value);
    workingArray = filterByLength(workingArray,min,max);
    if (choiceN.checked){
        workingArray = filterByLetter(workingArray, "N");
    }
    if (choiceA.checked){
        workingArray = filterByLetter(workingArray, "A");
    }
    if (choiceO.checked){
        workingArray = filterByLetter(workingArray, "O");
    }
    print(workingArray);
}
    
function changeColor(){
    if (black.checked){
        countriesList.style.color = "black";
    }
    if (white.checked){
        countriesList.style.color = "white";
    }
    if (blue.checked){
        countriesList.style.color = "blue";
    }
}

function changeFont(){
    if (fontArial.selected){
        countriesList.style.fontFamily = "arial";
    }
    if (fontTimes.selected){
        countriesList.style.fontFamily = "times";
    }
    if (fontCourier.selected){
        countriesList.style.fontFamily = "courier";
    }
}

function filterByLength(originalList, min, max){
    var newList1 = [];
    for (var i=0; i<originalList.length; i++){
        if (originalList[i].length>=min && originalList[i].length<=max){
            newList1.push(originalList[i]);
        }
    }
    return newList1;
}

function filterByLetter(originalList, letter){
    var newList2 = [];
    for (var i=0; i<originalList.length; i++){
        if(originalList[i].indexOf(letter)<0){
            newList2.push(originalList[i]);
        }
    }
    return newList2;
}