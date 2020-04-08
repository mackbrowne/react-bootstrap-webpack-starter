import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { analytics } from 'firebase/app';
export default function useAnalytics() {
  const { pathname: page_location } = useLocation();

  useEffect(
    () =>
      analytics().logEvent('page_view', {
        page_location
      }),
    [page_location]
  );
}
