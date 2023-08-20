let total = 0;

function handleClickBtn(target) {
  const selectedItemsContainer = document.getElementById('selectedItems');
  const itemName = target.parentNode.childNodes[5].innerText;
  const li = document.createElement('h1');
  li.innerText = itemName;
  selectedItemsContainer.appendChild(li);

  const priceString = target.parentNode.childNodes[13].innerText.split(' ')[1];
  const price = parseInt(priceString);
  total += price;
  document.getElementById('greenBoxTotal').innerText = total;
  updateGrandTotal();
}

function updateGrandTotal() {
  const grandTotalElement = document.getElementById('grandTotal');
  grandTotalElement.innerText = total;
}
