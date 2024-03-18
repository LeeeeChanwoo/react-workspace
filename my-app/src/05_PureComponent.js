import { Component,PureComponent } from "react";
import {shallowEqualObjects, shallowEqualArrays} from 'shallow-equal';

/*
    1. PureComponent?
    class형 컴포넌트는 Component와 PureComponent가 있음
    두 함수 모두 props와 state의 변경에 따라 render 함수를 호출하는데
    호출을 하는 기준이 약간 다름

    Component에서는 setState함수 호출 시 내부적으로 변경하고자 하는  state의 값이 같더라도
    항상 render()함수를 호출하였음

    PureComponent에서는 바꿀 값 자체를 실제로 비교하여 값이 동일한 경우 
    변경되지 않았다고 간주하고 render 함수를 호출하지 않음

    Component와 비교해봤을때 불필요한 화면변환이 발생하지 않으므로 약간이지만
    페이지 성능을 향상 시킬 수 있음


*/
class Pure extends PureComponent{
    constructor(props){
    super(props);
    this.state= {
        StateString : 'react',
        StateArray : ['react'],
        StateObject : {react : 'react'}
    }
}
stateChange=(flag)=>{
    if(flag=='string'){
        this.setState({StateString : 'react'}); // render 호출x
    }else if(flag=='array'){
        this.setState({StateArray : ['react']}); // render 호출o
    }else{
        this.setState({StateObject : {react : 'react'}}); // render 호출o
    }
}
/* 
    객체의 경우 변수값이 아니라 객체의 주소값을 통해 비교를 수행하기 때문에
    기존 state에 담겨있던 StateObject나 StateArray는 서로 완전 다른값이라고
    판단하고 render 메서드가 호출됨
*/
render(){
    console.log("render 호출됨")
    return(
        <div style={{padding:"0px"}}>
            <button onClick={() => this.stateChange('string')}>클릭</button><br/>
            <button onClick={() => this.stateChange('array')}>클릭</button><br/>
            <button onClick={() => this.stateChange('object')}>클릭</button><br/>
            state :: StateString : {this.state.StateString}<br/>
            state :: StateArray : {this.state.StateArray.toString()}<br/>
            state :: StateObject : {JSON.stringify(this.state.StateObject)}
        </div>
    )
}
}
class Shallow extends Component{
    constructor(props){
        super(props);
        this.state= {
            StateString : 'react',
            StateArray : ['react'],
            StateObject : {react : 'react'}
        }
    }
    /* 
        컴포넌트 라이프사이클중 변경과 관련된 메소드
        반환값에 따라 컴포넌트를 업데이트할지(true), 말지(false) 결정함
    */
    shouldComponentUpdate(nextProps, nextState){
        // return !shallowEqualArrays(this.state.StateArray,nextState.StateArray);
        return !shallowEqualObjects(this.state.StateObject,nextState.StateObject);
        /*
            shallow-equal 패키지 안에는 PureComponent에서 state값의 변경을 비교하는 것과
            동일한 기능을 수행하는 함수를 제공해준다

            1. shallowEqualArrays() : 배열은 "값"만을 가지고 비교를 수행함. 내부의 값이
            모두 일치하면 true, 일치하지 않으면 false를 반환함

            2. shallowEqualObjects() : 객체를 비교할 때 동일한 키의 '값'만을 가지고 비교
        */
    }
    stateChange=(flag)=>{
        if(flag=='string'){
            this.setState({StateString : 'react2'}); // render 호출x
        }else if(flag=='array'){
            this.setState({StateArray : ['react','react2']}); // render 호출o
        }else{
            this.setState({StateObject : {react : 'react2'}}); // render 호출o
        }
    }
    /* 
        객체의 경우 변수값이 아니라 객체의 주소값을 통해 비교를 수행하기 때문에
        기존 state에 담겨있던 StateObject나 StateArray는 서로 완전 다른값이라고
        판단하고 render 메서드가 호출됨
    */
    render(){
        console.log("render 호출됨")
        return(
            <div style={{padding:"0px"}}>
                <button onClick={() => this.stateChange('string')}>클릭</button><br/>
                <button onClick={() => this.stateChange('array')}>클릭</button><br/>
                <button onClick={() => this.stateChange('object')}>클릭</button><br/>
                state :: StateString : {this.state.StateString}<br/>
                state :: StateArray : {this.state.StateArray.toString()}<br/>
                state :: StateObject : {JSON.stringify(this.state.StateObject)}
            </div>
        )
    }
}
export{Pure, Shallow};