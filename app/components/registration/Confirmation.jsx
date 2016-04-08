var React = require('react')

var Confirmation = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Confirm Registration</h3>
                <ul>
                    <li><b>Name:</b> {this.props.fieldValues.name}</li>
                    <li><b>Email:</b> {this.props.fieldValues.email}</li>
                    <li><b>IMAP Server:</b> {this.props.fieldValues.imapServer}</li>
                    <li><b>IMAP Port:</b> {this.props.fieldValues.imapPort}</li>
                    <li><b>IMAP Username:</b> {this.props.fieldValues.imapUsername}</li>
                    <li><b>IMAP SSL:</b> {this.props.fieldValues.imapSSL}</li>
                    <li><b>SMTP Server:</b> {this.props.fieldValues.smtpServer}</li>
                    <li><b>SMTP Port:</b> {this.props.fieldValues.smtpPort}</li>
                    <li><b>SMTP Username:</b> {this.props.fieldValues.smtpUsername}</li>
                    <li><b>SMTP SSL:</b> {this.props.fieldValues.smtpSSL}</li>
                </ul>

                <button type="button" className="btn btn-success col-xs-6 col-xs-offset-6" onClick={this.props.submitRegistration}>Submit</button>
            </div>
        )
    }
})

module.exports = Confirmation