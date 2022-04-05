
//Result of this code will be even Number or Odd Number  depending on the random number which inserted by user.


var num = window.prompt("Put Your Number");

if ( num%2 == 0)
{
    document.getElementById("calc").innerHTML = "evenNumber";
}
    else{
        document.getElementById("calc").innerHTML = "oddNumber";
}
;