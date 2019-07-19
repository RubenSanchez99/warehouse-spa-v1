import * as React from "react";
import { RouteComponentProps, Link } from "@reach/router";
import styled from "styled-components";
import { AgGridReact } from "ag-grid-react";
import { FormGroup, InputGroup, Button, Icon } from "@blueprintjs/core";
import { GridReadyEvent, ColGroupDef, ColDef } from "ag-grid-community";

interface IProductsProps extends RouteComponentProps {}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 100%;
  grid-template-areas:
    "add"
    "grid";

  column-gap: 10px;
  row-gap: 10px;
  font-size: 16px;
`;

const Add = styled.div`
  grid-area: add;
  justify-self: flex-start;

  @media (max-width: 768px) {
    justify-self: stretch;
  }
`;

const Grid = styled.div`
  grid-area: grid;
  overflow-x: auto;
  overflow: "hidden";
`;

const onGridReady = (params: GridReadyEvent) => {
  //this.gridApi = params.api;
  //this.gridColumnApi = params.columnApi;

  params.api.sizeColumnsToFit();
  window.addEventListener("resize", function() {
    setTimeout(function() {
      params.api.sizeColumnsToFit();
    });
  });

  params.api.sizeColumnsToFit();
};

const Products: React.FC<IProductsProps> = props => {
  const [columnDefs, setColumnDefs] = React.useState<
    (ColGroupDef | ColDef)[] | undefined
  >([
    {
      suppressSizeToFit: true,
      width: 35,
      cellRendererFramework: (params: any) => <Icon icon="edit" />
    },
    {
      headerName: "Make",
      field: "make",
      suppressSizeToFit: true,
      minWidth: 120
    },
    {
      headerName: "Model",
      field: "model"
    },
    {
      headerName: "Price",
      field: "price"
    }
  ]);

  const [rowData, setRowData] = React.useState([
    {
      make: "Toyota",
      model: "Celica",
      price: 35000
    },
    {
      make: "Ford",
      model: "Mondeo",
      price: 32000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    },
    {
      make: "Porsche",
      model: "Boxter",
      price: 72000
    }
  ]);

  return (
    <Container className="ag-theme-balham">
      <Add>
        <Link to="/catalog/products/add">
          <Button intent="warning" text="Add" fill={true} />
        </Link>
      </Add>
      <Grid>
        <div style={{ width: "100%" }} className="ag-theme-balham">
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            onGridReady={onGridReady}
            pagination={true}
            paginationPageSize={20}
            domLayout="autoHeight"
          />
        </div>
      </Grid>
    </Container>
  );
};

export default Products;
