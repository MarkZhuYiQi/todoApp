/**
 * Created by szl4zsy on 2/17/2017.
 */
import React,{Component,PropTypes} from 'react';
export default class Test extends Component{
    IncrementIfOdd=()=>{
        if(this.props.value % 2 === 1)
        {
            this.props.Increment()
        }
    }
    IncrementAsync=()=>{
        setTimeout(this.props.Increment,1000)
    }
    render(){
        return (
            <div>
                <p>
                    Clicked: {this.props.value}
                    {' '}
                    times
                    {' '}
                    <button onClick={this.props.Increment}>
                        +
                    </button>
                    {' '}
                    <button onClick={this.props.Decrement}>
                        -
                    </button>
                    {' '}
                    <button onClick={this.IncrementIfOdd}>
                        IncreaseIfOdd
                    </button>
                    {' '}
                    <button onClick={this.IncrementAsync}>
                        IncreaseAsync
                    </button>
                </p>
            </div>
        );
    }
}
Test.propTypes={
    value:PropTypes.number.isRequired,
    Increment:PropTypes.func.isRequired,
    Decrement:PropTypes.func.isRequired
}
