console.log("a");

async function updateAlphabetInHtml() {
    try {
        // console.log("загрузкf");
        const response = await fetch('/constants/data.json');
        // console.log(response.status);
        
        const data = await response.json();
        // console.log(data);

        Object.entries(data.elements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.innerHTML = value;
            }
        });
    } catch (error) {
        console.error('Ошибка при обновлении HTML:', error);
    }
}

document.addEventListener('DOMContentLoaded', updateAlphabetInHtml); 