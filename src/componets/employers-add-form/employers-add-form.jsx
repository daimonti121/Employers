import { Component } from 'react';
import './employers.add-form.css';

class EmployersAddForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            salary: ''
        }
    }

    onGetValue = (e) => {

        if(e.target.name === 'name') {
            console.log('its name');
            e.target.value = e.target.value.replace(/[^a-zA-Zа-яА-ЯёЁ\s]/g, '');
        }

        if(e.target.name === 'salary') {
            console.log('its salary');
            e.target.value = e.target.value.replace(/\D/, '');
        }

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // .wrongButton 

    render() {

        const { onAdd, addNewPerson } = this.props;

        const { name, salary } = this.state;

        let classNameButton = 'form-control new-post-label';

        if (addNewPerson) {
            classNameButton += ' wrongButton'
        }

        return (
            <div className="app-add-form">
                <h3>Add New Employee</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className={classNameButton}
                        placeholder="Employee Name?" onChange={this.onGetValue} name='name' value={name} />
                    <input type="number"
                        className={classNameButton}
                        placeholder="Salary in $?" onChange={this.onGetValue} name='salary' value={salary} />

                    <button className="btn btn-outline-light" type="submit"
                        onClick={(e) => {
                            onAdd(e, name, salary);
                            this.setState({ name: '', salary: '' });
                        }}
                    >Add</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;