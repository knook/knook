var React = require('react')

var AccountFields = React.createClass({
    render: function () {
        return (
            <div>
                <h2>Account Details</h2>
                <div className="form-fields">
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" ref="name" defaultValue={this.props.fieldValues.name}/>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" ref="email" defaultValue={this.props.fieldValues.email}/>
                    </div>

                    <button className="btn -primary" onClick={this.nextStep}>Save &amp; Continue</button>
                </div>
            </div>
        )
    },

    nextStep: function (e) {
        e.preventDefault()

        // Get values via this.refs
        var data = {
            name: this.refs.name.getDOMNode().value,
            email: this.refs.email.getDOMNode().value,
        }

        this.props.saveValues(data)
        this.props.nextStep()
    }
})

module.exports = AccountFields