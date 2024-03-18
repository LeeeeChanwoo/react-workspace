import {configureStore} from '@reduxjs/toolkit';    //스토어를 만들어줌
import { Provider as ReduxProvider } from 'react-redux';
import Clock from './Clock';
import CallMiddleware from './CallMiddleware';

//타이머 (시계앱)
const initialAppState = {today : new Date()};

/* 
    첫 번째 매개변수 Appstate의 초기값은 initialAppState로 세팅
    두 번째 매개변수 action은 내부의 값중 속성명(type)이 반드시 있어야만 하는 객체

    action에 type속성을 반드시 추가하는 이유는 리듀서 함수의 몸통에서 switch문으로
    분기처리를 하기 위해서
*/
const rootReducer = (state = initialAppState, action) => {
    switch(action.type){
        case 'setToday' :
            return {...state,today : action.today}
        case 'action_type2' :
            return {...state};
    }
    return state;
}

const store = configureStore({reducer : rootReducer, middleware:[CallMiddleware]});

export default function ReduxApp(){
    return(
        <ReduxProvider store={store}>
            <Clock/>
        </ReduxProvider>
    )
}