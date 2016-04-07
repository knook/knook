var React = require('react')
var getRadioOrCheckboxValue = require('./lib/radiobox-value')

var ConfInMail = React.createClass({

    renderOptions: function (type, name, value, index) {
        var isChecked = function () {
            if (type == 'radio') return value == this.props.fieldValues[name]

            if (type == 'checkbox') return this.props.fieldValues[name].indexOf(value) >= 0

            return false
        }.bind(this)

        return (
            <label key={index}>
                <input type={type} name={name} value={value} defaultChecked={isChecked()}/> {value}
            </label>
        )
    },

    render: function () {
        return (
            <div>
                <h2>Configure incoming mail</h2>
                <div className="form-fields">
                    <div className="form-group">
                        <label for="imapServer">IMAP Server</label>
                        <input type="text" id="imapServer" ref="imapServer" defaultValue={this.props.fieldValues.imapServer}/>
                    </div>
                    <div className="form-group">
                        <label for="port">Port (optional)</label>
                        <input type="text" id="port" ref="imapPort" defaultValue={this.props.fieldValues.imapPort}/>
                    </div>
                    <li className="checkbox">
                        {['Required SSL'].map(this.renderOptions.bind(this, 'checkbox', 'imapSSL'))}
                    </li>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" ref="imapUsername" defaultValue={this.props.fieldValues.imapUsername}/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Password</label>
                        <input type="password" id="pass" ref="imapPassword" defaultValue={this.props.fieldValues.imapPassword}/>
                    </div>
                    <li className="form-footer">
                        <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
                        <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
                    </li>
                </div>
            </div>
        )
    },

    nextStep: function () {
        // Get values via querySelector
        var SSL = document.querySelectorAll('input[name="imapSSL"]')

        var data = {
            imapServer: this.refs.imapServer.getDOMNode().value,
            imapPort: this.refs.imapPort.getDOMNode().value,
            imapUsername: this.refs.imapUsername.getDOMNode().value,
            imapPassword: this.refs.imapPassword.getDOMNode().value,
            imapSSL: getRadioOrCheckboxValue(SSL)
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})

module.exports = ConfInMail