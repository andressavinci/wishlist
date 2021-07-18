import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Page404, PageHome, PageWishlist } from 'components/Layout';

const App = () => {
  return (
    <div data-testid="MN_APP">
      <Switch>
        <Route exact path="/" component={PageHome} />
        <Route path="/wishlist/:productId" component={PageWishlist} />
        <Route component={Page404} />
      </Switch>
    </div>
  );
};

export default App;
