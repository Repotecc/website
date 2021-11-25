// import image1 from './../assets/img/59904.png';

// import './App.css';

//import image5 from '/../../assets/img/undraw_programming_2svr.png';

// import './App.css';
import toastr from 'toastr/toastr';
import 'toastr/build/toastr.css'
import 'toastr/build/toastr.min.js'


import  React from 'react';
class Contactusform extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            contact_fname: '',
            contact_lname: '',
            contact_email: '',
            contact_phone: '',
            contact_title: '',
            contact_message: '',
            

        }
    }

    handleSubmit(e){
        e.preventDefault();
        fetch('http://repotecc.com/contactus.php', {
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
                toastr.success('Contact form submitted!', 'SUCCESS');
                //this.resetForm()
            } else if(response.status === 'fail'){
                toastr.error('Submission failed', 'ERROR!');
            }
        })
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit.bind(this)}  method="POST">
                <div  className="row">
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>First name *</label>
                            <input  className="form-control" type="text" name="contact_fname" value={this.state.contact_fname} onChange={this.onContact_fnameChange.bind(this)}  placeholder="Enter your first name" required="" />
                        </div>
                    </div>
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>Last name *</label>
                            <input  className="form-control" type="text" name="contact_lname" value={this.state.contact_lname} onChange={this.onContact_lnameChange.bind(this)} placeholder="Enter your last name" required="" />
                        </div>
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>Email *</label>
                            <input  className="form-control" type="email" name="contact_email" value={this.state.contact_email} onChange={this.onContact_emailChange.bind(this)} placeholder="Enter your email address" required="" />
                        </div>
                    </div>
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>Phone number *</label>
                            <input  className="form-control" type="number" name="contact_phone" value={this.state.contact_phone} onChange={this.onContact_phoneChange.bind(this)} placeholder="Enter your phone number" required="" />
                        </div>
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>Message title *</label>
                            <input  className="form-control" type="text" name="contact_title" value={this.state.contact_title} onChange={this.onContact_titleChange.bind(this)} placeholder="Enter the title of your message" required="" />
                        </div>
                    </div>
                </div>

                <div  className="row">
                    <div  className="col-md">
                        <div  className="form-group">
                            <label>Message body *</label>
                            <textarea  className="form-control" name="contact_message" value={this.state.contact_message} onChange={this.onContact_messageChange.bind(this)} placeholder="Enter your message" required=""></textarea>
                        </div>
                    </div>
                </div>
                <br /> <br />

                <div  className="center">
                    <p className="text-mute">contact form disabled please kindly reach out to us via email info@repotecc.com.</p>
                    {/* <input name="contactus" value="submit disabled" type="submit" /> */}
                
                </div>

            </form>

        );
    }
    onContact_fnameChange(event) {
        this.setState({contact_fname: event.target.value})
    }
    
    onContact_lnameChange(event) {
        this.setState({contact_lname: event.target.value})
    }
    
    onContact_emailChange(event) {
        this.setState({contact_email: event.target.value})
    }

    onContact_phoneChange(event) {
        this.setState({contact_phone: event.target.value})
    }
    
    onContact_titleChange(event) {
        this.setState({contact_title: event.target.value})
    }

    
    onContact_messageChange(event) {
        this.setState({contact_message: event.target.value})
    }
    
    
    // handleSubmit(event){
    //     event.preventDefault();
    //     console.log(this.state);
    // }
}

  
export default Contactusform;
  

