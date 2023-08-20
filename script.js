let total = 0;


function handleClick(target) {

  const selectedItemsContainer = document.getElementById('selectedItems');
  // const itemName = target.parentNode.childNodes[3].childNodes[7].innerText;
  const itemName = target.childNodes[7].innerText;

  console.log(target.childNodes[7].innerText);
  const li = document.createElement('p');
  li.innerText = itemName;
  selectedItemsContainer.appendChild(li);

  const priceString = target.childNodes[9].innerText.split(' ')[0];
  console.log(target.childNodes[9].innerText.split(' ')[0]);
  const price = parseFloat(priceString);
  total += price;
  document.getElementById('totalPrice').innerText = total;
  finalTotalPrice();
}


function finalTotalPrice() {
  const finalTotalPrice = document.getElementById('finalPrice');
  finalTotalPrice.innerText = total;

  const makePurchaseButton = document.getElementById('makePurchaseButton');
  makePurchaseButton.disabled = total <= 0;

  const applyButton = document.getElementById('applyButton');
  applyButton.disabled = total < 200;
}





