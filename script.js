function calculate(){
    const totalAmount = document.getElementById("total-amount");
    const totalInterest = document.getElementById("totalIntAmt");
    const principalInput = document.getElementById("principal");
    const intrateInput = document.getElementById("intrate");
    const yearsInput = document.getElementById("years");

    let principal = Number(principalInput.value);
    let intrate = Number(intrateInput.value / 100);
    let years = Number(yearsInput.value);

    if (principal < 0 || isNaN(principal)) {
        principal = 0;
        principalInput.value = 0;
    }
    if (intrate < 0 || isNaN(intrate)) {
        intrate = 0;
        intrateInput.value = 0;
    }
    if (years < 0 || isNaN(years)) {
        years = 0;
        yearsInput.value = 0;
    }

    const result = principal * Math.pow((1 + intrate), years);
    const totalIntAmt = result - principal;

    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "INR"});
    totalInterest.textContent = totalIntAmt.toLocaleString(undefined, {style: "currency", currency: "INR"});


    // totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "USD"});
    // totalInterest.textContent = totalIntAmt.toLocaleString(undefined, {style: "currency", currency: "USD"});
}










// function calculate(){
//     const totalAmount = document.getElementById("total-amount");
//     const totalInterest = document.getElementById("totalIntAmt");
//     const principalInput = document.getElementById("principal");
//     const intrateInput = document.getElementById("intrate");
//     const yearsInput = document.getElementById("years");

//     let principal = Number(principalInput.value);
//     let intrate =Number(intrateInput.value/100);
//     let years = Number(yearsInput.value);

//     if(principal < 0 || isNaN(principal)){
//         principal = 0;
//         principalInput.value=0;
//     }
//     if(intrate < 0 || isNaN(intrate)){
//         intrate = 0;
//         intrateInput.value=0;
//     }
//     if(years < 0 || isNaN(years)){
//         years = 0;
//         yearsInput.value=0;
//     }

//     const result = principal * Math.pow((1 + intrate/1 ), 1*years);
//     const totalIntAmt = result - principalInput;

//     totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency:"USD"});
//     totalInterest.textContent = totalIntAmt.toLocaleString(undefined, {style:"currency", currency:"USD"});
// }

// function calculateInterest(principal, rate, time) {
//     return (principal * rate * time) / 100;
// }

// // Example usage:
// const principal = 1000; // Principal amount
// const rate = 5; // Interest rate (in percentage)
// const time = 2; // Time period (in years)

// const interestAmount = calculateInterest(principal, rate, time);
// console.log("Interest amount:", interestAmount);
