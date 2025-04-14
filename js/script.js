
// Встановлюємо поточний рік у футері
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Анімація терміналу
const terminal = document.getElementById('terminalOutput');
const lines = [
    "> Ласкаво просимо до кабінету інформатики",
    "> Сучасне комп'ютерне обладнання",
    "> Інтерактивні навчальні матеріали",
    "> Останнє оновлення: " + new Date().toLocaleDateString('uk-UA'),
    "> Готово до роботи!",
    "> _"
];

let currentLine = 0;
let currentChar = 0;
let isDeleting = false;

function typeWriter() {
    if (currentLine < lines.length) {
        const line = lines[currentLine];
        
        if (!isDeleting && currentChar <= line.length) {
            terminal.innerHTML = lines.slice(0, currentLine).join('<br>') + '<br>' + 
                line.substring(0, currentChar) + '<span class="cursor"></span>';
            currentChar++;
            setTimeout(typeWriter, currentChar === line.length ? 1000 : 50 + Math.random() * 50);
        } else if (isDeleting && currentChar >= 0) {
            terminal.innerHTML = lines.slice(0, currentLine).join('<br>') + '<br>' + 
                line.substring(0, currentChar) + '<span class="cursor"></span>';
            currentChar--;
            setTimeout(typeWriter, 30);
        } else {
            isDeleting = !isDeleting;
            if (!isDeleting) currentLine++;
            setTimeout(typeWriter, 500);
        }
    } else {
        currentLine = 0;
        currentChar = 0;
        isDeleting = false;
        terminal.innerHTML = '';
        setTimeout(typeWriter, 1000);
    }
}

// Запускаємо анімацію через 1 секунду
setTimeout(typeWriter, 1000);
