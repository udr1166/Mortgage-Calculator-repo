document.getElementById("mortgage-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const loanAmount = parseFloat(document.getElementById("loanAmount").value);
    const interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById("loanTerm").value) * 12;

    // Mortgage formula: M = P[r(1+r)^n] / [(1+r)^n – 1]
    const monthlyPayment = (loanAmount * interestRate * Math.pow(1 + interestRate, loanTerm)) /
                           (Math.pow(1 + interestRate, loanTerm) - 1);

    const totalPayment = monthlyPayment * loanTerm;
    const totalInterest = totalPayment - loanAmount;

    document.getElementById("monthlyPayment").innerText = monthlyPayment.toFixed(2);
    document.getElementById("totalInterest").innerText = totalInterest.toFixed(2);

    document.getElementById("results").classList.remove("hidden");
});
