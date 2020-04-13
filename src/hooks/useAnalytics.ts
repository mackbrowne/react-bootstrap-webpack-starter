import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from 'firebase/app';

export const logPageView = page_location =>
  process.env.NODE_ENV === 'production' &&
  analytics().logEvent('page_view', {
    page_location
  });

export default function useAnalytics() {
  const { pathname } = useLocation();

  useEffect(() => {
    logPageView(pathname);
  }, [pathname]);
}
