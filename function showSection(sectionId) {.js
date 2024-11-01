function showSection(sectionId) {
    document.querySelectorAll('.section').forEach(section => section.style.display = 'none');
    document.getElementById(sectionId).style.display = 'block';
}

function generateSignal() {
    const signals = ["Sinal 1", "Sinal 2", "Sinal 3"];
    const randomSignal = signals[Math.floor(Math.random() * signals.length)];
    document.getElementById("signalDisplay").textContent = randomSignal;
}
