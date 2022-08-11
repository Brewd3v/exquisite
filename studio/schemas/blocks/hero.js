export default {
	name: "hero",
	type: "object",
	title: "Hero",
	fields: [
		{
			name: "heading",
			type: "string",
			title: "Heading",
		},
		{
			name: "tagline",
			type: "string",
			title: "Tagline",
		},
		{
			name: "ctaSelector",
			title: "CTA Selector",
			type: "reference",
			to: [{ type: "ctas" }],
		},
		{
			name: "image",
			type: "image",
			title: "Image",
			options: {
				hotspot: true,
			},
			fields: [
				{
					name: "alt",
					type: "string",
					title: "Alternative text",
				},
			],
		},
	],
};
