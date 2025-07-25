export const environment = {
  production: true,
  apiUrls: (window as any).__env?.API_URLS || []
};
