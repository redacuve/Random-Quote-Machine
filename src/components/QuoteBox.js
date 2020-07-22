import React from 'react';

class QuoteBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        quote: ""
      };
      this.newQuote = this.newQuote.bind(this);
    }
    newQuote() {
      console.log("new Quote");
    }
    render() {
      return (
        <div>
          <p id="text">Text</p>
          <p id="author">Author</p>
          <button id="new-quote" onClick={this.newQuote}>
            New Quote
          </button>
          <a href="https://twitter.com/intent/tweet?" id="tweet-quote">
            Tweet Quote
          </a>
        </div>
      );
    }
  }

  export default QuoteBox;