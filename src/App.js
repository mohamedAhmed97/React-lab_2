import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/* function App() {
  return (
      <ToDoList/>
      );
} */
//todo list
class App extends React.Component{
  constructor(){
    super();
    this.DoingList={
      data:
        [
          {
            id:1,
            Do:"Study Python",
          },
          {
            id:2,
            Do:"Play Football"
          }
        ]
        ,
        newid :null ,
        newwanna:null,
    }
   
  }
 
//set new  id 
hadleId=(e)=>
{
 this.setState({newid:e.target.value}) 
}  
//set new wish
handleWaana=(e)=>
{
 this.setState({newwanna:e.target.value}) 
}  
//hangle submit
hadleSubmit=(e)=>
  {
    e.preventDefault();
    console.log(this.state.newid);
    console.log(this.state.newwanna);
    this.setState({newid:this.state.newid}) 
    this.setState({newwanna:this.state.newwanna}) 
    

  }
  render()
  {
    return (
      <div class="row mt-3">
        <div class="container">
          <div class="card">
          <div class="card-body">
            <ShowList list={this.DoingList}></ShowList>
            <TodoForm handleWaana={this.handleWaana} hadleid={this.hadleId} hadleSubmit={this.hadleSubmit}></TodoForm>
          </div>
          </div>
        </div>
      </div> 
    );
  }
}
// show lis
class ShowList extends React.Component
{ 
  constructor()
  {
    super();
    //style of done
   /*  this.DivStyle="alert alert-secondary"; */
   this.state={
     DivStyle:"alert alert-secondary",
   }
  }

  //done button 
  DoneWork=(id)=>
  {
    alert(id);
    this.setState({DivStyle:"alert alert-success"});
    /* this.DivStyle="alert alert-success"; */
    console.log(this.state.DivStyle);
  }
  //un do func
  setUnDoWork(id)
  {
    this.setState({DivStyle:"alert alert-danger"});
  }
  render()
  {
    return (
      <table class="table">
         <tbody>
            
            {this.props.list.data.map((parent,i)=>(
              <TableData key={parent.id} style={this.state.DivStyle} data={parent} Done={()=>this.DoneWork(parent.id)} undo={()=>this.setUnDoWork(parent.id)}></TableData>
            ))}
            <h6>{this.DivStyle}</h6>
            </tbody>
      </table>  
    )
  }
}

class TableData extends React.Component
{
  constructor(props){
    super(props);
  }
  render()
  {    
    return (
      
        <tr className={this.props.style}>
          <td>{this.props.data.id}</td>
          <td>{this.props.data.Do}</td>
          <td><button type="button" class="btn btn-primary" onClick={()=>this.props.Done(this.props.data.id)}>Done</button></td>
          <td><button type="button" class="btn btn-danger" onClick={()=>this.props.undo(this.props.data.id)}>UnDone</button></td>
        </tr> 
        
      
    );
  }
}

class TodoForm extends React.Component
{
  render()
  {
    return (
      <form onSubmit={this.props.hadleSubmit}>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter ID</label>
          <input type="number" name="id" onChange={this.props.hadleid} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">Enter Doing Wish</label>
          <input type="text" name="wanna"  onChange={this.props.handleWaana} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    );
  }
}
export default App;
