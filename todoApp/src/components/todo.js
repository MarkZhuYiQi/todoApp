/**
 * Created by SZL4ZSY on 2/16/2017.
 */
// import React, { Component, PropTypes } from 'react'
// //这是Todo的每一条数据显示的
// export default class Todo extends Component {
//     render() {
//         return (
//             <li
//                 onClick={this.props.onClick}
//                 style={{
//                     textDecoration: this.props.completed ? 'line-through' : 'none',
//                     cursor: this.props.completed ? 'default' : 'pointer'
//                 }}>
//                 {this.props.text}
//             </li>
//         )
//     }
// }
// //Todo必备属性，onClick函数，text字符串，completed布尔型
// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
// }

import React, { Component,PropTypes } from 'react'
export default class Todo extends Component{
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
        )
    }
}
Todo.propTypes={
    onClick:PropTypes.func.isRequired,
    text:PropTypes.string.isRequired,
    completed:PropTypes.bool.isRequired
}