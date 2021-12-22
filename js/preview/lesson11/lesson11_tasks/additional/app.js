// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

// address: {street: 'Kulas Light', suite: 'Apt. 556', city: 'Gwenborough', zipcode: '92998-3874', geo: {…}}
// company: {name: 'Romaguera-Crona', catchPhrase: 'Multi-layered client-server neural-net', bs: 'harness real-time e-markets'}
// email: "Sincere@april.biz"
// id: 1
// name: "Leanne Graham"
// phone: "1-770-736-8031 x56442"
// username: "Bret"
// website: "hildegard.org"


fetch(' https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(res => {
        for (const re of res) {
            console.log(re);
            let userInfo = document.createElement('div')
            let emailInfo = document.createElement('div')
            let email = document.createElement('button')
            let username = document.createElement('button')
            let usernameInfo = document.createElement('div')
            let moreInfo = document.createElement('button')
            let hideInfo = document.createElement('button')

            email.textContent = 'email'
            emailInfo.textContent = re.email
            username.textContent = 'username'
            usernameInfo.textContent = re.username
            moreInfo.textContent = ` ${re.name} `
            hideInfo.textContent = `more information`

            moreInfo.style.margin = '5px'
            moreInfo.style.display = 'block'

            emailInfo.style.display = 'none'
            usernameInfo.style.display = 'none'

            userInfo.style.display = 'none'
            userInfo.style.width = '300px'
            userInfo.style.height = 'fit-content'
            userInfo.style.border = '1px solid black'
            userInfo.style.borderRadius = '10px'
            userInfo.style.margin = '10px'
            userInfo.style.padding = '10px'

            moreInfo.addEventListener('click', function () {
                    userInfo.style.display = 'block'
                    moreInfo.style.display = 'none'
                }
            )

            email.addEventListener('click', function () {
                    emailInfo.style.display = 'block'
                }
            )

            username.addEventListener('click', function () {
                    usernameInfo.style.display = 'block'
                }
            )

            hideInfo.addEventListener('click', function () {
                    userInfo.style.display = 'none'
                    moreInfo.style.display = 'block'
                }
            )

            document.body.append(moreInfo, userInfo)
            userInfo.append(username,usernameInfo, email, emailInfo, hideInfo)
        }
    })