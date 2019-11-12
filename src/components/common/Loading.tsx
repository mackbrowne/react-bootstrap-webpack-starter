import React from 'react';

export default function LoadingComponent({
  isLoading,
  error
}: {
  isLoading: boolean,
  error: any
}) {
  // Handle the loading state
  if (isLoading) {
    return <div>Loading...</div>;
  } else if (error) {
    // Handle the error state
    return <div>Sorry, there was a problem loading the page.</div>;
  } else {
    return null;
  }
}
