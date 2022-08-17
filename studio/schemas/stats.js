export default {
	name: "stats",
	title: "Stats",
	type: "document",
	fields: [
		{
			name: "stat",
			title: "Stat",
			description: "Stat text. eg. 13m or 106k",
			type: "string",
		},
		{
			name: "statText",
			title: "Stat Text",
			description:
				"Describe the stat. eg. Total Downloads or Worldwide Customers.",
			type: "string",
		},
	],
};
