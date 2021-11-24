import React, { Component } from 'react';
import { Input, Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

class SideMenu extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
    }

    render() {
        const { activeItem } = this.state

        return (
            <Menu inverted vertical fixed="left" >
                <Menu.Item>
                    <Menu.Header>Overview</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as={NavLink} to="/"
                            name='overview'
                            active={activeItem === 'overview'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>

                <Menu.Item>
                    <Menu.Header>Metrics</Menu.Header>
                    <Menu.Menu>
                        <Menu.Item
                            as={NavLink} to="/metrics-kafka"
                            name='kafka'
                            active={activeItem === 'kafka'}
                            onClick={this.handleItemClick}
                        />
                    </Menu.Menu>
                </Menu.Item>
            </Menu>
        )
    }
}

export default withRouter(SideMenu);