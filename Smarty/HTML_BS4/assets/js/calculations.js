// Field Values 

// RESIDENTIAL

//residential number of appartements in the building
var resNumberAp = parseInt(document.getElementById("input-res-app-number").value);
// residential number of floors in the building 
var resFloorAp = parseInt(document.getElementById("input-res-floor-num").value);
// residential number of basements in the building
var resBaseAp = parseInt(document.getElementById("input-res-basement-num").value);

//CORPORATE

// number of separate tenant companies
var corpNumCompanies =  parseInt(document.getElementById("input-corp-company-number").value);
// number of floors in the building
var corpFloorBuilding =  parseInt(document.getElementById("input-corp-floor-num").value);
// number of basement in the building
var corpNumBasement = parseInt(document.getElementById("input-corp-basement-num").value);
// number of total available parking space
var corpParkSpace = parseInt(document.getElementById("input-corp-parking-num").value);
// maximum number of occupants per floor
var corpMaxOccup = parseInt(document.getElementById("input-corp-occupant-num").value);

// HYBRID

// number of distinct businesses
var hybDisBusiness = parseInt(document.getElementById("input-hyb-business-number").value);
// number of floors in the building
var hybNumFloor = parseInt(document.getElementById("input-hyb-floor-num").value);
// number of basements in the building
var hybNumBasement = parseInt(document.getElementById("input-hyb-basement-num").value);
// total available parking space
var hybParkSpace = parseInt(document.getElementById("input-hyb-parking-num").value);
// maximum number of occupants per floor
var hybMaxOccup = parseInt(document.getElementById("input-hyb-occupant-num").value);
// total hours of activity in the building
var hybTotalActivityHours = parseInt(document.getElementById("input-hyb-active-time-num").value);

// commercial number of lift cages
var comCagesNumber = parseInt(document.getElementById("input-com-cages-num").value);

//calculations variables

var multipleOfSix = 6;


// Functions

// Residential Functions

// calculating number of shafts based on average doors per floor rnfb


let roundResCageNum = Math.round(parseInt(document.getElementById("input-res-app-number").value/6));
let numFloorColumns = Math.round(parseInt(document.getElementById("input-res-floor-num").value/20)+1);




let resTotalCageNum = roundResCageNum * numFloorColumns;





function calculateTotalResCage() 
{
    var resCageNum = Math.round(parseInt(document.getElementById("input-res-app-number").value/6));
    var numFloorColumns =  Math.round(parseInt(document.getElementById("input-res-floor-num").value/20)+1);

    document.getElementById("lift-cage-num-estimate").value = resCageNum * numFloorColumns;
}















// Commercial Functions
function getInputValue(){
    var inputVal = $("#input-com-cages-num").val();
    var numberCage = parseInt(inputVal,10);
    $("#lift-cage-num-estimate").val(numberCage);
}


$("#input-com-cages-num").on("change", getInputValue);




