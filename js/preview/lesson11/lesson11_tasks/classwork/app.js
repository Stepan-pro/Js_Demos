
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
).then(res => {
        for (const resKey of res) {
            console.log(resKey);
            let UserId = document.createElement('div')
            let Id = document.createElement('div')
            let Title = document.createElement('div')
            let body = document.createElement('div')
            let allComment = document.createElement('button')
            let HideAllComment = document.createElement('button')

            UserId.textContent = resKey.userId
            Id.textContent = resKey.id
            Title.textContent = resKey.title
            body.textContent = resKey.body
            Title.style.display = 'none'
            body.style.display = 'none'

            allComment.textContent = 'show'
            HideAllComment.textContent = 'hide'

            allComment.addEventListener('click', function () {
                Title.style.display = 'block'
                body.style.display = 'block'
            })

            HideAllComment.addEventListener('click', function () {
                Title.style.display = 'none '
                body.style.display = 'none'
            })


            document.body.append(UserId, Id,allComment,HideAllComment, Title, body)

        }
    }
)