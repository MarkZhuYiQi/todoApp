/**
 * Created by SZL4ZSY on 2/16/2017.
 */
// import React, { Component, PropTypes } from 'react'
//
// export default class Footer extends Component {
//     renderFilter(filter, name) {
//         if (filter === this.props.filter) {
//             return name
//         }
//
//         return (
//             <a href='#' onClick={e => {
//                 e.preventDefault()
//                 this.props.onFilterChange(filter)
//             }}>
//                 {name}
//             </a>
//         )
//     }
//
//     render() {
//         return (
//             <p>
//                 Show:
//                 {' '}
//                 {this.renderFilter('SHOW_ALL', 'All')}
//                 {', '}
//                 {this.renderFilter('SHOW_COMPLETED', 'Completed')}
//                 {', '}
//                 {this.renderFilter('SHOW_ACTIVE', 'Active')}
//                 .
//             </p>
//         )
//     }
// }
//
// Footer.propTypes = {
//     onFilterChange: PropTypes.func.isRequired,
//     filter: PropTypes.oneOf([
//         'SHOW_ALL',
//         'SHOW_COMPLETED',
//         'SHOW_ACTIVE'
//     ]).isRequired
// }
import React, { Component, PropTypes } from 'react'
export default class Footer extends Component{
    //该函数其实就是如果有内容就返回超链接，没内容就返回一个文本
    renderFilter(filter,name){
        if(filter===this.props.filter)
        {
            return name;
        }
        return (
            <a
                href="#"
                onClick={(e)=>{
                    e.preventDefault();
                    this.props.onFilterChange(filter)
                }}
            >
                {name}
            </a>
        )
    }
    render(){
        return (
            <p>
                Show:
                {' '}
                {this.renderFilter('SHOW_ALL','All')}
                {', '}
                {this.renderFilter('SHOW_COMPLETED','Completed')}
                {', '}
                {this.renderFilter('SHOW_ACTIVE','Active')}
                {'.'}
            </p>
        )
    }
}
Footer.propTypes={
    onFilterChange:PropTypes.func.isRequired,
    filter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}