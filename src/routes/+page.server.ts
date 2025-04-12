import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, request, setHeaders }) => {
	// Use browser's language to determine the language query
	const DEFAULT_COUNTRY_CODE = 'de';
	const CDN_COUNTRY_HEADER = 'accept-language';
	const countryCode = request.headers.get(CDN_COUNTRY_HEADER) || DEFAULT_COUNTRY_CODE;
	console.log('Language:', countryCode);
	const res = await fetch(`https://api.warframestat.us/pc/?language=${countryCode}`);
	const data = await res.json();
	return data;
};
