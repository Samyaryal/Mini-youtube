import React from 'react'
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component{
    state= {videos: [], selectedVideo: null};

    componentDidMount(){
        this.onTermSubmit('buildings'); //default search in the screen
    }
    onTermSubmit = async term => {
        const response = await youtube.get('/search', { //accessing search end point
            params:{
                q: term // this is from youtube so have to use always "q"
            }
        }); 
        
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0] // use it as a deefault video when we starts searching
        });
    };
    onVideoSelect = (video) => {
        this.setState({selectedVideo: video}); //updates the state at App class
    }
    render(){
        return ( //
            <div className="ui container">
                <SearchBar onFormSubmit = {this.onTermSubmit} />
                <div className="ui grid">
                   <div className="ui row">
                      <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}/>
                       </div>
                       <div className="five wide column">
                        <VideoList onVideoSelect ={this.onVideoSelect} videos={this.state.videos} /> 
                       </div>
                   </div>
                </div>
            </div>
        );
    }
}
export default App;