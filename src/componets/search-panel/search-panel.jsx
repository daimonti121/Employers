import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) => {
        const term = e.target.value;

        this.setState({
            term: term
        })

        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Find Employee" value={this.term}
                onChange={this.onUpdateSearch}/>
        );
    }
}

export default SearchPanel;