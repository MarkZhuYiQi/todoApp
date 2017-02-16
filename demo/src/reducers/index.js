//reducer就是路由+控制器
//switch分支根据action.type路由到对应控制器
//switch对应state处理即为对数据的增删改
//nextstate将修改后的记录写回数据库
export default (state=0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}