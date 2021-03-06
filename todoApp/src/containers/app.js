/**
 * Created by SZL4ZSY on 2/16/2017.
 */
// import React, { Component, PropTypes } from 'react'
// import { connect } from 'react-redux'
// import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from '../actions/actions'
// import AddTodo from '../components/addTodo'
// import TodoList from '../components/todoList'
// import Footer from '../components/footer'
// class App extends Component {
//     render() {
//         // Injected by connect() call:
//         const { dispatch, visibleTodos, visibilityFilter } = this.props
//         return (
//             <div>
//                 <AddTodo
//                     onAddClick={text =>
//                         dispatch(addTodo(text))
//                     } />
//                 <TodoList
//                     todos={visibleTodos}
//                     onTodoClick={index =>
//                         dispatch(completeTodo(index))
//                     } />
//                 <Footer
//                     filter={visibilityFilter}
//                     onFilterChange={nextFilter =>
//                         dispatch(setVisibilityFilter(nextFilter))
//                     } />
//             </div>
//         )
//     }
// }
// App.propTypes = {
//     visibleTodos: PropTypes.arrayOf(PropTypes.shape({
//         text: PropTypes.string.isRequired,
//         completed: PropTypes.bool.isRequired
//     }).isRequired).isRequired,
//     visibilityFilter: PropTypes.oneOf([
//         'SHOW_ALL',
//         'SHOW_COMPLETED',
//         'SHOW_ACTIVE'
//     ]).isRequired
// }
// function selectTodos(todos, filter) {
//     switch (filter) {
//         case VisibilityFilters.SHOW_ALL:
//             return todos
//         case VisibilityFilters.SHOW_COMPLETED:
//             return todos.filter(todo => todo.completed)
//         case VisibilityFilters.SHOW_ACTIVE:
//             return todos.filter(todo => !todo.completed)
//     }
// }
// // Which props do we want to inject, given the global state?
// // Note: use https://github.com/faassen/reselect for better performance.
// function select(state) {
//     return {
//         visibleTodos: selectTodos(state.todos, state.visibilityFilter),
//         visibilityFilter: state.visibilityFilter
//     }
// }
// // 包装 component ，注入 dispatch 和 state 到其默认的 connect(select)(App) 中；
// export default connect(select)(App)

import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux'
import {addTodo,completeTodo,setVisibilityFilter,VisibilityFilters} from '../actions/actions'
import AddTodo from '../components/addTodo'
import TodoList from '../components/todoList'
import Footer from '../components/footer'
class App extends Component{
    render(){
        const {dispatch,visibleTodos,visibilityFilter}=this.props;
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
        )
    }
}
App.propTypes={
    visibleTodos:PropTypes.arrayOf(PropTypes.shape({
        text:PropTypes.string.isRequired,
        completed:PropTypes.bool.isRequired,
    }).isRequired).isRequired,
    visibilityFilter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}
function selectTodo( todos,filter){
    switch (filter){
        case VisibilityFilters.SHOW_ALL:
            return todos
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo=>todo.completed)
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo=>!todo.completed)
    }
}
function select (state){
    return {
        visibileTodos:selectTodo(state.todos,state.visibilityFilter),
        visibilityFilter:state.visibilityFilter
    }
}
//connect方法：第一个括号传入2个参数->
//第一个是输入逻辑，state对象如何转换成UI组件参数，mapStateToProps,其实就是把state中的东西作为props放到react组件中去
//第二个是输出逻辑，用户发出的动作如何变为action对象，从ui组件传出去:mapDispatchToProps，其实就是将action作为prop放到react组件中去
export default connect(select)(App);