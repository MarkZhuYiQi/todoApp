// import React, { Component, PropTypes } from 'react'
//
// class Counter extends Component {
//     static propTypes = {
//         value: PropTypes.number.isRequired,
//         OnIncrement: PropTypes.func.isRequired,
//         OnDecrement: PropTypes.func.isRequired
//     }
//     incrementIfOdd = () => {
//         if (this.props.value % 2 === 1) {
//             this.props.OnIncrement()
//         }
//     }
//     incrementAsync = () => {
//         setTimeout(this.props.OnIncrement, 1000)
//     }
//     render() {
//         const {value, OnIncrement, OnDecrement} = this.props
//         return (
//             <p>
//                 Clicked: {value} times
//                 {' '}
//                 <button onClick={OnIncrement}>
//                     +
//                 </button>
//                 {' '}
//                 <button onClick={OnDecrement}>
//                     -
//                 </button>
//                 {' '}
//                 <button onClick={this.incrementIfOdd}>
//                     increment if odd
//                 </button>
//                 {' '}
//                 <button onClick={this.incrementAsync}>
//                     increment async
//                 </button>
//             </p>
//         )
//     }
// }
// export default Counter



