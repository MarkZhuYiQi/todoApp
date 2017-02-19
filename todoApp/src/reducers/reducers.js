//reducer就是路由+控制器
//switch分支根据action.type路由到对应控制器
//switch对应state处理即为对数据的增删改
//nextstate将修改后的记录写回数据库
import { combineReducers } from 'redux'
import { ADD_TODO, COMPLETE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters
//state.visibilityFilter
function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter
        default:
            return state
    }
}
//state.todos
function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false
                }
            ]
        case COMPLETE_TODO:
            // return [
            //     ...state.slice(0, action.index),
            //     Object.assign({}, state[action.index], {
            //         completed: true
            //     }),
            //     ...state.slice(action.index + 1)
            // ]
            return state.map((todo,index)=>{
                if(index==action.index){
                    return Object.assign({},todo,{
                        completed:!todo.completed
                    })
                }
                return todo;
            })
        default:
            return state
    }
}
//组合reducers
const todoApp = combineReducers({
    visibilityFilter,
    todos
})

export default todoApp