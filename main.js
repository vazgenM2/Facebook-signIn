let links = ["Регистрация", "Вход", "Messenger", "FacebookLite", "Watch", "Люди", "Страницы", "Категории", "Страниц", "Места", "Игры", "Места", "Marketplace", "Facebook", "Pay", "Группы", "Вакансии", "OculusPortal", "Instagram", "Местные", "Благотворительные", "акции", "Услуги", "Центр", "информации", "о", "голосовании", "Информация", "Создать", "рекламу", "Создать", "Страницу", "Разработчикам", "Вакансии", "Конфиденциальность", "Файлы", "cookie", "Выбор", "рекламы", "Условия", "использования", "Справка"]

let ul = document.getElementsByClassName('links-ul')[0]

for (let i of links) {
	let newLink = document.createElement('li')
	let newA = document.createElement('a')
	newA.innerHTML = i

	newLink.appendChild(newA)
	ul.appendChild(newLink)
}