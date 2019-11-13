import React, { Component } from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import CounterOutput from '../components/CounterOutput';


export class CounterContainer extends Component {
    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <Counter label="Increment" clicked={this.props.onIncrement} />
                <Counter label="Decrement" clicked={this.props.onDecrement} />
                <Counter label="Add+5" clicked={this.props.onIncrementFive} />
                <Counter label="Minus-5" clicked={this.props.onDecrementFive} />


            </div>
        )
    }
}
const mapStatetoProps = (state) =>{
    return {
        ctr:state.counter


    }

}
const mapDispatchtoprops = (dispatch) =>{
    return {
        onIncrement: () => { dispatch({ type:'CTR_INCREMENT'}) },
        onDecrement: () => { dispatch({ type:'CTR_DECREMENT'}) },
        onIncrementFive: () => { dispatch({ type:'CTR_INCREMENT_FIVE'}) },
        onDecrementFive: () => { dispatch({ type:'CTR_DECREMENT_FIVE'}) },

    }

}

export default connect(mapStatetoProps, mapDispatchtoprops)(CounterContainer)
