import React from 'react';
import Axios from 'axios';

class AddressAndContactFormContainerContentRight extends React.Component {
    state = {
        name: {
            value: "",
            error: ""
        },
        phone: {
            value: "",
            error: ""
        },
        email: {
            value: "",
            error: ""
        },
        text: {
            value: "",
            error: ""
        },
        subject: {
            value: "",
            error: ""
        },
        success: "",
        isValid: false,
        sent: false
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: {
                ...this.state.name,
                value: e.target.value
            }
        })
    }

    handleSubmit = (e) =>  {
        e.preventDefault();
        let data = {
            name: this.state.name.value,
            phone: this.state.phone.value,
            email: this.state.email.value,
            text: this.state.text.value,
            subject: this.state.subject.value
        }
        let isValid = true;
        if (this.state.name.value.length < 5) {
            this.setState({
                name: {
                    value: "",
                    error: "Pole imię musi zawierać conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.phone.value.length !== 9) {
            this.setState({
                phone: {
                    value: "",
                    error: "Pole telefon musi zawierać 9 cyfr"
                }
            })
            isValid = false;
        }
        if (this.state.email.value.includes("@") === false) {
            this.setState({
                email: {
                    value: "",
                    error: "Pole email musi zawierać znak @"
                }
            })
            isValid = false;
        }
        if (this.state.subject.value.length < 5) {
            this.setState({
                subject: {
                    value: "",
                    error: "To pole musi zawierać conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.text.value.length < 5) {
            this.setState({
                text: {
                    value: "",
                    error: "To pole musi zawierać conajmniej 5 znaków"
                }
            })
        }
        if (isValid) {
            Axios.post("/api/forma", data).then((response) => {
                console.log(response.data)
                this.setState({
                    success: "Wiadomość wysłana pomyślnie",
                    isValid: true,
                    sent: true
                }, this.resetForm())
            }).catch(() => {
                console.log("Message not sent")
            })
        }
    }

    resetForm = () => {
        setTimeout(() => {
            this.setState({
                sent: false
            })
        }, 3000)
    }

    render() {
        return (
            <div className="address-and-contact-form-container-content-right">
                {this.state.isValid === false ?
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" value={this.state.name.value} onChange={this.handleChange} placeholder="Imię lub nazwa firmy"></input>
                        <p>{this.state.name.error}</p>
                        <input type="text" name="phone" value={this.state.phone.value} onChange={this.handleChange} placeholder="Telefon"></input>
                        <p>{this.state.phone.error}</p>
                        <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange} placeholder="Email"></input>
                        <p>{this.state.email.error}</p>
                        <input type="text" name="subject" value={this.state.subject.value} onChange={this.handleChange} placeholder="Temat"></input>
                        <p>{this.state.subject.error}</p>
                        <textarea name="text" value={this.state.text.value} onChange={this.handleChange} placeholder="Treść wiadomości"></textarea>
                        <p>{this.state.text.error}</p>
                        <button>Wyślij</button>
                    </form> :
                    <h1 style={{ alignSelf: "center", margin: "0 auto" }}>{this.state.success}</h1>
                }
            </div>
        )
    }
}

export default AddressAndContactFormContainerContentRight;