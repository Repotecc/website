//import image5 from './../../assets/img/undraw_programming_2svr.png';

// import './App.css';
import  React from 'react';

//import { connect } from 'react-redux';
//import 'jquery';
import toastr from 'toastr/toastr';
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'

// import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js'
// import 'https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.css'

class Hireusform extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            company_name: '',
            work_email: '',
            phone_number: '',
            country: '',
            no_of_employees: '',
            role: '',





        }
    }

    handleSubmit(e){
        e.preventDefault();
        fetch('http://repotecc.com/hireus.php', {
            method: "POST",
            body: JSON.stringify(this.state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())
        ).then((response)=> {
            if (response.status === 'success'){
                toastr.success('Hire form submitted!', 'SUCCESS')
                //this.resetForm()
            } else if(response.status === 'fail'){
                toastr.error('Submission failed', 'ERROR!');
            }
        })
    }

    render(){
        return(
            <form id="hireusform" onSubmit={this.handleSubmit.bind(this)} method="POST">
            <div  className="row">
                <div  className="col-md">
                    <div  className="form-group">
                        <label>First name *</label>
                        <input  className="form-control" type="text" name="first_name" value={this.state.first_name} onChange={this.onFirst_nameChange.bind(this)} placeholder="Enter your first name" required="" />
                    </div>
                </div>
                <div  className="col-md">
                    <div  className="form-group">
                        <label>Last name *</label>
                        <input  className="form-control" type="text" name="last_name" value={this.state.last_name} onChange={this.onLast_nameChange.bind(this)} placeholder="Enter your last name" required="" />
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-md">
                    <div  className="form-group">
                        <label>Company name *</label>
                        <input  className="form-control" type="text" name="company_name" value={this.state.company_name} onChange={this.onCompany_nameChange.bind(this)} placeholder="Enter company name" required="" />
                    </div>
                </div>
                <div  className="col-md">
                    <div  className="form-group">
                        <label>Work email *</label>
                        <input  className="form-control" type="email" name="work_email" value={this.state.work_email} onChange={this.onWork_emailChange.bind(this)} placeholder="Enter your work email address" required="" />
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-md">
                    <div  className="form-group">
                        <label>Phone number *</label>
                        <input  className="form-control" type="number" name="phone_number" value={this.state.phone_number} onChange={this.onPhone_numberChange.bind(this)} placeholder="Enter phone number" required="" />
                    </div>
                </div>
                <div className="col-md">
                    <div className="form-group">
                        <label>Country *</label>
                        <select  className="form-control" name="country" value={this.state.country} onChange={this.onCountryChange.bind(this)} required="">
                            <option value="">Select country</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Ghana">Ghana</option>
                            <option value="United States">United States</option>
                            <option value="United Kingdom">United Kingdom</option>
                        </select>
                    </div>
                </div>
            </div>

            <div  className="row">
                <div  className="col-md">
                    <div  className="form-group">
                        <label>Number of employees *</label>
                        <input  className="form-control" type="number" name="no_of_employees" value={this.state.no_of_employees} onChange={this.onNo_of_employeesChange.bind(this)} placeholder="Number of employees" required="" />
                    </div>
                </div>
                <div  className="col-md">
                    <div  className="form-group">
                        <label>What role best describes you *</label>
                        <select  className="form-control" name="role" value={this.state.role} onChange={this.onRoleChange.bind(this)} required="">
                            <option value="">Please select</option>
                            <option value="CEO">C.E.O</option>
                            <option value="Manager">Manager</option>
                            <option value="CTO">C.T.O</option>
                            <option value="Developer">Developer</option>
                        </select>
                    </div>
                </div>
            </div>
            <br />
            <p>We'll get back to you via your work email after you submit this form.</p>

            <div  className="center">
                <input name="hireus" value="submit disabled" type="submit" />
            
            </div>

        </form>

        );
    }
    onFirst_nameChange(event) {
        this.setState({first_name: event.target.value})
    }
    
    onLast_nameChange(event) {
        this.setState({last_name: event.target.value})
    }
    
    onCompany_nameChange(event) {
        this.setState({company_name: event.target.value})
    }

    onWork_emailChange(event) {
        this.setState({work_email: event.target.value})
    }
    
    onPhone_numberChange(event) {
        this.setState({phone_number: event.target.value})
    }

    
    onNo_of_employeesChange(event) {
        this.setState({no_of_employees: event.target.value})
    }
    
    onCountryChange(event) {
        this.setState({country: event.target.value})
    }
    onRoleChange(event) {
        this.setState({role: event.target.value})
    }
    
    // handleSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state);
    // }
}

  
export default Hireusform;
  
