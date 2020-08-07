

const IMAGE_SRC =
  "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260";

const emotionMap = {
  기쁨: "😄",
  신뢰: "🤗",
  공포: "😱",
  기대: "🤩",
  놀라움: "🤭",
  슬픔: "😭",
  혐오: "😖",
  분노: "🤬"
};

const datas = [
  {
    id: 1,
    userid: 3,
    username: "crong",
    img: IMAGE_SRC,
    chat: "안녕하세요",
    mind: "신뢰"
  },
  {
    id: 2,
    userid: 1,
    username: "JK",
    img: IMAGE_SRC,
    chat: "asdf",
    mind: "기쁨"
  }
];

const generateOtherChat = (imgSrc, otherName, msg, mind) => {
  const outerDiv = document.createElement("div");
  const picDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  const textSpan = document.createElement("span");
  const tooltipSpan = document.createElement("span");

  outerDiv.classList.add("a-chat");
  outerDiv.classList.add("other-chat");
  picDiv.classList.add("pic");
  textDiv.classList.add("chat-text");
  tooltipSpan.classList.add("tooltip");

  const otherImg = document.createElement("img");
  otherImg.src = imgSrc;
  otherImg.alt = "profile image";

  const otherUserName = document.createElement("p");
  otherUserName.classList.add("chat-user");
  otherUserName.innerText = otherName;

  textSpan.innerText = msg;
  tooltipSpan.innerText = emotionMap[mind];

  outerDiv.appendChild(picDiv);
  outerDiv.appendChild(textDiv);
  picDiv.appendChild(otherImg);
  picDiv.appendChild(otherUserName);
  textDiv.appendChild(textSpan);
  textDiv.appendChild(tooltipSpan);

  return outerDiv;
};

const generateMyChat = (msg, mind) => {
  const outerDiv = document.createElement("div");
  const textDiv = document.createElement("div");
  const textSpan = document.createElement("span");
  const tooltipSpan = document.createElement("span");

  outerDiv.classList.add("a-chat");
  outerDiv.classList.add("my-chat");
  textDiv.classList.add("chat-text");
  tooltipSpan.classList.add("tooltip");

  textSpan.innerText = msg;
  tooltipSpan.innerText = emotionMap[mind];

  outerDiv.appendChild(textDiv);
  textDiv.appendChild(textSpan);
  textDiv.appendChild(tooltipSpan);

  return outerDiv;
};

// 입력 받았을 때
// const sendChat = () => {
//   const chat = document.getElementById("chat");
//   const input = document.getElementById("input-box").value;
//   document.getElementById("input-box").value = "";
//   chat.appendChild(generateMyChat(input));
//   chat.scrollTop = chat.scrollHeight;
// };

const sendChat = (msg, mind) => {
  chat.appendChild(generateMyChat(msg, mind));
  chat.scrollTop = chat.scrollHeight;
};

const receiveChat = (imgSrc, name, msg, mind) => {
  chat.appendChild(generateOtherChat(imgSrc, name, msg, mind));
  chat.scrollTop = chat.scrollHeight;
};

const httpGet = theUrl => {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return xmlHttp.responseText;
};

const getPic = (id) => new Promise((resolve, reject) => {
  fetch("http://localhost/api/pic/" + String(id))
  .then(res => res.json())
  .then(picjson => {
    console.log(picjson);
    resolve(picjson.data[0].image)
  });
})

window.onload = () => {
  fetch("http://localhost/api/chat")
    .then(res => res.json())
    .then(chats => {
      console.log(chats);
      chats.data.forEach(async data => {

        let picURL = await getPic(data.id)
        // 자신의 id === 1 일 때
        if (data.id !== 1) {
          receiveChat(picURL, data.name, data.chat, data.mind);
        } else {
          sendChat(data.chat, data.mind);
        }
      });
    });

  // datas.forEach(data => {
  //   // 자신의 id === 1 일 때
  //   if (data.id !== 1) {
  //     receiveChat(IMAGE_SRC, data.username, data.chat, data.mind);
  //   } else {
  //     sendChat(data.chat, data.mind);
  //   }
  // });

  document.getElementById("send").addEventListener("click", () => {
    sendChat();
  });

  document.getElementById("input-box").addEventListener("keypress", e => {
    if (e.key === "Enter") {
      sendChat();
    }
  });
};
