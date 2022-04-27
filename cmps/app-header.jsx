const { NavLink, withRouter } = ReactRouterDOM


class _AppHeader extends React.Component {


    render() {

        return <header className="app-header">
            <h1 className="app-logo">🧬Appsus</h1>
            <nav>
                <NavLink to="/" exact>Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/book">Our Books</NavLink>
            </nav>
        </header>
    }

}

export const AppHeader = withRouter(_AppHeader)