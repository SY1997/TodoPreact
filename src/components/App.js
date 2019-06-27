import {h,Component,DocumentFragment} from 'preact';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            todos:[
                {id:0,task:"Buy Milk"},
                {id:1,task:"Make the bed"},
                {id:2,task:"Get Fruits"},
                {id:3,task:"Prepare for Test"}
            ],
            inputText:''
        }
        this.addTodo=this.addTodo.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);
    }
    deleteTodo(id){
        let myTodos=this.state.todos.filter(todo=>{
            return id!=todo.id
        })
        this.setState({
            todos:myTodos
        })
    }
    addTodo(myTask){
        let myId=Math.random();
        let todo={id:myId,task:myTask};
        let myTodos=[...this.state.todos,todo];
        this.setState({
            todos:myTodos
        })
    }
    render(){
        return (
            <DocumentFragment>
                <header class="header"><h1 class="header__heading">TODO APP</h1></header>
                <section class="section">
                    <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                    <AddTodo addTodo={this.addTodo} inputText={this.state.inputText}/>
                </section>
            </DocumentFragment>
        )
    }
}
// hello
export default App;