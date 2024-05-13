const content = document.getElementById('content');
const image = document.getElementById('image');
const title = document.getElementById('title');
const btn = document.getElementById('btn')


btn.addEventListener('click', ()=> {
    const userData = JSON.stringify({
        title: title.value,
        content : content.value,
    })

    const formData = new FormData();

    fetch("http://10.92.198.38:8080/feed/post", {
        method: "Post",
        body: userData,
        headers: {"Content-type" : "application/json; charset=UTF-8",
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwidXNlcklkIjoiNjY0MjU0YTY0M2VjYTkzOTE3MTI3YTc4IiwiaWF0IjoxNzE1NjI1MTgyLCJleHAiOjE3MTU2Mzk1ODJ9.ycR3ujQRi5XERQr93Q5XvTOsPAE6ZyJ8n_5duQ7b65U"
        }
    }).then(result => result.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
})