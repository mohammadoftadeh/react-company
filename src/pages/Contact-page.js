import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Title from '../components/Title/Title';

class ContactPage extends React.Component{

    state = {
        fullname: '',
        email: '',
        message: '',
    }

    handleChange = (e) => {
        const target = e.target;
        const value = target.value;
        const name= target.name;

        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <>
                <Navbar />
                <div className="d-flex flex-column justify-content-center text-center my-5">
                    <Title>Contact Us</Title>
                    <div className="container">
                        <img className="mb-5" alt="business" style={{ width: '75%', height: 'autot' }} src="https://images.unsplash.com/uploads/1413222992504f1b734a6/1928e537?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" />
                        <article>
                            <form className="text-left">
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label>FullName</label>
                                        <input value={this.state.fullName} type="text" className="form-control" name="fullname" placeholder="FullName" onChange={this.handleChange} />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label>Email</label>
                                        <input value={this.state.email} type="email" className="form-control" name="email" placeholder="Email" onChange={this.handleChange} />
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>Message</label>
                                    <textarea value={this.state.message} className="form-control" name="message" placeholder="Message..." onChange={this.handleChange} />
                                </div>
                                <button type="submit" className="btn btn-primary">Send Message</button>
                            </form>
                        </article>
                    </div>
                </div>
            </>
        );
    }
} 

export default ContactPage;