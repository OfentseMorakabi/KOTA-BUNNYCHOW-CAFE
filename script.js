document.getElementById('orderForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const price = document.getElementById('price').value;
  const ingredients = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
    .map(cb => cb.value);

  const summary = `${name} ordered a R${price} Kota with: ${ingredients.length > 0 ? ingredients.join(', ') : 'No ingredients selected'}`;

  document.getElementById('orderSummary').textContent = summary;
  document.getElementById('confirmation').classList.remove('hidden');

  console.log("New Order:", { name, price, ingredients });
  alert("Order sent to Ofentse Bunnychow Café!");
  this.reset();
});
