import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IHomeProps extends RouteComponentProps {}

const Home: React.FC<IHomeProps> = props => {
  return <div>Home Page</div>;
};

export default Home;
