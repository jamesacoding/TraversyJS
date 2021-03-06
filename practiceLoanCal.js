document.getElementById('loan-form').addEventListener('submit', calculateResults);

function calculateResults(e) {
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('montly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterst = document.getElementById('total-interest');

    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;

    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal * x * calculatedInterest) / (x-1);




    e.preventDefault();
}