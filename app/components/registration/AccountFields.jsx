var React = require('react')

var AccountFields = React.createClass({
    render: function () {
        return (
            <div>
                <h3>Account Details</h3>
                <form className="form-horizontal col-xs-10 col-xs-offset-1">
                    <div className="form-group">
                        <label htmlFor="name" className="control-label">Name</label>
                        <input type="text" className="form-control" id="name" ref="name" defaultValue={this.props.fieldValues.name}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email" className="control-label">Email</label>
                        <input type="email" className="form-control" id="email" ref="email" defaultValue={this.props.fieldValues.email}/>
                    </div>

                    <button type="button" className="btn btn-success col-xs-6 col-xs-offset-6" onClick={this.nextStep}>Continue</button>
                </form>
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