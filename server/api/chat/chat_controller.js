let analysisKey = "5543323700649639825"
//const { show, create, photoview } = require("./chat_service");
const { DataArray } = require("../../config/data.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function httpGet(theUrl){
	var xmlHttp = new XMLHttpRequest();
        xmlHttp.open( "GET", theUrl, false );
        xmlHttp.send( null );
        return xmlHttp//responseText;
}

module.exports = {
	show: (req, res) => {
		var chatArray = []
		for(let i=0;i<DataArray.chatArr.length;i++) {	
			chatArray.push({ "id": i + 1, "name" : DataArray.users[DataArray.chatArr[i]['userid'].toString()]['name'], "chat" : DataArray.chatArr[i].chat, "mind": DataArray.chatArr[i].mind })
		}
		return res.json ({
			success: 1,
			data: chatArray
		});
	},
	create: (req, res) => {
		const body = req.body;
		let urlanalysis = "http://api.adams.ai/datamixiApi/omAnalysis"
		urlanalysis = urlanalysis + "?query=" + body.chat + "&type=1&key=" + analysisKey
        let mind = httpGet(urlanalysis);	
		DataArray.chatArr.push({"id": DataArray.chatArr.length + 1, "userid": 1, "chat": body.chat, "mind": JSON.parse(mind['responseText'])['return_object']['Result'][0][1]})
		return res.json ({
            success: 1,
            data: DataArray.chatArr
        });
	}
	/*
	analysis: (req, res) => {
		const chatID = req.params.id;
		
		let Arr = chatArr.filter(elem=>elem.id == chatID)
		
		let mindArr = [{"id": Arr[0].id, "userid": Arr[0].userid, "chat": Arr[0].chat, "mind": JSON.parse(mind['responseText'])['return_object']['Result'][0][1]}]
		return res.json ({
                        success: 1,
                        data: mindArr[0]
                });
	}*/
}
