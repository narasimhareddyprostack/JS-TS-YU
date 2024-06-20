fetch('https://jsonplaceholder.typicode.com/photos')
.then(resp=>resp.json())
.then(data=>console.log(data.length))