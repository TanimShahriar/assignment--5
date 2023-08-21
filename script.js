let total = 0;

//adding event handler in the card section
function handleClick(target) {

  const selectedItemsContainer = document.getElementById('selectedItems');
  const itemName = target.childNodes[7].innerText;

  console.log(target.childNodes[7].innerText);
  const li = document.createElement('h1');
  const count = selectedItemsContainer.childElementCount;
  li.innerHTML = `${count + 1}.${itemName}`;
  selectedItemsContainer.appendChild(li);

  const priceString = target.childNodes[9].innerText.split(' ')[0];
  console.log(target.childNodes[9].innerText.split(' ')[0]);
  const price = parseFloat(priceString);
  total += price;
  document.getElementById('totalPrice').innerText = total;
  finalTotalPrice();
}

//Enabling and disabling "make purchse" and "apply" button, coupon code input field
function finalTotalPrice() {
  const finalTotalPrice = document.getElementById('finalPrice');
  finalTotalPrice.innerText = total;

  const makePurchaseButton = document.getElementById('makePurchaseButton');
  makePurchaseButton.disabled = total <= 0;

  if (total >= 200) {
    const couponCodeInput = document.getElementById('couponCodeInput');
    couponCodeInput.disabled = false;
  } else {
    const couponCodeInput = document.getElementById('couponCodeInput');
    couponCodeInput.disabled = true;
  }

  if (total > 0) {
    makePurchaseButton.classList.remove('bg-slate-300');
    makePurchaseButton.classList.add('bg-[#E527B2]');
  } else {
    makePurchaseButton.classList.remove('bg-[#E527B2]');
    makePurchaseButton.classList.add('bg-slate-300');
  }

  const applyButton = document.getElementById('applyButton');
  applyButton.disabled = total < 200;
}




// discount area
document.getElementById('applyButton').addEventListener('click', function () {
  const couponCodeInput = document.getElementById('couponCodeInput');
  const couponCode = couponCodeInput.value.trim();
  if (couponCode === 'SELL200') {

    const discountPercentage = 20;
    const discount = (total * discountPercentage) / 100;


    const discountElement = document.getElementById('discountPrice');
    discountElement.innerText = discount.toFixed(2);


    const finalTotalPriceElement = document.getElementById('finalPrice');
    finalTotalPriceElement.innerText = (total - discount).toFixed(2);
  }
});


//Coupon code apply button color enable area

couponCodeInput.addEventListener('input', function () {
  const couponCode = couponCodeInput.value.trim();
  if (couponCode === 'SELL200') {
    applyButton.classList.remove('bg-slate-300');
    applyButton.classList.add('bg-[#E527B2]');
  }
});

// Go home button part and resetting value to zero , clear text area empty and will take me to homepage
document.getElementById('goHomeButton').addEventListener('click', function () {
  total = 0;

  const selectedItemsContainer = document.getElementById('selectedItems');
  selectedItemsContainer.innerHTML = '';

  document.getElementById('totalPrice').innerText = '0';
  document.getElementById('discountPrice').innerText = '0';
  document.getElementById('finalPrice').innerText = '0';
  document.getElementById('couponCodeInput').value = '';

  const modal = document.getElementById('my_modal_1');
  modal.close();
  location.reload();

});

