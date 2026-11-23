const mainPhoto = document.getElementById('mainPhoto');
document.querySelectorAll('.thumb').forEach((button, index) => {
  if (index === 0) button.classList.add('active');
  button.addEventListener('click', () => {
    mainPhoto.src = button.dataset.src;
    document.querySelectorAll('.thumb').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
  });
});

document.getElementById('donationForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const amount = Number(document.getElementById('amount').value);
  const message = document.getElementById('formMessage');
  if (!Number.isFinite(amount) || amount < 1) {
    message.textContent = 'Введите сумму пожертвования больше нуля.';
    return;
  }
  // Здесь подключается платёжный сервис или обработчик благотворительного фонда.
  message.textContent = `Сумма пожертвования: ${new Intl.NumberFormat('ru-RU').format(amount)} ₽. Для приёма платежей подключите платёжный сервис.`;
});
