// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(posts=> posts.json())
//     .then(posts=> {
//         for (const post of posts) {
//
//             let divPost = document.createElement('div');
//             divPost.classList.add('post')
//
//             let userIDDiv = document.createElement('div');
//             userIDDiv.innerText = `userId : ${post.userId}`;
//             let idDiv = document.createElement('div');
//             idDiv.innerText = `id : ${post.id}`;
//             let titleDiv = document.createElement('div');
//             titleDiv.innerText = `title : ${post.title}`;
//             let bodyDiv = document.createElement('div');
//             bodyDiv.innerText = `body : ${post.body}`;
//
//             divPost.append(userIDDiv, idDiv, titleDiv, bodyDiv);
//             document.body.append(divPost);
//
//             divPost.style.width = '19%';
//             document.body.style.display = 'flex';
//             document.body.style.width = '100%';
//             document.body.style.flexWrap = 'wrap';
//             document.body.style.rowGap = '15px';
//             document.body.style.columnGap = '1%';
//         }
//     })


//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//         for (const comment of comments) {
//             let divComment = document.createElement('div');
//             divComment.classList.add('comment');
//             let postId = document.createElement('div');
//             postId.innerText = `postId : ${comment.postId}`;
//             let id = document.createElement('div');
//             id.innerText = `id : ${comment.id}`;
//             let name = document.createElement('div');
//             name.innerText = `name : ${comment.name}`;
//             let email = document.createElement('div');
//             email.innerText = `email : ${comment.email}`;
//             let body = document.createElement('div');
//             body.innerText = `body : ${comment.body}`;
//             let hr = document.createElement('hr');
//
//             divComment.append(postId, id, name, email, body, hr);
//             document.body.append(divComment);
//         }
//     });