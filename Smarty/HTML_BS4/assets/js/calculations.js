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

// Residential Function

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

    document.getElementById("lift-cage-num-estimate").value = Math.round(hybTotalNumberofElevator);

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

    document.getElementById("lift-cage-num-estimate").value = Math.round(corpTotalNumberofElevator);

}

//standard service calculation
function calculateTotalStandardEstimatedCost(){
    var totalNumberStandardElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));

    var standardUnitPrice = totalNumberStandardElevatorCage * 7565;
   
    var standardInstallFee = standardUnitPrice * 0.1;
    
    var totalStandardPrice = standardUnitPrice + standardInstallFee;
    
        document.getElementById("unit-price-show").value = Math.round(standardUnitPrice) + "$";

        document.getElementById("install-fee-show").value = Math.round(standardInstallFee) + "$";

        document.getElementById("estimate-cost-show").value = Math.round(totalStandardPrice) + "$";
       
    
}   
//premium service installation
function calculateTotalPremiumEstimatedCost(){
    var totalNumberPremiumElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));
    
    var premiumUnitPrice = totalNumberPremiumElevatorCage * 12345;
    
    var premiumInstallFee = premiumUnitPrice * 0.13;
   
    var totalPremiumPrice = premiumUnitPrice + premiumInstallFee;
    
        document.getElementById("unit-price-show").value = Math.round(premiumUnitPrice) + "$";

        document.getElementById("install-fee-show").value = Math.round(premiumInstallFee) + "$";

        document.getElementById("estimate-cost-show").value =Math.round(totalPremiumPrice) + "$";
        
    
   
}   
// excelium service installation
function calculateTotalExcelEstimatedCost(){
    var totalNumberElevatorCage = Math.round(parseInt(document.getElementById("lift-cage-num-estimate").value));
  
    var exceliumUnitPrice = totalNumberElevatorCage * 15400;
    
    var exceliumInstallFee = exceliumUnitPrice * 0.16;

    var totalExceliumPrice = exceliumUnitPrice + exceliumInstallFee;
 
        document.getElementById("unit-price-show").value = Math.round(exceliumUnitPrice) + "$";

        document.getElementById("install-fee-show").value = Math.round(exceliumInstallFee) + "$";

        document.getElementById("estimate-cost-show").value =Math.round(totalExceliumPrice) + "$";

        
    
}   