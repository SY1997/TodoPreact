import {h,render,DocumentFragment} from 'preact';

const Todos= ({todos,deleteTodo}) =>{
        let handleClick=(id)=>{
            deleteTodo(id);
        }
        let myTodos=todos.length?todos.map(todo=>{
            return (
                <li class="todos__todo-item" onClick={()=>{handleClick(todo.id)}}><p class="todos__todo-item__text">{todo.task}</p></li>
            )
        }):null;
        return (
                <ul type="none" class="todos">
                    {myTodos}
                </ul>
        )
}
export default Todos;