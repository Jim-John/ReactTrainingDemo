function fnValidateStartDate()
{
var startDate= document.editClaim.claimStartDate.value;
var pattern =/^([0-9]{2})\/([0-9]{2})\/([0-9]{4})$/;
alert(pattern.test(startDate));
}

function fnClaimNoMaksing()
{
var message = document.getElementById("claimNo").value; //
if (message != "") {
  
    document.getElementById("claimNo").value =
     (
         "(" + message.substring(0,3) + ") " + 
         "-(" +message.substring(3,6)  + ") "+
         "-(" + message.substring(6,10)+") "
    );
    return true;

}

}
function submit()
{
    fnValidateStartDate();
}