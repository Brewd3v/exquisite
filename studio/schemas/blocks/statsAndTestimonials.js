export default {
	name: "statsAndTestimonials",
	title: "Stats And Testimonials",
	type: "object",
	fields: [
		{
			name: "stats",
			title: "Stats",
			type: "array",
			of: [
				{
					type: "reference",
					to: [{ type: "stats" }],
				},
			],
			validation: (Rule) => Rule.required().min(2).max(2),
		},
		{
			name: "testimonials",
			title: "Testimonials",
			type: "reference",
			to: [{ type: "testimonials" }],
			validation: (Rule) => Rule.required(),
		},
	],
};
