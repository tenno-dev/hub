import type { PageServerLoad } from './$types';

const DEFAULT_COUNTRY_CODE = 'de';
const CDN_COUNTRY_HEADER = 'accept-language';
const API_ENDPOINT = 'https://api.warframestat.us/pc/';

export const load: PageServerLoad = async ({ request }) => {
    const countryCode = request.headers.get(CDN_COUNTRY_HEADER) || DEFAULT_COUNTRY_CODE;
    console.log('Language:', countryCode);
    const res = await fetch(`${API_ENDPOINT}?language=${countryCode}`);
    const data = await res.json();
    return data;
};
