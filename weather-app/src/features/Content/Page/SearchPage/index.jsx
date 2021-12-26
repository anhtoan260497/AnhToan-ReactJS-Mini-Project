import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import SearchLocation from "../../../../components/SearchLocation";
import SearchNotFound from "../../../../components/SearchNotFound";

function SearchPage(props) {

  const match = useRouteMatch();

  return (
    <>
      <Switch>
        <Route path={`${match.path}/:name`} component={SearchLocation} />
        <Route path={`${match.path}`} component={SearchNotFound} exac />
      </Switch>
    </>
  );
}

export default SearchPage;
