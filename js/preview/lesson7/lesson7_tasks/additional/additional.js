//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// }
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
``

class Additional {
    constructor(name, username, email, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        this.name = name
        this.username = username
        this.email = email
        this.address = {
            street: `${street}`,
            suite: `${suite}`,
            city: `${city}`,
            zipcode: `${zipcode}`,
            geo: {
                lat: `${lat}`,
                lng: `${lng}`

            }
        }
        this.phone = phone
        this.website = website

        this.company={
            name: `${nameCompany}`,
            catchPhrase: `${catchPhrase}`,
            bs: `${bs}`
        }

    }
}

let a = new Additional('Vasia', 'Pupkin', 'VasiaPupkin@gmail.net',
    'lvivska', 2, 'lviv', '92998-3874', -37.3159, 81.1496,
    'hildegard.org', '1-770-736-8031 x56442','Romaguera-Crona',
    'Multi-layered client-server neural-net','harness real-time e-markets')
console.log(a);


//
// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
//
// Таким чином описати теги
// -a
// -div
// -h1
// -span
// -input
// -form
// -option
// -select
// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }

class TagTitle {
    constructor(titleOfTag, action, titleOfAttr, actionOfAttr, titleOfAtt, actionOfAtt) {
        this.titleOfTag = titleOfTag
        this.action = action
        this.attrs = [
            {
                titleOfAttr: `${titleOfAttr}`,
                actionOfAttr: `${actionOfAttr}`
            },    {
                titleOfAttr: `${titleOfAtt}`,
                actionOfAttr: `${actionOfAtt}`
            }
        ]
    }

}
let id = new TagTitle('id', 'Задает стилевой идентификатор — уникальное имя элемента, которое используется для изменения его стиля')
let div = new TagTitle('div', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого',
    'align', 'Задает выравнивание содержимого тега',
    'title', 'Добавляет всплывающую подсказку к содержимому')
let h1 = new TagTitle('h1', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную',
    'align', 'Определяет выравнивание заголовка')
let span = new TagTitle('span', 'Тег <span> предназначен для определения строчных элементов документа',
    'accesskey','Позволяет получить доступ к элементу с помощью заданного сочетания клавиш.',
    'class,', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.')
let input = new TagTitle('input', 'Тег <input> является одним из разносторонних элементов формы',
    'accesskey','Переход к элементу с помощью комбинации клавиш',
    'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов')
let form = new TagTitle('form', 'Тег <form> устанавливает форму на веб-странице',
    'action', 'Адрес программы или документа',
    'accept-charset', 'Устанавливает кодировку, в которой сервер может принимать и обрабатывать данные')
let option = new TagTitle('option', 'Тег <option> определяет отдельные пункты списка',
    'selected', 'Заранее устанавливает определенный пун',
    'value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов')
let select = new TagTitle('select', 'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
    'size','Количество отображаемых строк списка.',
    'tabindex', 'Определяет последовательность перехода между элементами при нажатии на клавишу Tab')


console.log(id);
console.log(div);
console.log(h1);
console.log(span);
console.log(input);
console.log(form);
console.log(option);
console.log(select);