import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch, useLocation, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Search from "../../../../components/Search";
import SearchNotFound from "../../../../components/SearchNotFound";
import SearchLocation from "../../../../components/SearchLocation";

function SearchPage(props) {

  const match = useRouteMatch();
  // console.log(match);

  // const choosenLocation = useSelector(
  //   (state) => state.getSearchLocation.data.name
  // );
  // const country = useSelector(
  //   (state) => state.getCurrentLocation.data.sys?.country
  // );
  // const isLoading = useSelector((state) => state.getCurrentLocation.isLoading);

  // useEffect(() => {
  //   if (!location) return;
  //   dispatch(getCurrent([location[0], location[1], API_key]));
  // }, [dispatch, location, API_key]);

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
