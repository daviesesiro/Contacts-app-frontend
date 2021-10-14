import React from "react";
import { Route } from "react-router";
import { Redirect } from "react-router-dom";
import { useAuthContext } from "../Context.ts/AuthContext";

interface Props {
  protected?: boolean;
  [key: string]: any;
}

export const PrivateRoute: React.FC<Props> = ({ children, ...otherProps }) => {
  let { user } = useAuthContext();
  return (
    <Route
      {...otherProps}
      render={({ location }) =>
        user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export const PublicRoute: React.FC<Props> = ({ children, ...otherProps }) => {
  let { user } = useAuthContext();
  return (
    <Route
      {...otherProps}
      render={({ location }) =>
        !user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
