var React = require('react')

var Confirmation = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Confirm Registration</h2>
                <ul>
                    <li><b>Name:</b> {this.props.fieldValues.name}</li>
                    <li><b>Email:</b> {this.props.fieldValues.email}</li>
                    <li><b>IMAP Server:</b> {this.props.fieldValues.imapServer}</li>
                    <li><b>IMAP Port:</b> {this.props.fieldValues.imapPort}</li>
                    <li><b>IMAP Username:</b> {this.props.fieldValues.imapUsername}</li>
                    <li><b>SMTP Server:</b> {this.props.fieldValues.smtpServer}</li>
                    <li><b>SMTP Port:</b> {this.props.fieldValues.smtpPort}</li>
                    <li><b>SMTP Username:</b> {this.props.fieldValues.smtpUsername}</li>
                </ul>
                <ul className="form-fields">
                    <li className="form-footer">
                        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                        <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit
                            Registration
                        </button>
                    </li>
                </ul>
            </div>
        )
    }
})

module.exports = Confirmation