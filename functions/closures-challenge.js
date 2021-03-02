function ATM(acctNum) {
    let balance = 0;
    return{
    deposits: function(depositAmount) {
        if(depositAmount > 0) {
            balance += depositAmount;
            return depositAmount + ' was successfully added to your balance.';
        } else {
            return 'Your deposit must be greater than 0.';
        }
    },
    withdrawals: function(withdrawAmount) {
        if(withdrawAmount > 0) {
            if(balance - withdrawAmount < 0) {
            return 'Your withdrawal amount is too large. You have ' + balance + ' available to withdraw.';
            } else {
                balance -= withdrawAmount;
                return 'Here is your withdrawal of ' + withdrawAmount + '. Please take your money from the slot.';
            }
        } else {
            return 'Withdrawal amount must be greater than 0.'
        }
    },
    getAccountNum: function() {
        return acctNum;
    },
    getBalance: function() {
        return balance;
    }
}
}

let myAccount = ATM('1234');
console.log(myAccount.deposits(23));
console.log(myAccount.deposits(-10));
console.log(myAccount.withdrawals(400));
console.log(myAccount.withdrawals(5));
console.log(myAccount.getAccountNum('1234'));
console.log(myAccount.getBalance(350));
