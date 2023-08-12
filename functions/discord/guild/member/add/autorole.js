const discord = require('@splitscript.js/discord');
module.exports = async function (event) {
	const roles = [];
	if (event.user.bot) roles.push('906476242071592980');
	else roles.push('172556926381457409');
	console.log(roles);

	for (let role of roles) {
		await discord.members.roles.add(
			'906313801366921286',
			event.user.id,
			role
		);
	}
};
