function User_Cart(num) {
    let infoCart = {
        balance: 100,
        transactionLimit: 100,
        historyLogs: [],
        key: num
    }

    return {
        getCardOptions: function () {
            return infoCart
        },

        putCredits: function (addSomeMoney) {
            infoCart.balance = addSomeMoney
            let history = {
                transaction: `Top up the card`,
                credits: addSomeMoney
            }
            infoCart.historyLogs.push(history)
        },

        takeCredits: function (takeSomeMoney) {
            if (takeSomeMoney > infoCart.balance) {
                console.log('insufficient funds')
                let history = {
                    transaction: 'the operation was rejected. insufficient funds in the account'
                }
                infoCart.historyLogs.push(history)
            } else {
                infoCart.balance -= takeSomeMoney
                let history = {
                    transaction: `Getting a loan for the amount `,
                    credits: takeSomeMoney
                }
                infoCart.historyLogs.push(history)
            }
        },
        setTransactionLimit: function (TransactionLimit) {
            infoCart.transactionLimit = TransactionLimit
            let history = {
                transaction: `Update transaction limit`,
                credits: TransactionLimit
            }
            infoCart.historyLogs.push(history)
        },

        transferCredits: function (numberCredit, user) {

           if (numberCredit>infoCart.balance && numberCredit>infoCart.transactionLimit){
               let history = {
                   transaction: `transaction prohibited.`
               }
               infoCart.historyLogs.push(history);
           } else {
               user.getCardOptions().balance +=numberCredit*0.95
               infoCart.balance -= numberCredit
               let history = {
                   transaction: `transaction amount`,
                   credits: numberCredit*0.95
               }
               infoCart.historyLogs.push(history);
               user.getCardOptions().historyLogs.push(history)
           }


        }
    }

}

class UserAccount {
    constructor(name, cards) {
        this.name = name
        this.cards = []
    }

    addCard(){
        if(this.cards.length<3){
            let cart = User_Cart().getCardOptions()
            this.cards.push(cart)
        } else {
            console.log('max card');
        }
    }

    getCardByKey(num){
        if(num>1 && num<3){
            let cards = User_Cart(num)
            cards.getCardOptions().key = num
            return cards
        }
    }

    
}

let Cart1 = new User_Cart(2)
let Cart2 = new User_Cart(1)

Cart2.putCredits(2000)

Cart2.takeCredits(50)

Cart2.setTransactionLimit(2000)

Cart2.transferCredits(100, Cart1)

let User1 = new UserAccount('Bob')

console.log(Cart2.getCardOptions());
console.log(Cart2.getCardOptions());


User1.getCardByKey(1)
User1.addCard()



console.log(User1);
