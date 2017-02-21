/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component,PropTypes} from 'react';
import AddTodo from '../components/addTodo';
import Footer from '../components/footer';
import TodoList from '../components/todoList';
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/actions'
import {connect} from 'react-redux'
//footer有一个函数renderFilter，里面的this.props.filter就是这里的filter,filter的值取自state中的visibilityFilter
//footer中的onFilterChange函数也定义在footer，他的参数就是filter，写在了footer里
//visibilityFilter,visibleTodos这两个参数是通过connect传递进来的
class App extends Component{
    render(){
        const {dispatch,visibilityFilter,visibleTodos}=this.props;
        return (
            <div>
                <AddTodo
                    onAddClick={text=>dispatch(addTodo(text))}
                />
                <TodoList
                    todos={visibleTodos}
                    onTodoClick={index=>dispatch(completeTodo(index))}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={nextFilter=>dispatch(setVisibilityFilter(nextFilter))}
                />
            </div>
        );
    }
}
App.propTypes={
    visibleTodos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired
    }).isRequired).isRequired,
    visibilityFilter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
//reducers里的todos
function selectTodo( todos,filter){
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed);
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed);
        default:
            return todos
    }
}//这里的键值对会被connect放到react组件中去，映射成this.props.visibilityFilter...
function select (state){
    return {
        visibilityFilter:state.visibilityFilter,
        visibleTodos:selectTodo(state.todos,state.visibilityFilter),

    }
}
//connect方法：第一个括号传入2个参数->
//第一个是输入逻辑，state对象如何转换成UI组件参数，mapStateToProps,其实就是把state中的东西作为props放到react组件中去
//第二个是输出逻辑，用户发出的动作如何变为action对象，从ui组件传出去:mapDispatchToProps，其实就是将action作为prop放到react组件中去
export default connect(select)(App);