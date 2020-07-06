import * as React from "react";
import { Route, Router, Switch, Redirect } from "react-router-dom";
import history from "./history";

import {
  LayoutPageContainer,
  CalendarPageContainer
} from "./components";

interface Props {
  Component: any;
  path: string;
  exact?: boolean;
}

const MainLayout = (props: Props) => {
  const { Component, path } = props;

  return (
    <Route
      path={path}
      render={() => (
        <>
          <div className="root">
            <LayoutPageContainer />
            <div className="width-100">
              <Component />
            </div>
          </div>
        </>
      )}
    />
  );
};

const WebRouter = () => {
  return (
    <Router history={history}>
      <Switch>
        <MainLayout exact path="/" Component={CalendarPageContainer} />
        <Redirect to="/" />
      </Switch>
    </Router>
  );
};

export default WebRouter;
