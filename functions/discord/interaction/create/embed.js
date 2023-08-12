const discord = require('@splitscript.js/discord');

module.exports = async function (event) {
	if (event.type != 2) return;
	if (event.data.name != 'embed') return;

	if (!event.member.roles.includes('1041750623441399829'))
		return discord.responses.create(event.id, event.token, {
			type: 'CHANNEL_MESSAGE_WITH_SOURCE',
			data: {
				content: 'Must be owner to run this command',
			},
		});

	await discord.messages.create(
        event.channel_id,
		{
			embeds: [
				{
					title: event.data.options[0].value,
					description: event.data.options[1].value.replace(/\\n/g, `
                         `),
					color: parseInt(event.data.options[2].value),
					image: {
						url: event.data.options[3]?.value,
					},
				},
			],
		},
	);
};
