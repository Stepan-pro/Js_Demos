// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts').then(res =>
    res.json()
).then(res => {
        for (const resKey of res) {
            console.log(resKey);
            let UserId = document.createElement('div')
            let Id = document.createElement('div')
            let Title = document.createElement('div')

            UserId.textContent = resKey.userId
            Id.textContent = resKey.id
            Title.textContent = resKey.title

            document.body.append(UserId, Id, Title)

        }
    }
)

// 2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments').then(res =>
    res.json()
).then(res => {
        for (const resKey of res) {
            console.log(resKey);
            let UserId = document.createElement('div')
            let Id = document.createElement('div')
            let Title = document.createElement('div')
            let Email = document.createElement('div')
            let body = document.createElement('div')

            UserId.textContent = resKey.postId
            Id.textContent = resKey.id
            Title.textContent = resKey.name
            Email.textContent = resKey.email
            body.textContent = resKey.body

            document.body.append(UserId, Id, Title, Email, body)

        }
    }
)