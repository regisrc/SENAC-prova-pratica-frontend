import { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Container, ReactLoadingContainer } from './styles';

const PersonList = lazy(() => import('../pages/PersonList'));
const PersonRegisterUpdate = lazy(() => import('../pages/PersonRegisterUpdate'));

const Loading = (
  <Container>
    <ReactLoadingContainer />
  </Container>
);

const Routes = () => (
  <Suspense fallback={Loading}>
    <Switch>
      <Route exact path="/" component={PersonList} />
      <Route exact path="/person/register" component={PersonRegisterUpdate} />
      <Route path="/person/update/:id" component={PersonRegisterUpdate} />
    </Switch> 
  </Suspense>
);

export default Routes;