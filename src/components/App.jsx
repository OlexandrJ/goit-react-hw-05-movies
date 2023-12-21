import React, { lazy, Suspense, Switch, Redirect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/Cast/Cast'));
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));

const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/movies" exact component={Movies} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
          <Route path="/movies/:movieId/cast" exact component={Cast} />
          <Route path="/movies/:movieId/reviews" exact component={Reviews} />
          <Redirect to="/" />
          <Route path="*" component={Home} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;