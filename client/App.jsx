import React from "react";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAlbumData: {
        name: "",
        year: 0,
        tracks: []
      }
    };
  }

  componentDidMount() {
    const window = document.URL;
    const url = window[window.length - 1];
    $.ajax({
      type: "get",
      url: `http://localhost:3002/api/albums/${url}`,
      success: albumList => {
        console.log(albumList);
      },
      dataType: "json"
    });
  }

  render() {
    return <div />;
  }
}

export default App;
