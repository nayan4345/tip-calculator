const billInput = document.getElementById("bill-input");
const tipPercents = document.getElementById("tip-percents");
const shareInput = document.getElementById("share-input");
// Display
const tipValue = document.getElementById("tip-value");
const billValue = document.getElementById("bill-value");
const sharedValue = document.getElementById("shared-value");
const calculate = document.getElementById("calculate");

let value = 0;

billInput.value = 0;
shareInput.value = 1;

const tipPercentChildren = Array.from(tipPercents.children);

tipPercentChildren.forEach((tipPercent) => {
    tipPercent.addEventListener("click", () => {
        tipPercent.classList.toggle("active");
        value = Number(tipPercent.dataset.amount);
        tipPercentChildren.forEach((tipPercent) => {
            if (Number(tipPercent.dataset.amount) !== value) {
                if (tipPercent.classList.contains("active")) {
                    tipPercent.classList.remove("active");
                }
            }
        });
    });
});

calculate.addEventListener("click", () => {
    tipAmount = Number(billInput.value) * (value / 100);
    totalBill = Number(billInput.value) + tipAmount;
    sharedBill = totalBill / Number(shareInput.value);

    tipValue.textContent = `€${tipAmount.toFixed(2)}`;
    billValue.textContent = `€${totalBill.toFixed(2)}`;
    sharedValue.textContent = `€${sharedBill.toFixed(2)}`;
});
