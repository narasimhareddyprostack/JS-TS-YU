/* Desc API: USER Dummy Data Api
API URL: https://jsonplaceholder.typicode.com/users
Method Type:GET
Access Type:Public
Req Field:None
 */
let users_url='https://jsonplaceholder.typicode.com/users'
fetch(users_url)
.then(resp=>resp.json())
.then(data=>console.log(data.length))