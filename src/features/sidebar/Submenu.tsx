import * as React from "react";
import { MenuItem, Collapse, Classes } from "@blueprintjs/core";
import { useState } from "react";
import { Link } from "@reach/router";
import styled from "styled-components";

interface ISubmenuProps {
  name: string;
  items: { title: string; link: string }[];
}

const SubmenuContainer = styled.div`
  text-align: start;
  background-color: #202b33;
  color: #f5f8fa;

  @media (max-width: 768px) {
    text-align: center;
    margin-right: 0;
  }
`;

const CollapseContainer = styled.div`
  padding-left: 1.5em;
  background-color: #394b59;

  a {
    color: #f5f8fa;
  }

  @media (max-width: 768px) {
    padding-left: 0;
  }
`;

const Submenu: React.FunctionComponent<ISubmenuProps> = ({ name, items }) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <SubmenuContainer>
      <MenuItem text={name} onClick={() => setOpen(!open)} />
      <CollapseContainer>
        <Collapse isOpen={open} keepChildrenMounted={true}>
          {items.map(item => (
            <Link to={item.link}>
              <MenuItem className={Classes.DARK} text={item.title} />
            </Link>
          ))}
        </Collapse>
      </CollapseContainer>
    </SubmenuContainer>
  );
};

export default Submenu;
