// Investment Accounts Assignment Start Code

// HTML Variables
let containerEl = document.getElementById("container");
let outputEl = document.getElementById("output");
let goBtnEl = document.getElementById("go");
let menuEl = document.getElementById("menu");

// Global Variable
let accounts = []
for (let i = 1; i <= 200; i++) {
    accounts.push(Math.random() * 5000)
}
let maxAmount = 5000


// Display Data
drawArray();

function drawArray() {
    let outputStr = "";
    let divHeight;
    for (let i = 0; i < accounts.length; i++) {
        divHeight = (accounts[i] / maxAmount) * 600; // Scale accounts to fit in array visualizer container
        outputStr += `<div style="height:${divHeight}px"></div>`;
    }
    containerEl.innerHTML = outputStr;
}

// Main Menu & Go Button
goBtnEl.addEventListener("click", mainMenu);

function mainMenu() {
    // Get value of menu select element
    let selection = menuEl.value;

    // Take action based on menu selection
    if (selection === "count-range") {
        countRange();
    } else if (selection === "donor") {
        generousDonor();
    } else if (selection === "hacker") {
        hackerAttack();
    } else if (selection === "stats") {
        investmentStats();
    } else if (selection === "add") {
        addAccount();
    } else if (selection === "remove-low") {
        removeLow();
    } else if (selection === "robin-hood") {
        robinHood();
    }

    // Redraw array to show any changes
    drawArray();
}

function percentage(partialValue, totalValue) {
    return (100 * partialValue) / totalValue;
}

// ******************************************************
// MENU SELECTION FUNCTIONS
// ******************************************************
function countRange() {
    // Output the number of accounts with amounts between $2,000 and $4,000, inclusive
    outputEl.innerHTML = "Count accounts with 2000 to 5000";
    let results = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i] > 2000 && accounts[i] < 4000) { results++ }
    }
    alert("There are " + results + " accounts between $2,000 and $4,000")
    outputEl.innerHTML = "Count Range";
}

function generousDonor() {
    // A generous donor has decided to give $500 to every investment
    // account that has less than $2000. 
    // Modify the investment account array to apply this donation.
    // Output the total amount of money that was donated.
    let results = 500
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i] < 2000) {
            accounts[i] += 500
        }
    }
    alert("The toal amount of money donated is " + results + " .")
}

function hackerAttack() {
    // A hacker steals 5% from every account.
    // Modify the investment account array to apply this theft.
    // Output the total amount that was stolen.
    for (let i = 0; i < accounts.length; i++) {
        accounts[i] -= 5
        if (accounts[i] < 1)
            accounts[i] += 5
        outputEl.innerHTML = "Hacker Attack";
    }
}

function investmentStats() {
    // Output the minimum account amount, the maximum account amount
    // and the average account amount.
    var max = accounts[0];
    var min = accounts[0];
    var sum = accounts[0];
    for (var i = 1; i < accounts.length; i++) {
        if (accounts[i] > max) {
            max = accounts[i];
        }
        if (accounts[i] < min) {
            min = accounts[i];
        }
        sum = sum + accounts[i];
    }
    alert('max= ' + max + ', min= ' + min + ', avg= ' + sum / accounts.length);
    outputEl.innerHTML = "Investment Stats";
}

function addAccount() {
    // Prompt for a new account amount and add this to the invesment account
    // array. Output a confirmation that a new account was added with an
    // opening amount of _______.
    accounts.push(2500);
    alert("A new account has been made with a balance of 2500. ")
    outputEl.innerHTML = "Add Account";
}

function removeLow() {
    // Remove all accounts that are below $500.
    // Output how many accounts were removed.
    let results = 0;
    for (let i = accounts.length; i > -1; i--) {
        if (accounts[i] < 500) {
            accounts.splice(i, 1)
        } { results++ }
    }
    alert("The total ammount of accounts removed = " + results + " .")
    outputEl.innerHTML = "Remove Low Accounts";
}

function robinHood() {
    let money = 399;
    let results = 0;
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i] > 4000) {
            accounts[i] -= 400
        } { results++ }
    }

    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i] < 1000)
            accounts[i] += 400
    } { money++ }

    alert("Over " + results + " accounts have received money. Each account has recieved over " + money + " dollars.")
    outputEl.innerHTML = "Robin Hood";
}