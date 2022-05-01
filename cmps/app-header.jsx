const { NavLink, withRouter } = ReactRouterDOM
class _AppHeader extends React.Component {

    state = {
        isNavOpen: false
    }
    onToggleNavMenu = () => {
        const currNavState = this.state.isNavOpen
        this.setState({ isNavOpen: !currNavState })
    }


    render() {
        return <header className="app-header layout">
            <NavLink to="/">
                <div className='app-logo-wrapper'>
                    <img className='app-logo' src='assets/imgs/appsus-logo.png' />
                </div>
            </NavLink>
            <nav>
                <img className='menu-toggler' onClick={this.onToggleNavMenu} src='assets/imgs/menu-button.png' />

                

                <div className={this.state.isNavOpen ? 'nav-container open' : 'nav-container'}>
                    <NavLink onClick={this.onToggleNavMenu} to="/note"><img src='assets/imgs/google-keep.png' /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/book"><img src='assets/imgs/google-books.png' /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/mail"><img src='assets/imgs/google-mail.png' /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/" exact><img src='assets/imgs/google-home.png' /></NavLink>
                </div>
                {this.state.isNavOpen && <div className='nav-shadow' onClick={this.onToggleNavMenu}></div>}
            </nav>
        </header>
    }
}

export const AppHeader = withRouter(_AppHeader)