import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faTwitter } from '@fortawesome/free-brands-svg-icons';

const numberOfQuotes = 408;

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      index: Math.floor(Math.random() * numberOfQuotes),
      quotes: [],
    };
    this.newQuote = this.newQuote.bind(this);
  }

  componentDidMount() {
    fetch(
      'https://gist.githubusercontent.com/redacuve/0c12440a55d4280ce459d2148e17c971/raw/a27b0f9f0263ba9a35e6a4c59d4601d817b0ee57/quotes.json',
    )
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            quotes: result.quotes,
          });
        },
        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  newQuote() {
    this.setState({ index: Math.floor(Math.random() * numberOfQuotes) });
  }

  render() {
    const {
      error, isLoaded, quotes, index,
    } = this.state;
    if (error) {
      return (
        <div>
          Error:
          {error.message}
        </div>
      );
    }
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div id="quote-box">
        <p id="text">
          <FontAwesomeIcon icon={faQuoteLeft} />

          {quotes[index].quote}

          <FontAwesomeIcon icon={faQuoteRight} />
        </p>
        <p id="author">
          -
          {quotes[index].author}
        </p>
        <button id="new-quote" type="button" onClick={this.newQuote}>
          New Quote
        </button>
        <a
          href={
            `${'https://twitter.com/intent/tweet?hashtags=quotes,motivational&text='
            + '"'}${
              quotes[index].quote
            }"`
            + ` - ${
              quotes[index].author}`
          }
          id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} />
          Tweet Quote
        </a>
      </div>
    );
  }
}

export default QuoteBox;
