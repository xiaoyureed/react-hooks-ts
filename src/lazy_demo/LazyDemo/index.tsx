import React, { lazy, Suspense } from 'react';

// 指定 chunk name, 为了便于观察
const About = lazy(() => import(/* webpackChunkName: "about" */ "./About"));

const FallbackUi: React.FC = () => {
  return (
    <>
      pending...
    </>
  );
};

const LazyDemo: React.FC = () => {
  return (
    <>
      <Suspense fallback={<FallbackUi />}>
        <About />
      </Suspense>
    </>
  );
};

export default LazyDemo;
