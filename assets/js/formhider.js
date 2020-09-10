

  function showDiv(select){
    if(select.value==0){
        document.getElementById("residential-form-group").style.display = "none";
    }
    if(select.value==1){
     document.getElementById("residential-form-group").style.display = "block";
    } else{
     document.getElementById("residential-form-group").style.display = "none";
    }  
    if(select.value==2){
        document.getElementById("commercial-form-group").style.display = "block";
    } else{
        document.getElementById("commercial-form-group").style.display = "none";
    }
    if(select.value==3){
            document.getElementById("corporate-form-group").style.display = "block";
    } else{
        document.getElementById("corporate-form-group").style.display = "none";
     }  
     if(select.value==4){
        document.getElementById("hybrid-form-group").style.display = "block";
    } else{
        document.getElementById("hybrid-form-group").style.display = "none";
    }  
}


    
 



 
 

 


 
     