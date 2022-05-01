const { Link } = ReactRouterDOM
export function AppHome() {

    return <section className="app-home">
        <div className="hero">
            <h1>Take a step back and know the <br /> your info is save with us</h1>
            <span>Come and explore our:</span>
            <div explore-buttons>
                <Link className="explore-button" to="/note">Notes</Link>
                <Link className="explore-button" to="/books">Books</Link>
                <Link className="explore-button" to="/mail">Mail</Link>
            </div>
        </div>
        <div className="guys-div">
            <div className="details guys-details">
                <img src="assets/imgs/guy.jpeg" alt="" />
                <p>Eytans right handed man Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet laudantium? Aliquam minima laborum quae laboriosam sint rem! Cupiditate id illum voluptatum nihil odit, distinctio numquam assumenda sapiente cum iure.</p>
            </div>
            <div className="img-container">
                <img src="assets/imgs/mail-screen.png" alt="" />
            </div>
        </div>
        <div className="eytans-div">
            <div className="img-container">
                <img src="assets/imgs/note-screen.png" alt="" />
            </div>
            <div className="details guys-details">
                <img src="assets/imgs/eytan.jpeg" alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, eveniet laudantium? Aliquam minima laborum quae laboriosam sint rem! Cupiditate id illum voluptatum nihil odit, distinctio numquam assumenda sapiente cum iure.</p>
            </div>
        </div>

    </section>
}