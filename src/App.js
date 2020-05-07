import React, { Component,Fragment } from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/layout/Navbar';
import axios from 'axios';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import Linkedin from './components/pages/Linkedin';


class App extends Component {
  state={
    users:[],
    loading: false,
    alert:null
  }
/* async componentDidMount(){

   
 } */
 searchUsers=async text =>{

  this.setState({loading:true});
  this.setState({loading:true});
  const res=await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  this.setState({users:res.data.items,loading:false});


 };

 //Clear users from search

 clearUsers=()=>this.setState({users:[],loading:false});

 //set alert system
 setAlert=(msg,type)=>{
   this.setState({alert:{msg,type}});

   //setting timeout
   setTimeout(()=>this.setState({alert:null}),5000)
 };


  render(){  
    const {loading,users}=this.state;
     return (
     <Router>  
   
    <div className="App">
    <Navbar />
    <div className="container">
    <Alert alert={this.state.alert} />
    <Switch>
      <Route 
      exact path='/github' 
      render={props=>(
      <Fragment>
      <Search searchUsers={this.searchUsers} 
    clearUsers={this.searchUsers}
    showClear={users.length > 0 ? true : false}
    setAlert={this.setAlert}/>  
    <User loading={loading} users={users} />
     </Fragment>)}/>

     <Route exact path='/about' component={About}/>
     <Route exact path='/' component={Home}/>
     <Route exact path='/linkedin' component={Linkedin}/>
     
    
    </Switch>
   
    </div>
    </div>
    </Router>
  );}

}

export default App;
