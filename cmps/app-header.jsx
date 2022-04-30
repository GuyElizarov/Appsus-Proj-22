const { NavLink, withRouter } = ReactRouterDOM
import { slasdf } from '../assets/imgs/'


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
            <NavLink to="/"><div className='app-logo-wrapper'>
                <img className='app-logo' src="../assets/imgs/appsus-logo.png" alt="" />
            </div></NavLink>
            <nav>
                <img className='menu-toggler' onClick={this.onToggleNavMenu} src="../assets/imgs/menu.png" alt="" />

                <div className={this.state.isNavOpen ? 'nav-container open' : 'nav-container'}>
                    <NavLink onClick={this.onToggleNavMenu} to="/note"><img src="../assets/imgs/google-keep.png" alt="" /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/book"><img src="../assets/imgs/google-books.png" alt="" /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/mail"><img src="../assets/imgs/google-mail.png" alt="" /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/" exact><img src="../assets/imgs/google-home.png" alt="" /></NavLink>
                </div>
                {this.state.isNavOpen && <div className='nav-shadow' onClick={this.onToggleNavMenu}></div>}
            </nav>
        </header>
    }

}

export const AppHeader = withRouter(_AppHeader)