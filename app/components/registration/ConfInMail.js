var React = require('react')
var getRadioOrCheckboxValue = require('./lib/radiobox-value')

var ConfInMail = React.createClass({

    renderOptions: function (type, name, value, index) {
        var isChecked = function () {
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
                <div className="col-md-12">
                    <a className="btn-default" onClick={this.props.previousStep}>
                        <i className="fa fa-arrow-left fa-3x" />
                    </a>
                </div>
                <h2>Configure incoming mail</h2>
                <form className="form-horizontal col-xs-10 col-xs-offset-1">
                    <div className="form-group">
                        <label htmlFor="imapServer" className="control-label">IMAP Server</label>
                        <input type="text" className="form-control" id="imapServer" ref="imapServer" defaultValue={this.props.fieldValues.imapServer}/>
                    </div>
                    <div className="form-group">
                        <div className="col-xs-7">
                            <label htmlFor="port" className="control-label">Port (optional)</label>
                            <input type="text" className="form-control" id="port" ref="imapPort" defaultValue={this.props.fieldValues.imapPort}/>
                        </div>
                        <div className="col-xs-5">
                            <li className="checkbox">
                                {['required'].map(this.renderOptions.bind(this, 'checkbox', 'imapSSL'))}
                            </li>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="username" className="control-label">Username</label>
                        <input type="text" className="form-control" id="username" ref="imapUsername" defaultValue={this.props.fieldValues.imapUsername}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="pass" className="control-label">Password</label>
                        <input type="password" className="form-control" id="pass" ref="imapPassword" defaultValue={this.props.fieldValues.imapPassword}/>
                    </div>

                    <button type="button" className="btn btn-success col-xs-6 col-xs-offset-6" onClick={this.nextStep}>Save &amp; Continue</button>
                </form>
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