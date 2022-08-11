export default (schema) => {
	schema.fields.push({
		name: "my_field",
		title: "My field",
		type: "string",
	});
	return schema;
};
