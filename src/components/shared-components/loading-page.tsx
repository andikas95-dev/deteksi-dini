import React from 'react';
import { Spinner } from '../ui/spinner';

interface LoadingPageProps {
  show: boolean;
}

function LoadingPage({ show }: LoadingPageProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-950 bg-opacity-50 z-50">
      <Spinner show={show}></Spinner>
    </div>
  );
}

export default LoadingPage;
