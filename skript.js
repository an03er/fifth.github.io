function openPopup() {
  var popup = document.querySelector('.popup');
  popup.style.display = 'block';
}

function closePopup() {
    var popup = document.querySelector('.popup');
    popup.style.display = 'none';
}

function calc() {
    var type_flowers = document.getElementById("type_flowers");
    var count = document.getElementById("count");
    var result = document.getElementById("result"); 

    var price = 0;
    price += parseInt(type_flowers.options[type_flowers.selectedIndex].value);
    price = parseInt(count.value) * price;
    result.innerHTML = price;
}
