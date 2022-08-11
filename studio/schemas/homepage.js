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
		{
			name: "slug",
			title: "Slug",
			type: "text",
		},
		{
			name: "pageBuilder",
			title: "Page Builder",
			type: "array",
			of: [{ type: "hero" }, { type: "cta" }],
		},
		// {
		// 	name: "seo",
		// 	title: "SEO",
		// 	type: "seo-tools", // use seo-tools type
		// 	options: {
		// 		baseUrl: "http://localhost:3333", // (REQUIRED) This is the baseUrl for your site
		// 		slug(doc) {
		// 			// (REQUIRED) a function to return the slug of the current page, which will be appended to the baseUrl
		// 			return doc.slug.current;
		// 		},
		// 	},
		// },
	],
};
