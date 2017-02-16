/**
 * Created by SZL4ZSY on 2/16/2017.
 */
// import React, { Component, PropTypes } from 'react'
//
// export default class AddTodo extends Component {
//     render() {
//         return (
//             <div>
//                 <input type='text' ref='input' />
//                 <button onClick={(e) => this.handleClick(e)}>
//                     Add
//                 </button>
//             </div>
//         )
//     }
//
//     /**
//      * 将需要添加的内容传给onAddClick然后清空value
//      */
//     handleClick(e) {
//         const node = this.refs.input
//         const text = node.value.trim()
//         this.props.onAddClick(text)
//         node.value = ''
//     }
// }
// //该插件的onAddClick属性必须有函数定义
// AddTodo.propTypes = {
//     onAddClick: PropTypes.func.isRequired
// }
import React, {Component, PropTypes} from 'react'
export default class AddTodo extends Component{
    render(){
        return (
            <div>
                <input type="text" refs="input" />
                <button onClick={(e)=>this.handleClick(e)}>
                    Add
                </button>
            </div>
        );
    }
    handleClick(e){
        const node=this.refs.input;
        const text=node.value.trim();
        this.props.onAddClick(text)
        node.value=''
    }
}
AddTodo.propTypes={
    onAddClick: PropTypes.func.isRequired
}
