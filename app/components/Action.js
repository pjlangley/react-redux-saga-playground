import React from 'react';
import { connect } from 'react-redux';

class Action extends React.Component {
    constructor(props) {
        super(props);

        this.imageMap = {
            pending: 'images/pending.png',
            completed: 'images/completed.png'
        };

        this.id = this.props.id;

        var config = this.props.actions.filter(function(UMLAction) {
            return UMLAction.id === this.id;
        }.bind(this))[0];

        this.text = config.text;

        this.state = {
            status: config.status
        };
    }

    shouldComponentUpdate(nextProps, nextState) {
        var newStatus = nextProps.actions.find(function(action) {
            return action.id === this.id;
        }.bind(this)).status;

        if (newStatus !== this.state.status) {
            this.state.status = newStatus;
            return true;
        }

        return false;
    }

    render() {
        var cssClass = this.state.status === 'completed' ? 'chip action-completed' : 'chip';

        return (
            <div className={cssClass}>
                <img src={this.imageMap[this.state.status]}/>
                {this.text}
            </div>
        );
    }
}

Action.propTypes = {
    id: React.PropTypes.number,
    actions: React.PropTypes.array
};

var mapStateToProps = function(state) {
    return {
        actions: state.UMLObjects.filter(function(UMLObject) {
            return UMLObject.type === 'ACTION';
        })
    };
};

export default connect(mapStateToProps)(Action);
