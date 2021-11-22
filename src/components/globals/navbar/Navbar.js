import React, {Component} from 'react'
import NavbarHeader from './NavbarHeader'
import NavbarLinks from './NavbarLinks'
import NavbarIcons from './NavbarIcons'
import styled from 'styled-components'

class Navbar extends Component {
    state = {
        navbarOpen: false,
    }
    handleNavbar = () => {
        this.setState(() => {
           return{ navbarOpen: !this.state.navbarOpen}
        })
    }
    render() {
        return (
            <nav>
                <NavWrapper>
                    <NavbarHeader handleNavbar={ this.handleNavbar} />
                    <NavbarLinks navbarOpen={this.state.navbarOpen} />
                    <NavbarIcons/>
                </NavWrapper>
            </nav>
        )
    }
}

const NavWrapper = styled.nav`
    @media (min-width: 768px) {
        display: flex;
        align-items: center;
    }
`
export default Navbar
