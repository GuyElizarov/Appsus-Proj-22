export class FilterBy extends React.Component {
    state = {
        txt: null
    }


    render() {
        return <div className="filter-by">
            <input type="text" placeholder="search" />
        </div>
    }
}