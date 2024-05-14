const content = document.getElementById('content');

const title = document.getElementById('title');
const btn = document.getElementById('btn')


btn.addEventListener('click', ()=> {
    
    // const userData = JSON.stringify({
    //     title: title.value,
    //     content : content.value,
    // })
    const image = document.getElementById('image');
    const formData = new FormData();

    formData.append('image', image.files[0]);
    formData.append('title', title.value);
    formData.append('content', content.value);

    console.log(title.value)
    console.log(content.value)
    
    const userData = JSON.stringify({
        title : title,
        content : content,
        image : formData.get('image')
    })


    fetch("http://10.92.198.38:8080/feed/post", {
        method: "Post",
        body: formData,
        headers: {
            'Authorization': 'Bearer ' + "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvYW9AZ21haWwuY29tIiwidXNlcklkIjoiNjY0MjU0YTY0M2VjYTkzOTE3MTI3YTc4IiwiaWF0IjoxNzE1NzA0OTU3LCJleHAiOjE3MTU3MTkzNTd9.meC29AB4xiTIpDykhJrkULSW5_QqmIs1lJpr9MjuU18"
        },
        
    }).then(result => result.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
})