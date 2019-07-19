import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IDistributedInventoryProps extends RouteComponentProps {}

const DistributedInventory: React.FC<IDistributedInventoryProps> = props => {
  return <div>Distributed Inventory Page</div>;
};

export default DistributedInventory;
