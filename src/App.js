import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        "# Welcome to my React Markdown Previewer!\n## This is a sub-heading...\n### And here's some other cool stuff:\nHeres some code, '&lt;div&gt;&lt;/div&gt;', between 2 backticks.\n"
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-5">
          <h3 className="head-tag">Editor</h3>
          <textarea
            id="editor"
            value={this.state.markdown}
            onChange={this.handleChange}
            type="text"
          ></textarea>
        </div>

        <div id="markdown1">
          <h3 className="head-tag">Previewer</h3>

          <ReactMarkdown
            children={this.state.markdown}
            remarkPlugins={[remarkGfm]}
          />
        </div>
      </div>
    );
  }
}

export default App;
