import React from "react";
import Form from "./Form.js";
import getGiphies from "../api/giphies.js";
import Images from "./Images.js";
import Loader from "./Loader.js";
export default class ImageListClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: "", images: [], loader: false };
  }
  componentDidUpdate(prevProps, prevState) {
    const { searchTerm } = this.state;
    if (searchTerm !== prevState.searchTerm) {
      this.setState({ loader: true });
      getGiphies(searchTerm).then((payload) => {
        this.setState({
          images: payload.data,
          loader: false,
        });
      });
    }
  }
  render() {
    return (
      <div className="content">
        <h2>{this.props.name}</h2>
        <Form action={(param) => this.setState({ searchTerm: param })} />
        {this.state.loader ? <Loader /> : <Images images={this.state.images} />}
      </div>
    );
  }
}
