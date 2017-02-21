/**
 * Created by Administrator on 2017/2/18.
 */
import {combineReducers} from 'redux';
import {ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilters} from '../actions/actions'

//对reducer进行拆分，然后传入state，只操作state的一部分，最后进行组合
//这特么是初始值？？？ES6->会把右边中的SHOW_ALL的值拿回来，这时候SHOW_ALL=SHOW_ALL

//初始值本来是如下设置，但是由于使用了拆分，所以初始值可以分开设置
// const initialState={
//     visibilityFilter:VisibilityFilters.SHOW_ALL,
//     todos:[]
// };
// function todoApp(state=initialState,action){
//     ret urn state;
// }

const {SHOW_ALL}=VisibilityFilters;
//注意这时候state变成了数组
function todos(state=[],action){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {
                    text:action.text,
                    completed:false
                }
            ];
        case COMPLETE_TODO:
            // return [
            //     ...state.slice(0,action.index),
            //     Object.assign({},state[action.index],{
            //         completed:true
            //     }),
            //     ...state.slice(action.index+1)
            // ];
            return state.map((todo,index)=>{
                if(index===action.index){
                    return Object.assign({},todo,{
                        completed:!todo.completed
                    })
                }
                return todo;
            });
        default:
            return state;
    }
}
//只操作state中的VisibilityFilter参数
function visibilityFilter(state=SHOW_ALL,action){
    switch(action.type)
    {
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}
const todoApp=combineReducers({
    visibilityFilter,
    todos
});
export default todoApp;

// //等价写法
// export default function todoApp(state={},action)
// {
//     return {
//         visibilityFilter:visibilityFilter(state.visibilityFilter,action),
//         todos:todos(state.todos,action)
//     }
// }