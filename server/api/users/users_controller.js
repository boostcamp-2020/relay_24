//const { photoview } = require("./chat_service");
const { DataArray } = require("../../config/data.js");

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

module.exports = {
	photoview: (req, res) => {
		const body = req.params.id;
		let Arr = DataArray.userImage.filter(elem=>elem.userid == body)
		return res.json ({
			success: 1,
			data: Arr
		});
	}
}
