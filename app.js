const express = require('express')
const sequelize = require('./utils/db')
const { usersRouter } = require('./routes/users')
const { songsRouter } = require('./routes/songs')
const app = express()

//Connect database

app.use(express.json())

sequelize.sync().then(()=>{
    console.log('Models created ')
}).catch(err =>{
    console.error(err)
})

app.use('/api/users', usersRouter)
app.use('/api/songs', songsRouter)


app.listen(3001 , ()=>{
    console.log("Server started 3001")
})