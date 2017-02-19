/**
 * Created by Administrator on 2017/2/18.
 */
import React,{Component,PropTypes} from 'react';
export default class Footer extends Component{
    //filter筛选当前正在查看的分类
    renderFilter(filter,name){
        if(filter===this.props.filter){
            return name;
        }
        return (
            <a
                href="#"
                onClick={e=>{
                    e.preventDefault();
                    this.props.onFilterChange(filter)
                }}
            >
                {name}
            </a>
        );
    }
    render(){
        return (
            <div>
                <p>
                    SHOW:
                    {' '}
                    {this.renderFilter('SHOW_ALL','ALL')}
                    {', '}
                    {' '}
                    {this.renderFilter('SHOW_COMPLETED','COMPLETED')}
                    {', '}
                    {' '}
                    {this.renderFilter('SHOW_ACTIVE','ACTIVE')}
                    {' '}
                </p>
            </div>
        )
    }
}
Footer.propTypes={
    filter:PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired,
    onFilterChange:PropTypes.func.isRequired
};