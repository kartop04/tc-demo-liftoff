import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";

import IndexPage from "./dev-components/IndexPage";
import RowPage from "./dev-components/RowPage";
import "../custom/main.css";

ReactDOM.render(
  <Router>
    <div>
      <Route
        path="/"
        exact
        component={props => <IndexPage {...props} currentPage={1} />}
      />
      <Route path="/:slugOrId" exact component={RowPage} />
      <Route
        path="/page/:page"
        render={props => (
          <IndexPage
            {...props}
            currentPage={parseInt(props.match.params.page, 10)}
          />
        )}
      />
    </div>
  </Router>,
  document.getElementById("root")
);