import React from 'react'

class SearchBar extends React.Component{
    state = { term:'' };

    onInputChange =(event) =>{
      this.setState({term: event.target.value}) //this update the value of state
    }
    onFormSubmit = (event) => {
        event.preventDefault(); // prevents browser not to automatically submits the form. // it prevents to refresh the page
        
        //TODO: make sure we call
        // callback from parent component
        this.props.onFormSubmit(this.state.term); //this props from App.js
    }
    render(){
        return (
            <div className="search-bar ui segment">
               <form onSubmit = {this.onFormSubmit} className="ui form">
                  <div className="field">
                    <label>Video Search</label>
                    <input type="text" value={this.state.term}
                    onChange={this.onInputChange}/> {/*input ko value state bata aauxa mathi ko*/}
                  </div>
               </form>
            </div>
        )
    }
}
export default SearchBar;