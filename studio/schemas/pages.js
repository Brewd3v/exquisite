export default {
	name: "pages",
	type: "document",
	title: "Pages",
	fields: [
		{
			name: "name",
			type: "string",
			title: "Name",
		},
		{
			name: "pageBuilder",
			title: "Page Builder",
			type: "array",
			of: [{ type: "hero" }, { type: "cta" }],
		},
	],
};
