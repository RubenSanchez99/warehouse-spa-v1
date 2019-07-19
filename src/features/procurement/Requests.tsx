import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IRequestsProps extends RouteComponentProps {}

const Requests: React.FC<IRequestsProps> = props => {
  return <div>Requests Page</div>;
};

export default Requests;
