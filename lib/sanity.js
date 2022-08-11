import {
	createClient,
	createPreviewSubscriptionHook,
	createImageUrlBuilder,
	createPortableTextComponent,
} from "next-sanity";

const config = {
	projectId: "poyl5jro",
	dataset: "production",
	apiVersion: "2021-03-25",
	useCdn: false,
};

export const sanityClient = createClient(config);

export const usePreviewSubscription = createPreviewSubscriptionHook(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source);