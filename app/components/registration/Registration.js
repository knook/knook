var React = require('react');
var AccountFields = require('./AccountFields');
var Confirmation = require('./Confirmation');
var Success = require('./Success');
var ConfInMail = require('./ConfInMail');
var ConfOutMail = require('./ConfOutMail');
import assign from 'object-assign'
var remote = require('remote');
var ipc = require('ipc');
var Smtp = require('../../core/Smtp');
var fs = require('fs');


// Idealy, these form values would be saved in another
// sort of persistence, like a Store via Flux pattern
var fieldValues = {
    name: null,
    email: null,
    imapServer: null,
    imapPort: 993,
    imapUsername: null,
    imapPassword: null,
    imapSSL: [],
    smtpServer: null,
    smtpPort: 465,
    smtpUsername: null,
    smtpPassword: null,
    smtpSSL: []
}

var Registration = React.createClass({
    getInitialState: function () {
        return {
            step: 1
        }
    },

    saveValues: function (field_value) {
        return function () {
            fieldValues = assign({}, fieldValues, field_value)
        }.bind(this)()
    },

    nextStep: function () {
        this.setState({
            step: this.state.step + 1
        })
    },

    previousStep: function () {
        this.setState({
            step: this.state.step - 1
        })
    },

    submitRegistration: function () {
        // Handle via ajax submitting the user data, upon
        // success return this.nextStep(). If it fails,
        // show the user the error but don't advance

        //@TODO: test imap connection
        
        //@TODO: test smtp connection
        Smtp.checkSMTP(fieldValues);
        //@TODO: If all works, push the object in .config.json

        this.nextStep()
    },

    renderPreviousArrow: function () {
        if (this.state.step > 1) {
            return <div className="col-md-12">
                <a className="" onClick={this.previousStep}>
                    <i className="fa fa-arrow-left fa-2x"/>
                </a>
            </div>
        }
    },

    showStep: function () {
        switch (this.state.step) {
            case 1:
                return <AccountFields fieldValues={fieldValues}
                                      nextStep={this.nextStep}
                                      previousStep={this.previousStep}
                                      saveValues={this.saveValues}/>
            case 2:
                return <ConfInMail fieldValues={fieldValues}
                                   nextStep={this.nextStep}
                                   previousStep={this.previousStep}
                                   saveValues={this.saveValues}/>
            case 3:
                return <ConfOutMail fieldValues={fieldValues}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues}/>

            case 4:
                return <Confirmation fieldValues={fieldValues}
                                     previousStep={this.previousStep}
                                     submitRegistration={this.submitRegistration}/>
            case 5:
                return <Success fieldValues={fieldValues}/>
        }
    },

    render: function () {
        var style = {
            width: ((this.state.step - 1) / 4 * 100) + '%'
        }

        return (
            <main>
                <div className="container-fluid">
                    <div className="row">
                        <div className="progress col-*-10 col-*-offset-1">
                            <div className="progress-bar" role="progressbar" style={style}>
                                {style.width}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {this.renderPreviousArrow()}
                        {this.showStep()}
                    </div>
                </div>
            </main>
        )
    }
})

module.exports = Registration