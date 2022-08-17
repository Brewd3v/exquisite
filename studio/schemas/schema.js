// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";
import pages from "./pages";
import ctas from "./ctas";
import siteSettings from "./siteSettings";
import hero from "./blocks/hero";
import cta from "./blocks/cta";
import homepage from "./homepage";
import article from "./article";
import testimonials from "./testimonials";
import stats from "./stats";
import statsAndTestimonials from "./blocks/statsAndTestimonials";
import cards from "./blocks/cards";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		/* Your types here! */
		pages,
		siteSettings,
		homepage,
		ctas,
		article,
		testimonials,
		stats,
		/** Blocks */
		hero,
		cta,
		statsAndTestimonials,
		cards,
	]),
});
