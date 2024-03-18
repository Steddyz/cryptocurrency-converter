const wrapper = document.querySelector(".wrapper-inner__value");
const button = document.querySelector(".btn");
const bitcoinAmountInput = document.querySelector(".wrapper-inner__input");
const ethereumAmountInput = document.querySelector(".wrapper-inner__input");
const wrapperCrypto = document.querySelector(".wrapper-inner__values");

function convertValue() {
  const fromCrypto = document.querySelector(".from-crypto").value;
  console.log(fromCrypto);

  let bitcoinAmount = parseFloat(bitcoinAmountInput.value);
  let ethereumAmount = parseFloat(ethereumAmountInput.value);

  if (
    isNaN(bitcoinAmount) ||
    bitcoinAmount <= 0 ||
    isNaN(ethereumAmount) ||
    ethereumAmount <= 0
  ) {
    alert("Enter the correct amount of crypto");
    return;
  }

  if (fromCrypto == "BTC") {
    fetch("https://api.coincap.io/v2/assets/bitcoin")
      .then((response) => response.json())
      .then((data) => {
        const bitcoinPrice = parseFloat(data.data.priceUsd);

        const convertedAmount = bitcoinAmount * bitcoinPrice;

        wrapper.innerHTML = `${bitcoinAmount} <i class="fa-brands fa-bitcoin"></i> to  ${convertedAmount.toFixed(
          1
        )} <i class="fa-solid fa-dollar-sign"></i>`;
      })
      .catch((error) => {
        alert("Error: ", error);
      });
  }
  if (fromCrypto == "ETH") {
    fetch("https://api.coincap.io/v2/assets/ethereum")
      .then((response) => response.json())
      .then((data) => {
        const ethereumPrice = parseFloat(data.data.priceUsd);
        const convertedAmount = ethereumAmount * ethereumPrice;

        wrapper.innerHTML = `${ethereumAmount} <i class="fa-brands fa-ethereum"></i> to: ${convertedAmount.toFixed(
          1
        )} <i class="fa-solid fa-dollar-sign"></i>`;
      })
      .catch((error) => {
        alert("Error: ", error);
      });
  }
}

button.addEventListener("click", (e) => {
  e.preventDefault();
  convertValue();
});

// : ${bitcoinPrice.toFixed(
// 2
// )}
