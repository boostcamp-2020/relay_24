/* <div class="a-chat other-chat">
            <div class="pic">
                <img src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="profile picture">
                <p class="chat-user">user name</p>
            </div>
            <div class="chat-text">
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </div>
        </div>

        <div class="a-chat my-chat">
            <div class="chat-text">
                안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요
            </div>
        </div> */

const IMAGE_SRC = 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'

const generateOtherChat = (imgSrc, otherName, msg) => {
    const outerDiv = document.createElement('div')
    const picDiv = document.createElement('div')
    const textDiv = document.createElement('div')

    outerDiv.classList.add('a-chat')
    outerDiv.classList.add('other-chat')
    picDiv.classList.add('pic')
    textDiv.classList.add('chat-text')

    const otherImg = document.createElement('img')
    otherImg.src = imgSrc
    otherImg.alt = 'profile image'

    const otherUserName = document.createElement('p')
    otherUserName.classList.add('chat-user')
    otherUserName.innerText = otherName

    textDiv.innerText = msg

    outerDiv.appendChild(picDiv)
    outerDiv.appendChild(textDiv)
    picDiv.appendChild(otherImg)
    picDiv.appendChild(otherUserName)

    return outerDiv
}

const generateMyChat = (msg) => {
    const outerDiv = document.createElement('div')
    const textDiv = document.createElement('div')

    outerDiv.classList.add('a-chat')
    outerDiv.classList.add('my-chat')
    textDiv.classList.add('chat-text')

    textDiv.innerText = msg

    outerDiv.appendChild(textDiv)

    return outerDiv
}

const sendChat = () => {
    const chat = document.getElementById('chat')
    const input = document.getElementById('input-box').value
    document.getElementById('input-box').value = ''
    chat.appendChild(generateMyChat(input))
    chat.scrollTop = chat.scrollHeight
}

const receiveChat = (imgSrc, name, msg) => {
    chat.appendChild(generateOtherChat(imgSrc, name, msg))
    chat.scrollTop = chat.scrollHeight
}

window.onload = () => {
    document.getElementById('send').addEventListener('click', () => {
        sendChat()
    })

    document.getElementById('input-box').addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendChat()
        }
    })
}