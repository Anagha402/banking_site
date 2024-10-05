function registeruser(){
    window.location='./register.html'
  }

  function loginuser(){
    window.location='./login.html'
}


function register(){
    let username=document.getElementById('Username').value
    let accno=document.getElementById('accno').value
    let password=document.getElementById('Password').value
    let balance=0;
    userobj={
        User:username,
        accountno:accno,
        Password:password,
        balance:balance
    }
    if(userobj.accountno in localStorage){
        alert("User already registered")
    }
    else if(userobj.User=="" || userobj.accountno=="" || userobj.Password==""){
        alert("please fill all fields")
    }
    else{
        window.localStorage.setItem(userobj.accountno,JSON.stringify(userobj))
        
        alert("Registration successfull")
        window.location='./login.html'
        
    }
    

}

function login(){
    let Accountno=document.getElementById('Accno').value
    let Password=document.getElementById('password').value
   
    if(Accountno in localStorage){
     let out=JSON.parse(localStorage.getItem(Accountno))
     if(Accountno=="" || Password==""){
        alert("Please fill the fields")
     }
 
    else if(Accountno == out.accountno && Password==out.Password){
          alert("login Successfull")
          window.location='./mainpage.html'
        // console.log(Accountno);

         }
    else{
         alert("please type the correct account number and password")
         }


    }
    else{
        alert("user not registered")
    }
    
     
 }

 function deposite() {
    let amount = document.getElementById('Amount').value;
    let Accno = document.getElementById('Accountno').value;

    
    if (Accno in localStorage) {
 
        let Accountdetails = JSON.parse(localStorage.getItem(Accno));

       
        let balanceAmount = parseInt(Accountdetails.balance) || 0; 
        
      
        let depositAmount = parseInt(amount);

        
        if (isNaN(depositAmount) || depositAmount <= 0) {
            alert("Deposit amount should be a positive number.");
        } else {
          
            balanceAmount += depositAmount;
            Accountdetails.balance = balanceAmount;

        
            localStorage.setItem(Accno, JSON.stringify(Accountdetails));

      
            document.getElementById('depositresult').innerHTML = `Your current balance is ${balanceAmount}`;
        }
    } else {
        alert("Incorrect Account number.");
    }
}

function withdraw() {
    let withdrawAmount = document.getElementById('withdrawAmount').value
    let withdrawAccno = document.getElementById('WithdrawAcc').value

    // console.log(Account);
    if (withdrawAccno in localStorage) {
        let Account = JSON.parse(localStorage.getItem(withdrawAccno))
        if (withdrawAmount <= Account.balance) {
            // console.log(typeof(withdrawAmount));//doubt idh string aanenkil eghene aan if contitionil adh work aavunne
            alert(`Bank balance before withdrawal ${Account.balance}`)
            alert(`Withdraw amount ${withdrawAmount}`)
            Account.balance -= withdrawAmount
            // console.log(Account.balance);
            localStorage.setItem(withdrawAccno, JSON.stringify(Account))

            Withdrawresult.innerHTML = `Your current balance is ${Account.balance}`
            alert("Your amount  is successfully withdrawn")
            alert(`After withdrawal your account balance is ${Account.balance}`)
        }
        else{
            alert("insufficient balance")
        }
    }
    else{
        alert("incorrect account number")
    }
}


let form = document.querySelector('.form');
let logoutButton = form.querySelector('button');


function logout() {
    localStorage.clear();
    window.location = './index.html';
}


logoutButton.addEventListener('click', (e) => {
    e.preventDefault();
    logout();
});