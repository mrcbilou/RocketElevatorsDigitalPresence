// Field Values 

// RESIDENTIAL

//residential number of appartements in the building
var resNumberAp = $("#rnab").val();
// residential number of floors in the building 
var resFloorAp = $("#rnfb").val();
// residential number of basements in the building
var resBaseAp = $("#rnbb").val();

//CORPORATE

// number of separate tenant companies
var corpNumCompanies = $("#cnstc").val();
// number of floors in the building
var corpFloorBuilding = $("#cnfb").val();
// number of basement in the building
var corpNumBasement = $("#cnbb").val();
// number of total available parking space
var corpParkSpace = $("#caps").val();
// maximum number of occupants per floor
var corpMaxOccup = $("#cnof").val();

// HYBRID

// number of distinct businesses
var hybDisBusiness = $("#hdbb").val();
// number of floors in the building
var hybNumFloor = $("#hnfb").val();
// number of basements in the building
var hybNumBasement = $("#hnbb").val();
// total available parking space
var hybParkSpace = $("#hpsb").val();
// maximum number of occupants per floor
var hybMaxOccup = $("#hofb").val();
// total hours of activity in the building
var hybTotalActivityHours = $("#hhab").val();

//calculations variables

var multipleOfSix = 6;


// Functions

// Residential Functions

// calculating number of shafts based on average doors per floor rnfb



var numberColumn = Math.floor(resFloorAp / 20) + 1;

function resCalcEst(){
    var resNumberAp = document.getElementById("rnab").value;
    var resFloorAp = document.getElementById("rnfb").value;
    var numberColumn = Math.floor(resFloorAp / 20) + 1;
    var numShafts = Math.ceil(resNumberAp / 6);
    var resCageTotal = parseInt(numShafts,10)*parseInt(numberColumn,10);

  
    

    document.getElementById("cage-num-estimate").value(resCalcEst);
    console.log(resCalcEst);
if (numShafts >= 2) {
    Math.ceil(numShafts);

}

return numShafts*numberColumn;

}


















// Commercial Functions
function getInputValue(){
    var inputVal = $("#com-cage-num").val();
    var numberCage = parseInt(inputVal,10);
    $("#cage-num-estimate").val(numberCage);
}


$("#com-cage-num").on("change", getInputValue);





