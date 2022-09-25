import React, { Component } from 'react';

export class App extends Component {

    constructor(props){
        super(props);
        this.delete = this.delete.bind(this);
        this.addNote= this.addNote.bind(this);
    }

    delete(event){
        event.preventDefault();
        console.log(event);
    }

    addNote(event){
        event.preventDefault();
        var inpt = document.querySelector("#getValue").value;
        this.setState({dict : [inpt]});
        const ul = document.querySelector(".list-group");
        let myItem = `
        <li class="list-group-item d-flex align-items-center justify-content-between">
            <div className='w-75'>
                ${inpt}
            </div>
            <div>
                <button class='btn btn-danger'>Delete</button>
            </div>
        </li>`;
        document.querySelector("#getValue").value = "";
        ul.insertAdjacentHTML("beforeend",myItem);
        const bttn = document.querySelectorAll(".btn-danger");
        bttn.forEach(item=>item.addEventListener("click",(e)=>{
            e.target.parentNode.parentNode.remove();
        }));
    }


    render(){
    
    return (
      <div className='container mt-5'>
        <div className="card">
            <div>
                <header className='card-header h5'>
                    To Do Application
                </header>
            </div>
            <div className="card-body">
                <form className='input-group'>
                    <input type="text" placeholder='Add Something' id="getValue" className='form-control'/>
                    <button type="submit" className='btn btn-primary' onClick={this.addNote}>Add A Note</button>
                </form>
            </div>
            <div className='card-footer'>
                <h5>My Notes</h5>
                <ul className='list-group'>
                </ul>
            </div>
        </div>
      </div>
    )
  }
}

export default App
