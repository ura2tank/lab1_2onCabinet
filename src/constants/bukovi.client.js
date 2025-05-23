console.log("a");

async function updateAlphabetInHtml() {
    try {
        console.log("Начинаем загрузку данных...");
        const response = await fetch('/constants/data.json');
        console.log("Получен ответ:", response.status);
        
        const data = await response.json();
        console.log("Данные загружены:", data);

        document.title = data.title;

        const nameAlfabet = document.getElementById('name_alfabet');
        const lowercase = document.getElementById('lowercase');
        const uppercase = document.getElementById('uppercase');


        if (nameAlfabet) {
            nameAlfabet.innerHTML = `${data.name_alfabet}`;
        }
        
        if (lowercase) {
            lowercase.innerHTML = `${data.lowercase}`;
        }
        
        if (uppercase) {
            uppercase.innerHTML = `${data.uppercase}`;
        }
    } catch (error) {
        console.error('Ошибка при обновлении HTML:', error);
    }
}


document.addEventListener('DOMContentLoaded', updateAlphabetInHtml); 