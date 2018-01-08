import React, {Component} from 'react';


// const SearchBar = () => {						//Method : 1
// return <input />
// };
export default class SearchBar extends Component{					//Method : 2
	constructor(props){
		super(props);
		this.state = {term : ''}
	}
	render(){
		return (
			<div className = "search-bar">
				<input
					value = {this.state.term} 
					onChange={(event) => this.onInputChange(event.target.value)} />
			</div>
		);
	}

	onInputChange(term){
		this.setState({term});
		this.props.onSearchTermChange(term);
	}	
}
