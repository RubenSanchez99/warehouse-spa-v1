import * as React from "react";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import { FormGroup, InputGroup, Button } from "@blueprintjs/core";

interface IProductDetailProps extends RouteComponentProps {}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "name foodGroup classification"
    "description description description"
    ". . submit";

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto auto auto auto auto;
    grid-template-areas:
      "name"
      "foodGroup"
      "classification"
      "description"
      "submit";
  }
  column-gap: 10px;
  font-size: 16px;
`;

const ProductName = styled.div`
  grid-area: name;
`;

const FoodGroup = styled.div`
  grid-area: foodGroup;
`;

const Classification = styled.div`
  grid-area: classification;
`;

const Description = styled.div`
  grid-area: description;
`;

const Submit = styled.div`
  grid-area: submit;
  background-color: blue;
  align-self: center;
  justify-self: flex-end;

  @media (max-width: 768px) {
    justify-self: stretch;
  }
`;

const ProductDetail: React.FC<IProductDetailProps> = props => {
  return (
    <Container>
      <ProductName>
        <FormGroup label="Product Name" labelFor="productName">
          <InputGroup id="productName" large={true} />
        </FormGroup>
      </ProductName>
      <FoodGroup>
        <FormGroup label="Form Group" labelFor="formGroup">
          <InputGroup id="formGroup" large={true} />
        </FormGroup>
      </FoodGroup>
      <Classification>
        <FormGroup label="Clasification" labelFor="clasification">
          <InputGroup id="clasification" large={true} />
        </FormGroup>
      </Classification>
      <Description>
        <FormGroup label="Description" labelFor="description">
          <InputGroup id="description" large={true} />
        </FormGroup>
      </Description>
      <Submit>
        <Button large={true} fill={true} intent="success" text="Submit" />
      </Submit>
    </Container>
  );
};

export default ProductDetail;
