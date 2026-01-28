import posthog from 'posthog-js';

if (typeof window !== 'undefined') {
  const posthogKey = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const posthogHost = process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com';

  if (posthogKey) {
    posthog.init(posthogKey, {
      api_host: posthogHost,
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') {
          posthog.debug();
        }
      },
    });
  }
}

export default posthog;
