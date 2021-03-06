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


// Functions

// Residential Function *******

function calculateTotalResCage() 
{
    var resAppNum = parseInt(document.getElementById("input-res-app-number").value);
    var resFloorAppartements = parseInt(document.getElementById("input-res-floor-num").value);
    var resBasementNum = parseInt(document.getElementById("input-res-basement-num").value);

    var totalResNumFloor = resFloorAppartements - resBasementNum;

    var avgAppPerFloor = Math.ceil(resAppNum/totalResNumFloor);
    var resNumberShafts = Math.ceil(avgAppPerFloor/6);
    var resNumberColumns = Math.ceil(totalResNumFloor/20);
    var totalResCages = resNumberShafts * resNumberColumns;
    
    if(isNaN(totalResCages)){
        totalResCages = 0;
    }
  
    document.getElementById("lift-cage-num-estimate").value = totalResCages;
}



// Commercial Functions
function getInputValue(){
    var inputVal = $("#input-com-cages-num").val();
    var numberCage = parseInt(inputVal,10);
    $("#lift-cage-num-estimate").val(numberCage);
    calculateTotalStandardEstimatedCost();
}


$("#input-com-cages-num").on("change", getInputValue);


// Hybrid Function
function calculateTotalHybCage(){
    var hybTotalOccFloor = Math.round(parseInt(document.getElementById("input-hyb-occupant-num").value));
    var hybFloorBuilding =  Math.round(parseInt(document.getElementById("input-hyb-floor-num").value));
    var hybNumBasement = Math.round(parseInt(document.getElementById("input-hyb-basement-num").value)); 
    var totalFloorsAndBasement = hybFloorBuilding + hybNumBasement;
    var totalHybOccupants = hybTotalOccFloor * totalFloorsAndBasement;
    var hybRequiredElevator = totalHybOccupants / 1000;
    var hybNumColumns = totalFloorsAndBasement / 20;
    var hybNumElevatorPerColumns = hybRequiredElevator / hybNumColumns;
    var hybTotalNumberofElevator = hybNumElevatorPerColumns * hybNumColumns;

    document.getElementById("lift-cage-num-estimate").value = Math.ceil(hybTotalNumberofElevator);

}

//Corporate Function
function calculateTotalCorpCage(){
    var totalOccFloor = Math.round(parseInt(document.getElementById("input-corp-occupant-num").value));
    var corpFloorBuilding =  Math.round(parseInt(document.getElementById("input-corp-floor-num").value));
    var corpNumBasement = Math.round(parseInt(document.getElementById("input-corp-basement-num").value)); 
    var totalFloorsAndBasement = corpFloorBuilding + corpNumBasement;
    var totalCorpOccupants = totalOccFloor * totalFloorsAndBasement;
    var corpRequiredElevator = totalCorpOccupants / 1000;
    var corpNumColumns = totalFloorsAndBasement / 20;
    var corpNumElevatorPerColumns = corpRequiredElevator / corpNumColumns;
    var corpTotalNumberofElevator = corpNumElevatorPerColumns * corpNumColumns;

    document.getElementById("lift-cage-num-estimate").value = Math.ceil(corpTotalNumberofElevator);

}

function setDefaultCalculationValue() {
    document.getElementById("unit-price-show").value = "-";
    document.getElementById("install-fee-show").value = "-";
    document.getElementById("estimate-cost-show").value = "-";
}

//standard service calculation
function calculateTotalStandardEstimatedCost(){
    
    setDefaultCalculationValue();

    var totalNumberStandardElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));

    var standardUnitPrice = totalNumberStandardElevatorCage * 7565;
   
    var standardInstallFee = standardUnitPrice * 0.1;
    
    var totalStandardPrice = standardUnitPrice + standardInstallFee;
    
    if( !isNaN(standardUnitPrice) ) {
        document.getElementById("unit-price-show").value = standardUnitPrice.toFixed(2) + "$";
        document.getElementById("install-fee-show").value = standardInstallFee.toFixed(2) + "$";
        document.getElementById("estimate-cost-show").value = totalStandardPrice.toFixed(2) + "$";
    }    
       
    
}   


//premium service installation
function calculateTotalPremiumEstimatedCost(){

    setDefaultCalculationValue();
   
    var totalNumberPremiumElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));
    
    var premiumUnitPrice = totalNumberPremiumElevatorCage * 12345;
    
    var premiumInstallFee = premiumUnitPrice * 0.13;
   
    var totalPremiumPrice = premiumUnitPrice + premiumInstallFee;
   
    if( !isNaN(premiumUnitPrice) ) {
        document.getElementById("unit-price-show").value = premiumUnitPrice.toFixed(2) + "$";

        document.getElementById("install-fee-show").value = premiumInstallFee.toFixed(2) + "$";

        document.getElementById("estimate-cost-show").value =totalPremiumPrice.toFixed(2) + "$";
    }
        
   
}   
// excelium service installation
function calculateTotalExcelEstimatedCost(){

    setDefaultCalculationValue();

    var totalNumberElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));
  
    var exceliumUnitPrice = totalNumberElevatorCage * 15400;
    
    var exceliumInstallFee = exceliumUnitPrice * 0.16;

    var totalExceliumPrice = exceliumUnitPrice + exceliumInstallFee;
 
    if( !isNaN(exceliumUnitPrice) ) {
        document.getElementById("unit-price-show").value = exceliumUnitPrice.toFixed(2) + "$";

        document.getElementById("install-fee-show").value = exceliumInstallFee.toFixed(2) + "$";

        document.getElementById("estimate-cost-show").value =totalExceliumPrice.toFixed(2) + "$";

    }    
        
    
}   
// Reset All Fields on Building Selection Change
function formReset(){
 
document.getElementById("input-res-app-number").value="";
document.getElementById("input-res-floor-num").value="";
document.getElementById("input-res-basement-num").value="";
document.getElementById("input-corp-company-number").value="";
document.getElementById("input-corp-floor-num").value="";
document.getElementById("input-corp-basement-num").value="";
document.getElementById("input-corp-parking-num").value="";
document.getElementById("input-corp-occupant-num").value="";
document.getElementById("input-hyb-business-number").value="";
document.getElementById("input-hyb-floor-num").value="";
document.getElementById("input-hyb-basement-num").value="";
document.getElementById("input-hyb-parking-num").value="";
document.getElementById("input-hyb-occupant-num").value="";
document.getElementById("input-hyb-active-time-num").value="";
document.getElementById("input-com-cages-num").value="";
document.getElementById("input-com-business-number").value="";
document.getElementById("input-com-floor-num").value="";
document.getElementById("input-com-basement-num").value="";
document.getElementById("input-com-parking-num").value="";
document.getElementById("unit-price-show").value="";
document.getElementById("install-fee-show").value="";
document.getElementById("estimate-cost-show").value="";

}