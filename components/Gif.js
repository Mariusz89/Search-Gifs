var GIPHY_LOADING_URL = 'http://www.ifmo.ru/images/loader.gif';
var styles = {
  minHeight: '310px',
  margin: '0.5em',
  marginTop: '20px'
};

var gif = {
  width: '100%', 
  maxWidth: '350px'
}


 Gif = React.createClass({
  getUrl: function() {
    return this.props.sourceUrl ;
  },

  render: function() {
    var url = this.props.loading ? GIPHY_LOADING_URL : this.props.url;

    return (
      <div style={styles}>
        <a href={this.getUrl()} title='view this on giphy' target='new'>
          <img id='gif' src={url} style={gif}/>
        </a>
      </div>
    );
  }
});







   


 


