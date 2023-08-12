const discord = require('@splitscript.js/discord')
const scheduler = require('@splitscript.js/scheduler')


discord.listen(
	'OTMyMjU3MDk5Mjg5ODc4NTI4.G_-NPB.RvgpmD4eLbsKYN-K29-3zm3g_WppBFV5ysVaI8',
	{
		intents: 2,
	}
);

async function a() {
	await discord.commands.create(
		{
			type: 1,
			name: 'embed',
			description: 'Create an embed',
			options: [
				{
					type: 3,
					name: 'title',
					description: 'title of the embed',
					required: true,
				},
				{
					type: 3,
					name: 'description',
					description: 'description of the embed',
					required: true,
				},
				{
					type: 3,
					name: 'color',
					description: 'color of the embed',
					choices: [
						{
							name: 'red',
							value: '0xFF6666',
						},
						{
							name: 'orange',
							value: '0xF8B654',
						},
						{
							name: 'yellow',
							value: '0xEFDC61',
						},
						{
							name: 'green',
							value: '0x90EE90',
						},
						{
							name: 'blue',
							value: '0x8F9EFB',
						},
						{
							name: 'purple',
							value: '0x5346A5',
						},
					],
					required: true,
				},
				{
					type: 3,
					name: 'image',
					description: 'image in the embed',
				},
			],
		},
		'906313801366921286'
	);
}
a();
