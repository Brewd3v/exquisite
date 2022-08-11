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

// Set up a preview client with serverless authentication for drafts
export const previewClient = createClient({
	...config,
	useCdn: false,
	token: process.env.SANITY_API_TOKEN,
});

// Helper function for easily switching between normal client and preview client
export const getClient = (usePreview) =>
	usePreview ? previewClient : sanityClient;
