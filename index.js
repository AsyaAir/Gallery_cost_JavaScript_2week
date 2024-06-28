// Объявление функции для вывода сообщения в консоль
function showMessage() {
    console.log("Я учу JavaScript!");
}
 // Вызов функции после её определения.
showMessage();

// Функция для расчета общей стоимости покупки
// Функция calculateTotalPrice принимает два аргумента (количество товаров и цена за единицу товара). 
// Значения по умолчанию - 5 для количества и 15000000 для цены.
function calculateTotalPrice(quantity = 5, price = 15000000) {
    // Получаем значения из полей ввода. Если значения не переданы, используются значения по умолчанию.
    const quantityInput = document.getElementById('quantity').value || quantity;
    const priceInput = document.getElementById('price').value || price;
    // Рассчитываем общую стоимость покупки, умножая количество товаров на их цену. 
    const totalPrice = quantityInput * priceInput;
    // Форматируем общую стоимость с использованием toLocaleString('ru-RU'), чтобы добавить разделители тысяч.
    const formattedTotalPrice = totalPrice.toLocaleString('ru-RU');
    // // Показываем результат расчёта с помощью alert.
    // alert(`Cost of purchase: ${formattedTotalPrice} rubles`);
    // Выводим результат на страницу
    document.getElementById('result').textContent = `Cost of purchase: ${formattedTotalPrice} rubles`;
}
