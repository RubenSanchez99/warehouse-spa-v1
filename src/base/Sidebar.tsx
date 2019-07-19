import * as React from "react";
import styled from "styled-components";

import Collapsible from "react-collapsible";

interface ISidebarProps {}

interface ISidebarSubmenuItemProps {
  text: string;
}

const SubmenuItemA = styled.a`
  color: #a7b6c2;
  margin-left: 2px;
  border-radius: 2px;
  line-height: 1em;
`;

const SubmenuItemDiv = styled.div`
  color: inherit;
  font-size: 14px;
  font-weight: 400;
  font-family: "-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,Icons16,sans-serif";
`;

const SidebarSubmenuItem: React.FC<ISidebarSubmenuItemProps> = ({ text }) => {
  return (
    <li>
      <SubmenuItemA>
        <SubmenuItemDiv>{text}</SubmenuItemDiv>
      </SubmenuItemA>
    </li>
  );
};

const SidebarList = styled.ul`
  margin: 0;
  border-radius: 3px;
  background: #ffffff;
  padding: 5px;
  list-style: none;
  text-align: left;
  color: #182026;
  background: #30404d;
  color: #f5f8fa;
`;

const Sidebar: React.FC<ISidebarProps> = props => {
  return (
    <SidebarList>
      <Collapsible
        trigger={<SidebarSubmenuItem text="Submenu" />}
        transitionTime={200}
        transitionCloseTime={200}
      >
        <ul>
          <SidebarSubmenuItem text="Item 1" />
        </ul>
      </Collapsible>
    </SidebarList>
  );
};

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const SidebarItem = styled.div``;

const FlexSidebar: React.FC<ISidebarProps> = props => {
  return <SidebarContainer />;
};

export default Sidebar;
