import React,{Component} from 'react'
import PropTypes from 'prop-types';

export class Search extends Component{

    state={
        text:''
    };

    static propTypes={
        searchUsers:PropTypes.func.isRequired,
        clearUsers:PropTypes.func.isRequired,
        showClear:PropTypes.bool.isRequired,
        setAlert:PropTypes.func.isRequired

    };
       

    onSubmit=e=>{
        e.preventDefault();
        if(this.state.text===''){
            this.props.setAlert('Plese enter something','light');
        }else{
            this.props.searchUsers(this.state.text);  //the text will we enter will passed to app.js
            this.setState({text:''}); //again it will be set to empty string
        }
    

        };
     
    onChange=e=>{
        this.setState({[e.target.name]:e.target.value});  //get the text from user
    };
    render(){
        const {showClear,clearUsers}=this.props;
        return(
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users.." value={this.state.text} onChange={this.onChange}/>
                    <input type="submit" value="Search" className="btn btn-dark btn-block" />
                </form>
                {showClear && <button className="btn btn-light btn-block"
                 onClick={clearUsers}>Clear</button>
                 }
                
            </div>
        );
    }
}

export default Search;