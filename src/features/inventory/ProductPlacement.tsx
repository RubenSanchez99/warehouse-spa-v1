import * as React from "react";
import { RouteComponentProps } from "@reach/router";

interface IProductPlacementProps extends RouteComponentProps {}

const ProductPlacement: React.FC<IProductPlacementProps> = props => {
  return <div>Product Placement Page</div>;
};

export default ProductPlacement;
