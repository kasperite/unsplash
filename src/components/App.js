import React from "react";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    }
  }

  componentDidMount() {
    const headers = new Headers({
      "Authorization": "Client-ID 59ad44b5e66807f3b422d255dca1e421171717b7d59e1ce940a1f535bf3822e7"
    });
    const url = "https://api.unsplash.com/photos";
    const myInit = {
      method: "GET",
      headers: headers,
      mode: "cors",
      cache: "default"
    };
    fetch(url, myInit)
      .then((response) => {
        return response.json();
      })
      .then((myJSON) => {
        let image_urls = myJSON.map((json) => {
          return json.urls.thumb;
        });
        this.setState({images: image_urls});
      });
  }

  render() {
    return (
      <ul>
        {this.state.images.map(function(url, i) {
          return <li key={i}><img src={url} /></li>;
        })}
      </ul>
    );
  }
}
