/**
 * Created by SZL4ZSY on 2/16/2017.
 */
// import React, { Component, PropTypes } from 'react'
//
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
//
// Todo.propTypes = {
//     onClick: PropTypes.func.isRequired,
//     text: PropTypes.string.isRequired,
//     completed: PropTypes.bool.isRequired
// }

import React, { Component, PropTypes } from 'react'
export default class Todo extends Component{
    render(){
        return (
            <li
                onClick={this.prop.onClick}
                style={{
                    textDecoration: this.props.completed?'line-thorugh':'none',
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
    completed:PropTypes.bool.isRequired,
    text:PropTypes.string.isRequired
};
