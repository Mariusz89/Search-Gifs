Search = React.createClass({

    getInitialState: function() {
      return {
    searchingText: ''
  };
},

handleChange: function(event) {
    var searchingText = event.target.value;
    this.setState({searchingText: searchingText});

    if (searchingText.length > 2) {
      this.props.onSearch(searchingText);
    }
  },

  handleKeyUp: function(event) {
    if (event.keyCode === 13) {
      this.props.onSearch(this.state.searchingText);
    }
  },

render: function() {
    var styles = {
            marginTop: '20px',
            marginBottom: '20px',
            borderColor: 'rgb(206, 212, 218)',
            borderRadius: '4px',
            borderStyle: 'solid',
            borderWidth: '1px',
            boxSizing: 'border-box',
            color: 'rgb(73, 80, 87)',
            height: '45px',
            lineHeight: '24px',
            padding: '6px 12px',
            textAlign: 'start',
            width: '90%',
            maxWidth: '350px'
        };

    return <input
             type="text"
             onChange={this.handleChange}
             onKeyUp={this.handleKeyUp}
             placeholder="Tutaj wpisz wyszukiwaną frazę"
             style={styles}
             value={this.state.searchTerm}
            />
  }
});




