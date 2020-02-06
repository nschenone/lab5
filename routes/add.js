var data = require("../data.json");

exports.addFriend = function (request, response) {
	var new_friend = {
		"name": request.query.name,
		"description": request.query.description,
		"imageURL": "http://lorempixel.com/400/400/people/"
	}

	data.friends.push(new_friend);

	response.render('index', data);
}