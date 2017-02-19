/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component,PropTypes} from 'react';
import Todo from './todo'
export default class todoList extends Component{
    render(){
        return (
            <ul>
                {this.props.todos.map((todo,index)=>
                    <Todo
                        {...todo}
                        key={index}
                        onClick={()=>this.props.onTodoClick(index)}
                    />
                )}
            </ul>
        );
    }
}
todoList.propTypes={
    todos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    }).isRequired).isRequired,
    onTodoClick:PropTypes.func.isRequired
}