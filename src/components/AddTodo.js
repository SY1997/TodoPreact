import {h, Component} from 'preact';

class AddTodo extends Component{
    constructor(props){
        super(props);
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        this.props.addTodo(this.props.inputText);
    }
    handleChange(e){
        this.props.inputText=e.target.value;
    }
    render(){
        return (
            <form class="todo-form" onSubmit={this.handleSubmit}>
                <label class="todo-form__label">Add Todo:</label>
                <input class="todo-form__textbox" maxLength="40" type="text" placeholder="Your Todo Here..." value={this.props.inputText} onChange={this.handleChange}></input>
            </form>
        )
    }
}
export default AddTodo;