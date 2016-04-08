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
                <h3>Configure outgoing mail</h3>
                <form className="form-horizontal col-xs-10 col-xs-offset-1">
                    <div className="form-group">
                        <label htmlFor="imapServer" className="control-label">SMTP Server</label>
                        <input type="text" className="form-control" id="smtpServer" ref="smtpServer" defaultValue={this.props.fieldValues.smtpServer}/>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-7">
                            <label htmlFor="smtpPort" className="control-label">Port (optional)</label>
                            <input type="text" className="form-control" id="smtpPort" ref="smtpPort" defaultValue={this.props.fieldValues.smtpPort}/>
                        </div>
                        <div className="col-xs-5">
                            <li className="checkbox">
                                {['required'].map(this.renderOptions.bind(this, 'checkbox', 'smtpSSL'))}
                            </li>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" className="control-label">Username</label>
                        <input type="text" className="form-control" id="username" ref="smtpUsername" defaultValue={this.props.fieldValues.smtpUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="control-label">Password</label>
                        <input type="password" className="form-control" id="pass" ref="smtpPassword" defaultValue={this.props.fieldValues.smtpPassword}/>
                    </div>

                    <button type="button" className="btn btn-success col-xs-6 col-xs-offset-6" onClick={this.nextStep}>Continue</button>
                </form>
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