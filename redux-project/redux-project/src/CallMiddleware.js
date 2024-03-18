import { applyMiddleware } from "redux";

const CallMiddleware = store => nextMiddle => action => {
    console.log('1. reducer 실행전')
    console.log('2. action.type : '+action.type+" , store" + store.getState().data);
    let result = nextMiddle(action);//reducer를 통해 액션이 스토어에 전달
    console.log("3. reducer 실행 후")
    console.log('4. action.type : '+action.type+" , store" + store.getState().data)
    return result;
}
export default CallMiddleware;