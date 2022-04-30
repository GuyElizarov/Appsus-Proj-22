const { NavLink, withRouter } = ReactRouterDOM
import { keepImg } from '../assets/imgs/google-keep.png'
import { booksImg } from '../assets/imgs/google-books.png'
import { mailImg } from '../assets/imgs/google-mail.png'
import { homeImg } from '../assets/imgs/google-home.png'


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
                <img className='app-logo' src='../assets/imgs/appsus-logo.png' />
            </div></NavLink>
            <nav>
                <img className='menu-toggler' onClick={this.onToggleNavMenu} src='../assets/imgs/menu.png' />

                <div className={this.state.isNavOpen ? 'nav-container open' : 'nav-container'}>
                    <NavLink onClick={this.onToggleNavMenu} to="/note"><img src={keepImg} /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/book"><img src={booksImg} /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/mail"><img src={mailImg} /></NavLink>
                    <NavLink onClick={this.onToggleNavMenu} to="/" exact><img src={homeImg} /></NavLink>
                </div>
                {this.state.isNavOpen && <div className='nav-shadow' onClick={this.onToggleNavMenu}></div>}
            </nav>
        </header>
    }
}

import { } from '../assets/imgs/menu.png'
export const AppHeader = withRouter(_AppHeader)