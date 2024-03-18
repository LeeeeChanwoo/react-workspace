/* 
    useSelector() : 리덕스 저장소에 특정 상태를 얻어올 때 사용

    useDispatch() : 액션을 저장소로 운반하는 역할을 함
                    Reducer의 두 번째 매개변수로 action 객체를 전달시켜줌
    

*/
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

export default function Clock(){
    //초기값으로 세팅해두었던 today 상태 얻어오기
    const today = useSelector((state)=>state.today);

    const dispatch = useDispatch(); //dispatch 함수 얻어오기

    /* 
        interval 함수를 활용하여 dispatch 함수를 호출함
        새로운 시간을 설정하는 액션 객체를 리듀서에 두 번째 매개변수로 전달
    */
    useEffect(()=>{
        const id=setInterval(
            () =>{
                dispatch({type : "setToday", today : new Date()});
            }
        )
        return () => clearInterval(id)
    },[])

    //useSelector 훅을 사용하여 현재시간을 저장소에서 꺼낸 후 화면에 출력하기

    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <h1 className="text-5xl">Clock</h1>
            <p className="mt-4 text-3xl">{today.toLocaleTimeString()}</p>
            <p className="mt-4 text-2xl">{today.toLocaleDateString()}</p>

        </div>
    )
}

