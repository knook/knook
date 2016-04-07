var React = require('react')
var getRadioOrCheckboxValue = require('./lib/radiobox-value')

var ConfOutMail = React.createClass({

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
                <h2>Configure outgoing mail</h2>
                <div className="form-fields">
                    <div className="form-group">
                        <label for="imapServer">SMTP Server</label>
                        <input type="text" id="smtpServer" ref="smtpServer" defaultValue={this.props.fieldValues.smtpServer}/>
                    </div>
                    <div className="form-group">
                        <label for="smtpPort">Port (optional)</label>
                        <input type="text" id="smtpPort" ref="smtpPort" defaultValue={this.props.fieldValues.smtpPort}/>
                    </div>
                    <li className="checkbox">
                        {['Required SSL'].map(this.renderOptions.bind(this, 'checkbox', 'smtpSSL'))}
                    </li>
                    <div className="form-group">
                        <label for="username">Username</label>
                        <input type="text" id="username" ref="smtpUsername" defaultValue={this.props.fieldValues.smtpUsername}/>
                    </div>
                    <div className="form-group">
                        <label for="pass">Password</label>
                        <input type="password" id="pass" ref="smtpPassword" defaultValue={this.props.fieldValues.smtpPassword}/>
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
        var SSL = document.querySelectorAll('input[name="smtpSSL"]')

        var data = {
            smtpServer: this.refs.smtpServer.getDOMNode().value,
            smtpPort: this.refs.smtpPort.getDOMNode().value,
            smtpUsername: this.refs.smtpUsername.getDOMNode().value,
            smtpPassword: this.refs.smtpPassword.getDOMNode().value,
            smtpSSL: getRadioOrCheckboxValue(SSL)
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})

module.exports = ConfOutMail