import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IStockInventoryProps extends RouteComponentProps {}

const StockInventory: React.FC<IStockInventoryProps> = props => {
  return <div>Stock Inventory</div>;
};

export default StockInventory;
