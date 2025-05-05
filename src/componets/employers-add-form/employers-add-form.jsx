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
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className={classNameButton}
                        placeholder="Как его зовут?" onChange={this.onGetValue} name='name' value={name} />
                    <input type="number"
                        className={classNameButton}
                        placeholder="З/П в $?" onChange={this.onGetValue} name='salary' value={salary} />

                    <button className="btn btn-outline-light" type="submit"
                        onClick={(e) => {
                            onAdd(e, name, salary);
                            this.setState({ name: '', salary: '' });
                        }}
                    >Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployersAddForm;