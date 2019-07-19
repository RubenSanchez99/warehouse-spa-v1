import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IDepartureTicketsProps extends RouteComponentProps {}

const DepartureTickets: React.FC<IDepartureTicketsProps> = props => {
  return <div>Departure Tickets Page</div>;
};

export default DepartureTickets;
