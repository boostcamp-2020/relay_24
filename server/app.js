const express = require('express');
const app = express();
const cors = require('cors');

const chatRouter = require("./api/chat/chat_router.js");
const userRouter = require("./api/users/users_router.js");

app.use(express.json());
app.use(cors());
app.use("/api/chat", chatRouter)
app.use("/api/", userRouter)

app.listen(80, () => {
	console.log('PORT CHECK')
});
