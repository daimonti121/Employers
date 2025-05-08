import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployersList from '../employers-list/employers-list';
import EmployersAddForm from '../employers-add-form/employers-add-form';
import './app.css';

class App extends Component {

    constructor(props) {
        super(props)

        this.state = {
            data: [
                { name: 'Dima Y.', salary: 800, increase: false, rise: true, id: 1 },
                { name: 'Olga Y.', salary: 3000, increase: true, rise: false, id: 2 },
                { name: 'Kate Y.', salary: 4000, increase: false, rise: false, id: 3 },
            ],
            addNewPerson: false,
            term: ''
        }
    }

    deletedItem = (id) => {
        this.setState(({ data }) => {
            return {
                data: data.filter(item => item.id !== id)
            }
        })
    }

    onAddItem = (e, nameValue, salaryValue) => {
        e.preventDefault();

        if (nameValue === '' || salaryValue === '') {
            this.setState({
                addNewPerson: true
            })
        } else if (nameValue.length <= 3 || salaryValue <= 3) {
            this.setState({
                addNewPerson: true
            })
        } else {
            this.setState(({ data }) => {

                const newId = data.length > 0 ? Math.max(...data.map(user => user.id)) + 1 : 1;
                const newUser = { name: nameValue, salary: salaryValue, increase: false, rise: false, id: newId };

                return {
                    data: [...data, newUser]
                };
            });

            this.setState({
                addNewPerson: false
            })
        }
    }

    onToggleIncrease = (id) => {
        this.setState(({ data }) => ({
            data: data.map(item => {
                if (item.id === id) {
                    return { ...item, increase: !item.increase }
                }

                return item;
            })
        }))
    }

    onToggleRise = (id) => {
        this.setState(({ data }) => ({


            data: data.map(item => {

                if (item.id === id) {
                    return { ...item, rise: !item.rise }
                }

                return item;
            })

        }))
    }

    searchEmp = (items, term) => {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.name.indexOf(term) > -1 
        })
    }

    onUpdateSearch = (term) => {
        this.setState({
            term: term
        })
    }

    render() {
        const { data, term, addNewPerson } = this.state;
        let employees = this.state.data.length;
        let increased = this.state.data.filter(item => item.increase).length;
        const visibleData = this.searchEmp(data, term);

        return (
            <div className="app">
                <AppInfo employees={employees} increased={increased} />

                <div className="search-panel">
                    <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
                    <AppFilter />
                </div>

                <EmployersList data={visibleData}
                    onDelete={this.deletedItem} onToggleIncrease={this.onToggleIncrease} onToggleRise={this.onToggleRise} />
                <EmployersAddForm onAdd={this.onAddItem} addNewPerson={addNewPerson} />
            </div>
        );
    }
}

export default App;