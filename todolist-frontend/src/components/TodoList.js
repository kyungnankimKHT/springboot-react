import React, {useState, useContext} from "react";
import TodoListContext from "./TodoListContext";

const TodoList = () => {

    const {todoList, setTodoList, loginMember} = useContext(TodoListContext);

    const {inputTodo, setInputTodo} = useState('');

    let keyIndex = 0;

    // 할 일 추가버튼 기능 설정
     const 할일추가버튼 = () => {

        //만약에 할 일이 입력되지 않았다면 입력해달라는 알람창 띄워주기
        if (inputTodo.trim().length === 0) { //trim() = 앞 뒤 공백 제거 스페이스바 거부
            alert('할 일을 입력해주세요.');
            return;
        }

        fetch("/todo", { //TodoController에서 /todo 라는 URL 주소에서 DB에 값 추가하기
            method: "post",
            headers: {'Content-Type' : 'application/json'},
            body : JSON.stringify({
                title:inputTodo,
                todoMemberNo:loginMember.todoMemberNo
            })
        })
        .then(response => response.text())
        .then(todoNo => {

            if(Number(todoNo) === 0) { // 실패시 멈춤
                return;
            }
            /*
                기존 todoList + 새로 추가된 Todo를 이용해 새 배열을 만들어 todoList 대입
            */
           //새로 추가된 Todo 만들기
           const newTodo = {
            todoNo:todoNo,
            title:inputTodo,
            isDone:'O',
            todoMemberNo:loginMember.todoMemberNo
           };

           // 기존 todoList + newTodo 를 이용해서 새로운 할 일 목록을 만들기
           // 기존에 있던 할 일 목록과 새로 등록할 할 일 목록 합치기
           const newTodoList = [...todoList, newTodo];

           // todoList에 대입
           setTodoList(newTodoList);
           setInputTodo(''); //기존에 작성된 input값 비워주기
        })
        //문제가 생기면 문제 console창에서 보여주기
        .catch(
            e =>console.log(e)
        );
     }

     const 할일수정버튼 = () => {

     }

     const 할일삭제버튼 = () => {

     }

    return (
        <>
            <h1>{loginMember.name}의 Todo List</h1>
            <div className="todo-container">
                <h3>할 일(Todo) 입력</h3>
                <div>
                    <input 
                    type="text" 
                    value={inputTodo} 
                    onChange={ e => setInputTodo(e.target.value)} />
                    <button onClick={할일추가버튼}>할 일  추가하기</button>
                </div>

                <ul>
                    {/*배열.map : 기존 배열을 이용해서 새로운 배열 만들기 */}
                    {TodoList.map((todo, index) => (
                        <li key={keyIndex++}>
                            <div>
                                <span className={ todo.isDone === 'X' ? 'todo-compleate' : ''}>
                                    {todo.title}
                                </span>

                                <span>
                                    <button onClick={() => {할일수정버튼(todo, index)}}>
                                        {todo.isDone}
                                    </button>
                                    <button onClick={() => {할일삭제버튼(todo.todoNo, index)}}>
                                        삭제
                                    </button>
                                </span>
                            </div>

                        </li>
                    ))}

                </ul>
            </div>
        </>
    )
}
export default TodoList;