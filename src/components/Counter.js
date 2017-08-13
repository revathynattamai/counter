import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
    }


render() {
    const { value, onInc, onDec } = this.props
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={onInc}>+</button>
            <button onClick={onDec}>-</button>
        </div>
    );
}
}



export default Counter;