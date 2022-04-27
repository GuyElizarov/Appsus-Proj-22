const { NavLink, withRouter } = ReactRouterDOM


class _AppHeader extends React.Component {


    render() {

        return <header className="app-header">
            <h1 className="app-logo">🧬Appsus</h1>
            <nav>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Books</NavLink>
                <NavLink to="/mail">Mail</NavLink>
                <NavLink to="/" exact>Home</NavLink>
            </nav>
        </header>
    }

}

export const AppHeader = withRouter(_AppHeader)