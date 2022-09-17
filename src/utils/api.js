import { configs } from '../config';

export function withBaseUrl(path) {
  return `${configs.API_URL_BASE}${path}?api_key=${configs.API_KEY}`;
}
