import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyDUuanHr48uaZruk_fDUZi1p2vH30gGT18';

//Create a new component which produces some HTML
//const App = () => {
//	return (
//		<div>
//			<SearchBar />
//		</div>
//	);
//}
class App extends Component{
	constructor(props){
		super(props);
		this.state = { 
			videos : [],
			selectedVideo : null
		};
		this.videoSearch('Age of Empires 2');
	}	

	videoSearch(term){
		YTSearch({key : API_KEY, term : term}, (videos) => {
			this.setState({
			videos : videos,
			selectedVideo : videos[0]
			});
		});
	}	
	render(){
		return(
			<div>
				<SearchBar onSearchTermChange = {term => this.videoSearch(term)} />
				<VideoDetail video = {this.state.selectedVideo} />
				<VideoList 
				onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
				videos = {this.state.videos} />
			</div>
		);
	}	   	
}

// Take the above component and move it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));