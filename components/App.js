App = React.createClass({

    getInitialState: function() {
      return {
          loading: false,
          searchingText: '',
          gif: {}
      };
    },

    handleSearch: function(searchingText) { 
      this.setState ({
        loading: true  
      });
      this.getGif(searchingText).then(gif => {
          this.setState({  
            loading: false,  
            gif: gif,  
            searchingText: searchingText  
          });
      });
    },

    getGif: function(searchingText) {
      return new Promise(function(resolve, reject) {
        var url = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=' + searchingText; 
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function(){
              if (xhr.status === 200){
                console.log("xhr done successfully");
                var data = JSON.parse(xhr.responseText).data;
                var gif = { 
                    url: data.fixed_width_downsampled_url,
                    sourceUrl: data.url
                  };
                  resolve(gif) 
              }

              else {
                      reject(xhr.status);
                      console.log("xhr failed");
              }
              
        }
             console.log("request sent succesfully");

      })
    },

    render: function() {
        var styles = {
            margin: '0 auto',
            textAlign: 'center',
            width: '90%',
            textDecoration: 'none'
        };

        return (
          <div className="container" style={styles}>
                <h1>Wyszukiwarka Gifów!</h1>
                <p>Znajdź gifa na <a href='http://giphy.com'>giphy</a>. Naciskaj enter, aby pobrać kolejne gify.</p>
                <Search onSearch={this.handleSearch}/>
            <Gif
                loading={this.state.loading}
                url={this.state.gif.url}
                sourceUrl={this.state.gif.sourceUrl}
            />
          </div>
        );
    }
});

ReactDOM.render(
  <App />,
  document.getElementById('App')
);


