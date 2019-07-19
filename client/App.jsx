import React from "react";
import $ from "jquery";
import SideBar from "./sideBar.jsx";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allAlbumData: []
    };
  }

  componentDidMount() {
    const window = document.URL;
    const url = window[window.length - 1];
    $.ajax({
      type: "get",
      url: `http://localhost:3002/albums`,
      success: albumList => {
        this.setState({ allAlbumData: albumList });
      },
      dataType: "json"
    });
  }

  render() {
    return <SideBar albums={this.state.allAlbumData} />;
  }
}

export default App;
