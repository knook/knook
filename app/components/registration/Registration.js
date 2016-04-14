var React = require('react');
var AccountFields = require('./AccountFields');
var Confirmation = require('./Confirmation');
var Success = require('./Success');
var ConfInMail = require('./ConfInMail');
var ConfOutMail = require('./ConfOutMail');
import assign from 'object-assign'
var remote = require('remote');
var ipc = require('ipc');
var CheckConnectivity = require('../../core/checkConnectivity');
var HandleJSON = require('../../core/handleJSON');
var async = require('async');
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

        var that = this;

        async.series([
            function (callback) {
                console.log("Test SMTP");
                CheckConnectivity.checkSMTP(fieldValues, function(res) {
                    callback(null, res);
                });
            },
            //@TODO: test imap connection
            function (callback) {
                console.log("Test IMAP");
                callback(null, "true");
            }
        ], function (err, res) {
            console.log("In final callback : smtpOK " + res[0] + " imapOK " + res[1]);
            if(res[0] == "true" && res[1] == "true") {
                //@TODO: push the object "fieldValues" in .config.json
                HandleJSON.addAccount(fieldValues, (res) => {
                    "use strict";
                   if(res != 1){
                       //@TODO: print error
                       console.log(res);
                   }
                });
                that.nextStep()
            }
            else {
                // @TODO: print errors
                if(res[0] != "true"){
                    console.log("SMTP Error : " + res[0]);
                }
                if(res[1] != "true") {
                    console.log("IMAP Error: " + res[1]);
                }
            }
        });
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