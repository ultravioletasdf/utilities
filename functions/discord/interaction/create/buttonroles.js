const discord = require('@splitscript.js/discord');
module.exports = async function (event) {
	if (event.type != 3) return;
	if (!event.data.custom_id.startsWith('role')) return;
	const role_id = event.data.custom_id.slice(4);
        
	try {
		if (event.member.roles.includes(role_id)) {
			let res = await discord.members.roles.remove(
				'906313801366921286',
				event.member.user.id,
				role_id
			);
			let interaction = await discord.responses.create(
				event.id,
				event.token,
				{
					type: 4,
					data: {
						content: `removed role <@&${role_id}>`,
						flags: 1 << 6,
					},
				}
			);

			if (res.code) throw new Error(JSON.stringify(res, null, 2));

			if (interaction.code) throw new Error(JSON.stringify(res, null, 2));
		} else {
			let res = await discord.members.roles.add(
				'906313801366921286',
				event.member.user.id,
				role_id
			);
			if (res.code) throw new Error(JSON.stringify(res, null, 2));

			let interaction = await discord.responses.create(
				event.id,
				event.token,
				{
					type: 4,
					data: {
						content: `added role <@&${role_id}>`,
						flags: 1 << 6,
					},
				}
			);
			if (interaction.code) throw new Error(JSON.stringify(res, null, 2));
		}
	} catch (e) {
		let interaction = await discord.responses.create(
			event.id,
			event.token,
			{
				type: 4,
				data: {
					content: `failed to add role`,
					flags: 1 << 6,
				},
			}
		);
		console.log(interaction);
		throw e;
	}
};
