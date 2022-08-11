import S from "@sanity/desk-tool/structure-builder";
import { FiSettings, FiLayout, FiFlag } from "react-icons/fi";
import PreviewIFrame from "./src/components/previewIFrame";

export default () =>
	S.list()
		.title("Base")
		.items([
			S.listItem()
				.title("Settings")
				.icon(FiSettings)
				.child(
					S.document().schemaType("siteSettings").documentId("siteSettings")
				),
			S.listItem()
				.title("Homepage")
				.icon(FiLayout)
				.child(
					S.document()
						.views([S.view.form(), PreviewIFrame()])
						.schemaType("homepage")
						.documentId("homepage")
				),
			S.listItem().title("Pages").child(S.documentTypeList("pages")),
			S.listItem()
				.title("Call to actions")
				.icon(FiFlag)
				.child(S.documentTypeList("ctas")),
			...S.documentTypeListItems().filter(
				(listItem) =>
					!["siteSettings"].includes(listItem.getId()) &&
					!["homepage"].includes(listItem.getId()) &&
					!["ctas"].includes(listItem.getId()) &&
					!["pages"].includes(listItem.getId())
			),
		]);
