import React from 'react';

class Column extends React.Component {
    shouldComponentUpdate() {
        return false;
    }

    render() {
        var classes = this.props.classes ? this.props.classes.join(' ') : '';
        return <div className={"col " + classes}>{this.props.children}</div>;
    }
}

Column.propTypes = {
    classes: React.PropTypes.array
};

export default Column;
