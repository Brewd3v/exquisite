export default {
	name: "homepage",
	title: "Homepage",
	type: "document",
	fields: [
		{
			name: "title",
			title: "Site Title",
			type: "string",
		},
		{ name: "slug", type: "slug", options: { source: "title" } },
		{
			name: "pageBuilder",
			title: "Page Builder",
			type: "array",
			of: [{ type: "hero" }, { type: "cta" }, { type: "statsAndTestimonials" }],
		},
	],
};
