/**
 * Created by szl4zsy on 2/17/2017.
 */
//reducers 根据根据想要进行的操作，对state操作，返回新的state
export default (state=0,action)=>{
    switch(action.type){
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state>=1?state-1:state;
        default:
            return state;
    }
}