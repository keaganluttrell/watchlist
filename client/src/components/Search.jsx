import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      buttonDisplay: false,
    }
  }

  onInput(e) {
    this.setState({
      input: e ? e.target.value : ''
    })
  }

  buttonDisplay(e) {
    this.setState({
      buttonDisplay: e
    })
  }

  render() {
    return (
      <div id="search">
        <form autoComplete="off">
          <input
            type="text"
            id="search-input"
            placeholder="SEARCH"
            value={this.state.input}
            onFocus={() => {
              this.buttonDisplay(true);
              if (this.props.searchedList.length > 0) {
                this.props.listManager('searchedList');
                this.props.pointerHandler(2);
              }
            }}
            onBlur={() => {
              if (!this.state.input) this.buttonDisplay(false)
            }}
            onChange={(e) => this.onInput(e)}
          />
          <button
            style={{ display: this.state.buttonDisplay ? "inline" : "none" }}
            type="button"
            id="search-btn"
            onClick={() => {
              this.props.searchHandler(this.state.input);
              this.onInput()
              this.buttonDisplay(false)
              this.props.pointerHandler(2)
            }}
          >GO</button>
        </form>
      </div>
    );
  }
}

export default Search;