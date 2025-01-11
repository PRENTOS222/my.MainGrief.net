function buyCase(packageName) {
    alert(`Вы выбрали пакет ${packageName}. Оплата временно недоступна.`);
}

function openCase() {
    const rewards = ['100 монет', 'VIP', '200 монет', 'Premium', '500 монет', 'Legend'];
    const result = rewards[Math.floor(Math.random() * rewards.length)];
    document.getElementById('case-result').innerText = `Вы получили: ${result}`;
}