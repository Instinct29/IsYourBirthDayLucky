const birthdate = document.querySelector("#date-of-birth");
const luckynumber = document.querySelector("#lucky-number");
const checknumberbutton = document.querySelector(".check-number");

checknumberbutton.addEventListener('click',function getvalues(){
    console.log(birthdate.value,luckynumber.value);
})
