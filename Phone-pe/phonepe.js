let form=document.getElementById("form");
let cardNumber=document.getElementById("cardnumber");
let expiryDate=document.getElementById("expirydate");
let cvvNumber=document.getElementById("cvvnum");
let valid=document.getElementById("valid");
let invalid=document.getElementById("invalid");
valid.addEventListener("click",()=>{
    cardNumber.value="0007428032210";
    expiryDate.value="07/30";
    cvvNumber.value="245";
});
invalid.addEventListener("click",()=>{
    cardNumber.value="0003547856541668";
    expiryDate.value="03/27";
    cvvNumber.value="465";
});
let main2=document.getElementById("main2");
let loadingPage=document.getElementById("loading_page");
let transactionComplete=document.getElementById("transaction_complete");
let transactionFailed=document.getElementById("transaction_failed");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("Card no.=",cardNumber.value);
    console.log("exp. Date=",expiryDate.value);
    console.log("CVV no.=",cvvNumber.value);
    main2.style.display="none";
    loadingPage.style.display="block";
        let promise= new Promise((resolve,reject)=>{
            setTimeout(() => {
                if(cardNumber.value=="0007428032210" && expiryDate.value=="07/30" && cvvNumber.value=="245"){
                    resolve(true);
                }
                else{
                    reject(false);
                }
            },2000);
        })
        console.log(promise);
        promise
            .then((resolve)=>{
                setTimeout(() => {
                    loadingPage.style.display="none";
                    transactionComplete.style.display="block";
                },2000);
            })
            .catch((err)=>{
                setTimeout(() => {
                    loadingPage.style.display="none";
                    transactionFailed.style.display="block";
                },2000);
            })
});
let backToHome=document.querySelector(".backtohome");
backToHome.addEventListener("click",()=>{
    transactionComplete.style.display="none";
    main2.style.display="block";
    form.reset();
});
let backtohome=document.querySelector(".backhome");
backtohome.addEventListener("click",()=>{
    transactionFailed.style.display="none";
    main2.style.display="block";
    form.reset();
})
