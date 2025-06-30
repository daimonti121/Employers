import './app-info.css'

const AppInfo = ({employees, increased}) => {

    return (
        <div className="app-info">
            <h1>Employee Tracking at Company N</h1>
            <h2>Total Number of Employees: {employees}</h2>
            <h2>Eligible for Bonus: {increased}</h2>
        </div>
    );

}

export default AppInfo;