import React from 'react'
import { Route, Switch } from 'react-router'

import MainVideos from '../containers/MainVideos';
import FavoriteVideos from '../containers/FavoriteVideos';
import BaseLayout from '../layouts/Base';

const routes = (
  <BaseLayout>
    <Switch>
      <Route exact path="/" component={MainVideos} />
      <Route path="/favorites" component={FavoriteVideos} />
    </Switch>
  </BaseLayout>
)

export default routes;