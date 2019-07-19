import React from "react";
import "./App.css";

import "normalize.css/normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";

import {
  Alignment,
  Classes,
  Menu,
  Navbar,
  NavbarDivider,
  NavbarGroup,
  NavbarHeading,
  Button
} from "@blueprintjs/core";
import Submenu from "./features/sidebar/Submenu";
import { Router, Link } from "@reach/router";
import Home from "./base/Home";
import Products from "./features/catalog/Products";
import DepartureTickets from "./features/departures/DepartureTickets";
import DistributedInventory from "./features/inventory/DistributedInventory";
import ProductPlacement from "./features/inventory/ProductPlacement";
import StockDepartureTickets from "./features/inventory/StockDepartureTickets.";
import StockInventory from "./features/inventory/StockInventory";
import WasteInventory from "./features/inventory/WasteInventory";
import Requests from "./features/procurement/Requests";
import WasteSeparation from "./features/quality/WasteSeparation";
import ReceptionTickets from "./features/receptions/ReceptionTIckets";
import ProductDistribution from "./features/inventory/ProductDistribution";
import styled from "styled-components";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import ProductDetail from "./features/catalog/ProductDetail";

const Wrapper = styled.div`
  height: 100%;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 10fr;
  grid-template-rows: 50px auto;
  grid-template-areas:
    "navbar navbar"
    "sidebar content";
  height: 100%;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    grid-template-rows: 50px auto auto;
    grid-template-areas:
      "navbar"
      "content"
      "sidebar";
  }
`;

const NavbarContainer = styled.div`
  grid-area: navbar;
  height: auto;
  background-color: #30404d;
`;

const SidebarContainer = styled.div`
  grid-area: sidebar;
  border-right: 1px solid rgba(16, 22, 26, 0.1);
  background-color: #394b59;

  @media (max-width: 768px) {
    border-right: none;
  }
  ul {
    padding: 0;
  }
`;

const ContentContainer = styled.div`
  grid-area: content;
  overflow-y: scroll;

  @media (max-width: 768px) {
    overflow-y: initial;
    margin-bottom: 15px;
  }
`;

const ContentWrapper = styled.div`
  margin: 2em 2em 0;
  max-height: 100%;
  background-color: white;

  @media (max-width: 768px) {
    margin: 2em 2em 2em;
  }
`;

const App: React.FC = () => {
  return (
    <Wrapper>
      <AppContainer>
        <NavbarContainer>
          <Navbar className={Classes.DARK}>
            <NavbarGroup align={Alignment.LEFT}>
              <NavbarHeading>Blueprint</NavbarHeading>
              <NavbarDivider />
              <Button className={Classes.MINIMAL} icon="home" text="Home" />
              <Button
                className={Classes.MINIMAL}
                icon="document"
                text="Files"
              />
            </NavbarGroup>
          </Navbar>
        </NavbarContainer>
        <SidebarContainer>
          <Menu>
            <Submenu
              name="Catalog"
              items={[{ title: "Products", link: "/catalog/products" }]}
            />

            <Submenu
              name="Procurement"
              items={[{ title: "Requests", link: "/procurement/requests" }]}
            />

            <Submenu
              name="Receptions"
              items={[
                { title: "Reception Tickets", link: "/receptions/tickets" }
              ]}
            />

            <Submenu
              name="Quality Assurance"
              items={[
                { title: "Waste Separation", link: "/quality/waste-separation" }
              ]}
            />

            <Submenu
              name="Inventory"
              items={[
                {
                  title: "Departure Tickets",
                  link: "/inventory/departure-tickets"
                },
                {
                  title: "Product Distribution",
                  link: "/inventory/distribution"
                },
                { title: "Product Placement", link: "/inventory/placement" },
                { title: "Stock", link: "/inventory/stock" },
                { title: "Distributed", link: "/inventory/distributed" },
                { title: "Waste", link: "/inventory/waste" }
              ]}
            />

            <Submenu
              name="Departures"
              items={[
                { title: "Departure Tickets", link: "/departures/tickets" }
              ]}
            />
          </Menu>
        </SidebarContainer>
        <ContentContainer>
          <ContentWrapper>
            <Router>
              <Home path="/" />
              <Products path="/catalog/products" />
              <ProductDetail path="/catalog/products/add" />
              <DepartureTickets path="/departures/tickets" />
              <DistributedInventory path="/inventory/distributed" />
              <ProductDistribution path="/inventory/distribution" />
              <ProductPlacement path="/inventory/placement" />
              <StockDepartureTickets path="/inventory/departure-tickets" />
              <StockInventory path="/inventory/stock" />
              <WasteInventory path="/inventory/waste" />
              <Requests path="/procurement/requests" />
              <WasteSeparation path="/quality/waste-separation" />
              <ReceptionTickets path="/receptions/tickets" />
            </Router>
          </ContentWrapper>
        </ContentContainer>
      </AppContainer>
    </Wrapper>
  );
};

export default App;
