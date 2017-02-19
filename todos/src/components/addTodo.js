/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component,PropTypes} from 'react';
export default class addTodo extends Component{
    handleClick(e){
        const node = this.refs.input;
        const text = node.value;
        this.props.onAddClick(text);
        node.value='';
    }
    render(){
        return (
            <div>
                <h3>please input your schedule</h3>
                <input type="text" ref="input" />
                <button onClick={e=>this.handleClick(e)}>update</button>
            </div>
        );
    }
}
addTodo.propTypes={
    onAddClick:PropTypes.func.isRequired,
}