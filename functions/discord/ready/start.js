module.exports = (event) => {
	console.log(
		`Logged in and online as ${event.user.username}#${event.user.discriminator}`
	);
};
