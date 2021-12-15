// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let item = document.getElementsByTagName("body")
// for (const itemElement of item[0].children) {
//     itemElement.addEventListener("click", function () {
//         this.style.border = '1px solid black'
//         console.log(`список класів - ${itemElement.classList[0]}`)
//         console.log(`список ід - ${itemElement.id}`)
//         console.log(`ширина - ${itemElement.style.width}`)
//         console.log(`висота - ${itemElement.style.height}`)
//         console.log(`Назва тегу - ${itemElement.attributes.style.ownerElement.localName}`)
//         console.log('------------------------------------------')
//     })
// }


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

// let div = document.createElement('div');
//
// div.style.width = '150px'
// div.style.height = 'fit-content'
// div.style.border = '1px solid black'
// div.style.position = 'relative'
// div.style.left = '0'
// div.style.display = 'none'
//
//
// let item = document.getElementsByTagName("body")
// for (const itemElement of item[0].children) {
//     itemElement.addEventListener("mousedown", function () {
//         this.style.border = '1px solid black'
//         div.textContent = `список класів - ${itemElement.classList[0]}
//         список ід - ${itemElement.id}
//         ширина - ${itemElement.style.width}
//         висота - ${itemElement.style.height}
//         Назва тегу - ${itemElement.attributes.style.ownerElement.localName}`
//         div.style.display = 'block'
//         itemElement.appendChild(div)
//
//     })
//     itemElement.addEventListener('mouseup', function () {
//         div.style.display = 'none'
//     })
// }

// // -- взять массив пользователей
// let usersWithAddress = [
//     {id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// // - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// // 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// // 2й - оставляет старше 29 лет включительно
// // 3й - оставляет тех у кого город киев
// // Данные выводить в документ
// //
//
// let h1 = document.createElement('div')
// let checkFalse = document.createElement('INPUT')
// let check29 = document.createElement('INPUT')
// let checkKiev = document.createElement('INPUT')
// let Content = document.createElement('div')
// let CheckBox = document.createElement('div')
// let filter = document.createElement('div')
// let checkText = document.createElement('div')
//
// checkFalse.setAttribute('type', 'checkbox')
// check29.setAttribute('type', 'checkbox')
// checkKiev.setAttribute('type', 'checkbox')
//
// let checkText1 = checkText.cloneNode()
// let checkText2 = checkText.cloneNode()
//
// h1.style.background = '#32a852'
// h1.style.color = '#fbfcfb'
// h1.style.fontSize = '25px'
// h1.style.height = '50px'
// h1.style.paddingTop = '10px'
// h1.style.fontFamily = 'cursive'
// h1.style.textAlign = 'center'
// h1.style.borderRadius = '10px'
// h1.textContent = 'User filter'
//
// checkText.textContent = '1. Oтфильтровывает пользователей со статусом false'
// checkText1.textContent = '2. Oставляет старше 29 лет включительно'
// checkText2.textContent = '3. Oставляет тех у кого город киев'
//
// CheckBox.style.background = ''
// CheckBox.style.padding = '10px'
//
// filter.style.width = '500px'
// filter.style.marginLeft = '50%'
// filter.style.transform = 'translateX(-50%)'
// filter.style.border = '1px solid black'
// filter.style.borderRadius = '10px'
//
// for (let usersWithAddress1 = 0; usersWithAddress1 < usersWithAddress.length; usersWithAddress1++) {
//
//     let name = document.createElement('div')
//     let age = document.createElement('div')
//     let status = document.createElement('div')
//     let city = document.createElement('div')
//     let street = document.createElement('div')
//     let number = document.createElement('div')
//     let UserAddress = document.createElement('div')
//     let UserInfo = document.createElement('div')
//
//     UserAddress.style.border = '1px solid black'
//     UserAddress.style.margin = '4px'
//     UserAddress.style.borderRadius = '5px'
//
//     UserInfo.style.padding = '5px'
//
//     name.style.background = '#32a852'
//     name.style.color = '#fbfcfb'
//     name.style.textAlign = 'center'
//     name.style.borderRadius = '5px'
//     name.style.height = '30px'
//     name.style.paddingTop = '5px'
//
//     name.textContent = usersWithAddress[usersWithAddress1].name
//     age.textContent = `age - ${usersWithAddress[usersWithAddress1].age}`
//     status.textContent = `status - ${usersWithAddress[usersWithAddress1].status}`
//     city.textContent = `city - ${usersWithAddress[usersWithAddress1].address.city}`
//     street.textContent = `street - ${usersWithAddress[usersWithAddress1].address.street}`
//     number.textContent = `number - ${usersWithAddress[usersWithAddress1].address.number}`
//     let isChange
//
//     checkFalse.addEventListener('change', function (event) {
//
//         isChange = event.target.checked
//
//         if (isChange && usersWithAddress[usersWithAddress1].status !== true) {
//             UserAddress.classList.add("changeFalse")
//         } else {
//             UserAddress.classList.remove("changeFalse")
//         }
//     })
//
//     checkKiev.addEventListener('change', function (event) {
//
//         isChange = event.target.checked
//
//         if (isChange && usersWithAddress[usersWithAddress1].address.city !== 'Kyiv') {
//             UserAddress.classList.add('changeKiev')
//         } else {
//             UserAddress.classList.remove('changeKiev')
//         }
//     })
//
//     check29.addEventListener('change', function (event) {
//
//         isChange = event.target.checked
//
//         if (isChange && usersWithAddress[usersWithAddress1].age <= 29) {
//             UserAddress.classList.add('changeAge')
//         } else {
//             UserAddress.classList.remove('changeAge')
//         }
//     })
//
//     Content.appendChild(UserAddress)
//     UserAddress.append(name, UserInfo)
//     UserInfo.append(age, status, city, street, number)
// }
//
// CheckBox.append(checkText, checkFalse, checkText1, check29, checkText2, checkKiev)
// filter.append(h1, CheckBox, Content)
// document.body.appendChild(filter)

//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне

// //         Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// // *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан


// let p = document.createElement('p')

// p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos magni officiis pariatur, provident quas sint voluptate voluptatibus! Accusamus animi debitis ducimus, ea ipsa, labore laborum molestiae quasi repudiandae, suscipit voluptatem.'
//
// p.onclick = function addBold() {
//     const selection = window.getSelection().getRangeAt(0);
//     const selectedText = selection.extractContents();
//     const span = document.createElement("span");
//     span.classList.toggle("bold-span");
//     span.appendChild(selectedText);
//     selection.insertNode(span);
// }
//
// document.body.appendChild(p)