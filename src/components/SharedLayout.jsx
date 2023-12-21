import { Suspense } from 'react';
import { Outlet, Link } from 'react-router-dom';

const SharedLayout = () => {
  return (
      <header>
              <Link to="/">
                Home<span>.</span>
              </Link>
              <Link to="/movies">
                Movies<span>.</span>
              </Link>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    );
};

export default SharedLayout;