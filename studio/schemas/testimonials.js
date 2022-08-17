export default {
	name: "testimonials",
	title: "Testimonials",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Title",
			description: "Internal reference to testimonial.",
			type: "string",
		},
		{
			name: "quote",
			title: "Quote",
			description: "The actual testimonial text.",
			type: "string",
		},
		{
			name: "author",
			title: "Author",
			description: "Who wrote the testimonial?",
			type: "string",
		},
		{
			name: "company",
			title: "Company",
			description: "What company does the author work at?",
			type: "string",
		},
	],
};
