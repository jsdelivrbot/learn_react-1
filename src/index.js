import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCBF4ZS9yTlSSr9n74';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    YTSearch({ key: API_KEY, term: 'node.js' }, (videos_list) => {
      this.setState({videos: videos_list});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

// Take the component above and put it to the DOM.
ReactDOM.render(<App />, document.querySelector('.alex_container'));
