import React , {Component} from "react";
import './AddItem.css';

class AddItems extends Component {
    state = {
        name : '',
        age : ''
    }

        
    hendleChange = (e) =>{
       this.setState({
        [e.target.id]: e.target.value
       })
    }

    hendleSubmit = (e) =>{
    e.preventDefault();
    this.props.additems(this.state);
    this.setState({
        name : '',
        age : ''
    })
    }


  

    render() {
        return(
            <div>
                <form onSubmit={this.hendleSubmit}>
                    <input type="text" id="name" placeholder="Enter your name..." onChange={this.hendleChange} value={this.state.name}/>
                    <input type="number" id="age" placeholder="Enter your age..." onChange={this.hendleChange} value={this.state.age}/>
                    <input type="submit" value="Add List" className="btn"/>
                </form>
            </div>
        )
    }
}

export default AddItems