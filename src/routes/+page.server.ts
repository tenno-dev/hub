import type { PageServerLoad } from './$types';

const DEFAULT_COUNTRY_CODE = 'de';
const CDN_COUNTRY_HEADER = 'accept-language';
const API_ENDPOINT = 'https://api.warframestat.us/pc/';

let cachedData: any = null;
let lastFetchTime = 0;
let lastCountryCode = DEFAULT_COUNTRY_CODE; // Track the last used country code
const CACHE_DURATION = 60000; // 60 seconds

export const load: PageServerLoad = async ({ request }) => {
    const currentTime = Date.now();
    const countryCode = request.headers.get(CDN_COUNTRY_HEADER) || DEFAULT_COUNTRY_CODE;

    // Check if the cache is still valid or if the country code has changed
    if (!cachedData || currentTime - lastFetchTime > CACHE_DURATION || countryCode !== lastCountryCode) {
        console.log('Fetching new data. Language:', countryCode);

        const res = await fetch(`${API_ENDPOINT}?language=${countryCode}`);
        cachedData = await res.json();
        lastFetchTime = currentTime; // Update the last fetch time
        lastCountryCode = countryCode; // Update the last used country code
    } else {
        console.log('Using cached data.');
    }

    return cachedData;
};