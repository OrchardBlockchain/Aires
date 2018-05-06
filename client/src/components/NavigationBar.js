import React from 'react';
import {StyleRoot} from 'radium';
import {Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler, Collapse, Nav} from 'reactstrap';

class NavigationBar extends React.Component {

      constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }

      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }


        render () {

        return (

    <div>
      <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Aires</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/ICOSelect">ICO Select</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/investments">My Investments</NavLink>
          </NavItem>
          </Nav>
          </Collapse>
      </Navbar>
    </div>
       )
    }
}

export default NavigationBar