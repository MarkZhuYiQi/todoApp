/**
 * Created by szl4zsy on 2/15/2017.
 */
import {connect} from 'react-redux'
import {setVisibilityFilter} from '../actions'
import Link from '../components/Link'

const mapStateToProps=(state,ownProps)=>{
    return {
        active:ownProps.filter===state.visibilityFilter
    }
};
const mapDispatchProps=(dispatch,ownProps)=>{
    return {
        onClick:()=>{
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
};
const FilterLink=connect(
    mapStateToProps,
    mapDispatchProps
)(Link);
export default FilterLink