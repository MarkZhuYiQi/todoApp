/**
 * Created by szl4zsy on 2/17/2017.
 */
//actions(type,payload)请求的类型，请求的数据，这些是准备用dispatch进行传递的数据
export function Increase(){
    return {
        type:'INCREMENT',
        data:null
    }
}
export function Decrease(){
    return {
        type:'DECREMENT',
        data:null
    }
}