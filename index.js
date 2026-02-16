const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let user =[]
let counter = 1;

//path = GET /user
app.get('/users', (req, res) => {
res.json(users);
});

//path = POST /user
app.post('/user', (req, res) => {
let user = req.body;
user.id = counter
counter += 1
user.push(user);
res.json({
message: 'User added successfully',
user: user });
})

//path = PUT /user/:id
app.patch('/user/:id', (req, res) => {
let id = req.params.id;
let updatedUser = req.body;
//หา user จาก id
let selectedIndex = user.findIndex(user => user.id == id)

//update user นั้น
if (updatedUser.name) {
user[selectedIndex].name = updatedUser.name
}
user[selectedIndex].name = updatedUser.name || user[selectedIndex].name
user[selectedIndex].age = updatedUser.age || user[selectedIndex].age

//ส่ง response กลับไปว่า update ที่เลือกสำเร็จแล้ว

res.json({
message: 'User updated successfully',
data : {
user: user[selectedIndex],
indexUpdated: selectedIndex
}
})
})

//path = DELETE /user/:id
app.delete('/user/:id', (req, res) => {
let id = req.params.id;
let selectedIndex = user.findIndex(user => user.id == id)
if (selectedIndex !== -1) {
user.splice(selectedIndex, 1)
res.json({
message: 'User deleted successfully',
data : {
indexDeleted: selectedIndex
}
})
} else {
res.status(404).json({
message: 'User not found'
})
}
})

app.listen(port, () => {
console.log(`Server is running on port ${port}`);
});
