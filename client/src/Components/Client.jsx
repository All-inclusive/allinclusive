import React, { Component } from "react";

export default class Client extends Component {

  render() {
    return (
      <div>
        <ProSidebar>
          <Menu iconShape="square">
            <MenuItem icon={<FaGem />}>Dashboard</MenuItem>
            <SubMenu title="Components" icon={<FaHeart />}>
              <MenuItem>Component 1</MenuItem>
              <MenuItem>Component 2</MenuItem>
            </SubMenu>
          </Menu>
        </ProSidebar>;
      </div>
  )}
}