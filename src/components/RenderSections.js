import React, { Fragment } from "react";
import * as SectionComponents from "./sections";

import capitalizeString from "../utils/capitalizeString";
import PropTypes from "prop-types";

function resolveSections(section) {
	// eslint-disable-next-line import/namespace

	const Section = SectionComponents[capitalizeString(section._type)];

	if (Section) {
		return Section;
	}

	console.error("Cant find section", section); // eslint-disable-line no-console
	return null;
}

function RenderSections(props) {
	// console.log(SectionComponents);
	const { sections } = props;

	if (!sections) {
		console.error("Missing section");
		return <div>Missing sections</div>;
	}

	return (
		<Fragment>
			{sections.map((section) => {
				const SectionComponent = resolveSections(section);
				if (!SectionComponent) {
					return <div>Missing section {section._type}</div>;
				}
				return <SectionComponent {...section} key={section._key} />;
			})}
		</Fragment>
	);
}

// interface RenderSections {
// 	sections: Section[]
// }

// interface Section {
// 	_type: string,
// 	_key: string,
// 	sections: {}
// }

RenderSections.propTypes = {
	sections: PropTypes.arrayOf(
		PropTypes.shape({
			_type: PropTypes.string,
			_key: PropTypes.string,
			section: PropTypes.instanceOf(PropTypes.object),
		})
	),
};

export default RenderSections;
