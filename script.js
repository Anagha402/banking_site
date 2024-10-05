 //1. go to register page
function registerPage(){
    window.location="./register.html";
}
  // go to login page
function loginPage(){
    window.location="./login.html";
}
//2. register page
function register(){
    //get values from user in input fields
    let username=document.getElementById("uname").value
    let accountNumber=document.getElementById("reg_acno").value
    let password=document.getElementById("reg_pswd").value

    //object for taking in new user details
    const userobject={
        Name: username,
        Accountno: accountNumber,
        Password: password,
        Balance: 0
    };
    //check if user already exist in local storage or not
    if(userobject.Accountno in localStorage || userobject.Password in localStorage){
        alert("Account already exist")
    }//check for empty fields
    else if(userobject.Name == '' || userobject.Accountno == '' || userobject.Password == ''){
        alert("Empty fields not allowed")
    }else{
        
        
        //take in details of new as key value pairs taking Accountno as the unique key
        window.localStorage.setItem(userobject.Accountno,JSON.stringify(userobject))
        alert("Registration Successful")
        window.location="./login.html"
       
    }
}
//3. login page



function login(){
    
   //actual login
    let acn=log_acno.value
    let psw=log_pswd.value

    if(acn in localStorage){//checked if the unique key Accountno is already present in local storage
        
        let userobject=JSON.parse(localStorage.getItem(acn))
         if(psw===userobject.Password){
             // Store the logged-in username in localStorage for later use
             localStorage.setItem('loggedInUser', userobject.Name);

            alert("Login successful")
            window.location="./mainpage.html"

            
            
         }else if(psw === ""){
            alert("Empty fields not allowed")
         }
         else{
            alert("Incorrect Password")
         }
        

    }else if(acn === ""){
        alert("Empty fields not allowed")
    }else{
        alert("User not regsitered or invalid account number")
    }
}

//4. mainpage

function deposit(){
    
    let amountDeposit =parseInt(document.getElementById("dep_amnt").value) ;//parseFloat or parseInt is used to make the default string as integers
    /* When you retrieve amount from the input element using document.getElementById("amnt").value, it is a string by default. Adding a string to a number results in string concatenation instead of numeric addition. You need to explicitly convert the amount to a number.
    */
    
    let AcNo=document.getElementById("main_acno").value;

    if(AcNo in localStorage){
        let userobject=JSON.parse(localStorage.getItem(AcNo));
        if(isNaN(amountDeposit) || amountDeposit<=0){//isNan used to check if integer values are empty or not
            alert("Values cannot be empty or negative")

        }else{
            
            userobject.Balance+=amountDeposit;//200+100=300//if parseInt is not used it will be 200300 after two deposits
            localStorage.setItem(AcNo, JSON.stringify(userobject));  // Update localStorage //to get updated value of each account
            alert("Amount added successfully")
            
            dep_balance.innerHTML=`<p style="color: brown;font-size:30px;font-weight:900"">Your current balance is ${userobject.Balance}</p>`

        }

    }else if(AcNo === ""){
        alert("Empty fields not allowed")
    }else{
        alert("User not regsitered or invalid account number")
    }


}

function withdraw(){
    let amountWithdraw=parseInt(document.getElementById("wd_amnt").value);
    let accWd=document.getElementById("wd_acno").value

    if(accWd in localStorage){
        let userobject=JSON.parse(localStorage.getItem(accWd))
        if(isNaN(amountWithdraw) || amountWithdraw<=0){//isNan used to check if integer values are empty or not
            alert("Values cannot be empty or negative")
        }else if(amountWithdraw > userobject.Balance){
            alert("Insufficient amount in account")

        }else{
            alert("Bank balance before withdrawal:" +userobject.Balance)
            alert("Withdrawal amount:" +amountWithdraw)
            userobject.Balance-=amountWithdraw;
            localStorage.setItem(accWd,JSON.stringify(userobject));//update local storage
            wd_balance.innerHTML=`<p style="color: brown;font-size:30px;font-weight:900">Your current balance is ${userobject.Balance}</p>`
        }

    }else if(accWd === ""){
        alert("Empty fields not allowed")
    }else{
        alert("User not regsitered or invalid account number")
    }



}


//logout
function logout(){
    window.localStorage.clear();
    window.location="index.html"
}







