import React from 'react'
import { navigate } from 'gatsby-link'
import PropTypes from "prop-types"

import styled from "styled-components"
import Button from '../atoms/Button'

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { isValidated: false }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: encode({
                'form-name': form.getAttribute('name'),
                ...this.state,
            }),
        })
            .then(() => navigate(form.getAttribute('action')))
            .catch(error => alert(error))
    }

    render() {
        let labels = this.props.labels
        return (
            <Form
                name="contact"
                method="post"
                action="/contact/thanks/"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={this.handleSubmit}
                style={{ ...this.props.style }}
            >
                {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                <input type="hidden" name="form-name" value="contact" />
                <div hidden>
                    <label>
                        Don’t fill this out:{' '}
                        <input name="bot-field" onChange={this.handleChange} />
                    </label>
                </div>
                <div className="field">
                    <label className="label" htmlFor={'name'}>
                        {labels.name}
                    </label>
                    <div className="control">
                        <input
                            className="input"
                            type={'text'}
                            name={'name'}
                            onChange={this.handleChange}
                            id={'name'}
                            required={true}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor={'email'}>
                        {labels.email}
                    </label>
                    <div className="control">
                        <input
                            className="input"
                            type={'email'}
                            name={'email'}
                            onChange={this.handleChange}
                            id={'email'}
                            required={true}
                        />
                    </div>
                </div>
                <div className="field">
                    <label className="label" htmlFor={'message'}>
                        {labels.message}
                    </label>
                    <div className="control">
                        <textarea
                            className="textarea"
                            name={'message'}
                            onChange={this.handleChange}
                            id={'message'}
                            required={true}
                            minlength={20}
                        />
                    </div>
                </div>
                <div className="field">
                    <Button label={labels.submit} type="submit" />
                </div>
            </Form>
        )
    }
}


ContactForm.propTypes = {
    labels: PropTypes.object,
}

ContactForm.defaultProps = {
    labels: { name: "Your Name", email: "Email", message: "Message", submit: "Send Message" },
}



const Form = styled.form`
font-size: 1.5rem;

label{
    color: #999;
}

input, textarea, button{
    font-size: inherit;
}

input, textarea{

    width: 100%;
    font-family: inherit;
    margin-bottom: 0.5rem;

    border: 0;
    border-radius: var(--borderRadius);
    padding: 0.25em 0.5em;
    transition: 300ms;
    border: 2px solid #fff;

    &:focus{
        border: 2px solid var(--darkerColor);
    }

    &:valid{
        border: 2px solid var(--green);
    }
}


textarea{
    resize: vertical;

    height: 3em;


    &:focus, &:valid{
        height: 8em;
    }
}


`
