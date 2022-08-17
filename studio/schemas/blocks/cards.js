export default {
	name: "cards",
	type: "object",
	title: "Featured Cards",
	fields: [
		{
			name: "smallHeading",
			type: "string",
			title: "Small Heading",
		},
		{
			name: "heading",
			type: "string",
			title: "Big Heading",
		},
		{
			name: "cards",
			title: "Featured Cards",
			type: "array",
			of: [
				{
					type: "object",
					name: "card",
					fields: [
						{ type: "string", name: "title" },
						{ type: "string", name: "text" },
						{
							title: "Icons",
							name: "icons",
							type: "array",
							of: [{ type: "string" }],
							options: {
								list: [
									{ title: "Map Pin", value: "pin" },
									{ title: "Shield", value: "shield" },
									{ title: "Bell", value: "bell" },
									{ title: "Layers", value: "layers" },
								],
							},
						},
					],
				},
			],
		},
	],
};
