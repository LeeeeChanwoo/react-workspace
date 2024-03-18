import { useState } from "react";


function TodoList(){
    
    //useState를 활용하여 TodoList를 state에 저장
    const [toDo,setTodo] = useState("");
    const [toDos, setTodos] = useState([]);

    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === ""){
            return
        }
        setTodos((currentArray) =>[toDo, ...currentArray])
        setTodo("")
    } 
    const onChange = (e) => {
        setTodo(e.target.value)
      	
    }
   
    //완료한 투두리스트 삭제기능
    const handleDeleteTodo = (index) => {
        setTodos((currentArray) => currentArray.filter((_, i) => i !== index));
      };

    // //투두리스트 추가기능
    // const handleAddTodo = () => {
       
    //     const newTodo = {
         
    //     }

    //     setTodos([...todos,newTodo]);
    // };




    return(
        
        <div>
            <h2>TodoList</h2>
            <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={toDo}/>
            <button>추가</button>
            
            </form>
            <ul style={{ listStyle: "none", padding: 0 }}>
            {toDos.map((item,index)=><li key={index}>{item}<a onClick={() => handleDeleteTodo(index)}>🚗</a></li>)}
                {/* <li>오늘할일<a onClick={handleDeleteTodo}>🚗</a></li> */}
            </ul>
        </div>
        
    )
}
export default TodoList;