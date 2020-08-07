const generateChat = () => {
    const outerDiv = document.createElement('div')
    const picDiv = document.createElement('div')
    const textDiv = document.createElement('div')

    
}

const sendChat = () => {
    const test = document.getElementById('test')
    const input = document.getElementById('input-box').value
    document.getElementById('input-box').value = ''
    test.innerText += `${input}\n`
    test.scrollTop = test.scrollHeight
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