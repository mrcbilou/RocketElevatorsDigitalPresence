

  function showDiv(select){
    if(select.value==0){
        document.getElementById("residential-form-group").style.display = "none";
        document.getElementById("lift-cage-num-estimate").value="";
    }
    if(select.value==1){
     document.getElementById("residential-form-group").style.display = "block";
     document.getElementById("lift-cage-num-estimate").value="";
    } else{
     document.getElementById("residential-form-group").style.display = "none";
    }  
    if(select.value==2){
        document.getElementById("commercial-form-group").style.display = "block";
        document.getElementById("lift-cage-num-estimate").value="";
    } else{
        document.getElementById("commercial-form-group").style.display = "none";
    }
    if(select.value==3){
            document.getElementById("corporate-form-group").style.display = "block";
            document.getElementById("lift-cage-num-estimate").value="";
    } else{
        document.getElementById("corporate-form-group").style.display = "none";
     }  
     if(select.value==4){
        document.getElementById("hybrid-form-group").style.display = "block";
        document.getElementById("lift-cage-num-estimate").value="";
    } else{
        document.getElementById("hybrid-form-group").style.display = "none";
    }  
}


    
 



 
 

 


 
     