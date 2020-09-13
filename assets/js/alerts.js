

function required()
{
var empt = document.getElementById("email").value;
if (empt === "")
{
alert("Please input your E-Mail address");
return false;
}
else 
{
alert('Success! You will now receive our Offers and Updates.');
return true; 
}
}

function thankYouMessage()
{
var projectDescription = document.getElementById("contact:project").value;

if (projectDescription === "")
{
    alert("Please inform us of your project by leaving a description");
    return false;
}
else 
{
alert("Success! Our Agents will contact you as soon as possible.");
return true;
}
}

