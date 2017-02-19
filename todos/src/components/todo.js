/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component,PropTypes} from 'react';

export default class todo extends Component{
    render(){
        return (
            <li
                onClick={this.props.onClick}
                style={{
                    textDecoration:this.props.completed?'line-through':'none',
                    cursor:this.props.completed?'default':'pointer'
                }}
            >
                {this.props.text}
            </li>
        );
    }
}
todo.propTypes={
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired,
    onClick:PropTypes.func.isRequired
}