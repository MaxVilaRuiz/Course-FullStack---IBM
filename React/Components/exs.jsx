import React, { Component } from 'react'


// Declaration of Classes:
class MyComponent extends Component { // Declare a class of your component
    render() { // Required for every component!
        return (
            <div>
                <h1>Hello World!</h1>
            </div>
        )
    }
}
class EmployeeDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { // Values required for the class (initial values)
            emp_id: '', emp_email: '' 
        };
    }
    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    render() {
        const { emp_id, emp_email } = this.state;
        const { employee_designation } = this.props;
        return (
            <div className="EmployeeDetail">
                <input type="text" name="emp_id" value={emp_id} onChange={this.handleInputChange} placeholder='Enter Employee Id' />
                <input type="text" name="emp_email" value={emp_email} onChange={this.handleInputChange} placeholder='Enter Employee Email' />
                <button onClick={ () => alert(`Employee ID: ${emp_id}, Email: ${emp_email}, Designation: ${employee_designation}`) }>Show Details</button>
            </div>
        )
    }
}


// Use of Classes:
// Use of the class 'EmployeeDetails' as if it were in another document
import EmployeeDetails from './EmployeeDetails'
function OrganizationDetail () {
    let employee_designation = 'Project Manager';
    return (
        <>
        <EmployeeDetails employee_designation = {employee_designation} />
        </>
    )
}


// State example:
class TestComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: 1, name: 'John', age: 28
        };
    }
    render() {
        <div>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
        </div>
    }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TestComponent />)


// Props example:
class TestComponent extends React.component {
    render() {
        return <div>Hi {this.props.name}</div>
    }
    // passing the props as example to the test component
    // <TestComponent name='John' />
    // <TestComponent name='Jill' />
}


export default MyComponent; // Export the created component
// export default EmployeeDetails;
// export default OrganizationDetail