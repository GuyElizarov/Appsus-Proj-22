import {Home} from "./pages/app-home.jsx"
import {About} from "./pages/app-about.jsx"
import {BookApp} from "./apps/book/pages/book-index.jsx"
import {BookDetails} from "./apps/book/pages/book-details.jsx"
import {MailApp} from "./apps/mail/pages/mail-index.jsx"
import {MailDetails} from "./apps/mail/pages/mail-details.jsx"
import {NoteApp} from "./apps/note/pages/note-index.jsx"
import {NoteDetails} from "./apps/note/pages/note-details.jsx"



const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM


export function App() {
    return <Router>
        <AppHeader />
        <section className="app">
            <Switch>
                <Route path="/note/:noteId" component={NoteDetails} />
                <Route path="/note" component={NoteApp} />
                <Route path="/mail/:mailId" component={MailDetails} />
                <Route path="/mail" component={MailApp} />
                {/* <Route path="/book/:bookId" component={BookDetails} />
                <Route path="/book" component={BookApp} /> */}
                <Route path="/about" component={About} />
                <Route path="/" component={Home} />
            </Switch>
        </section>
    </Router>
}
