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
      url: `http://ec2-34-213-155-196.us-west-2.compute.amazonaws.com:1024/albums`,
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
