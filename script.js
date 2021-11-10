const birthdate = document.querySelector("#date-of-birth");
const luckynumber = document.querySelector("#lucky-number");
const checknumberbutton = document.querySelector(".check-number");
const resultbox = document.querySelector("#result");
checknumberbutton.addEventListener('click', checkBirthdateIsLucky);

function comparevalues(sum,luckynumber){
     if(sum%luckynumber===0){
        //  resultbox.value="yayah Your BirthDay is Lucky 😊✔️"
        resultbox.innerText="yayah Your BirthDay is Lucky 😊✔️"
     }
     else{
        //  resultbox.value="Not lucky!lets create our own luck 🔥"
        resultbox.innerText="Not lucky!lets create our own luck 🔥"
    }
}
function checkBirthdateIsLucky(){
    const date = birthdate.value;
    const sum = calculatesum(date);
    if(sum&&luckynumber.value)
    comparevalues(sum,luckynumber.value)
    else{
        // resultbox.value = "please enter both fields 👽 ❓  "
        resultbox.innerText="please enter both fields 👽 ❓  "
    }

}
function calculatesum(date){
    date = date.replaceAll("-","")
    let sum = 0;
    for(var i = 0 ; i<date.length; i++){
    sum = sum + Number(date.charAt(i))
    }
    return sum;
}


   
