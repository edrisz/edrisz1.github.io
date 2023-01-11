var database = [
		{

username: "andrie",
password: "supersecret"
		}

];

var neewsfeed = [

{
	username: "Bobby",
	timeline: "So tired from all that"
},
{

	username: "Sally",
	timeline: "javascript is soooo cooool!"
}
];



var usernamePrompt = prompt ("namet chi ast?");
var passwordPrompt = prompt ("Kodet chi ast?");


function singIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log (neewsfeed);

} else {
	alert("Boro gomsho kodet ghalat bud");
}
}
singIn(usernamePrompt, passwordPrompt);



