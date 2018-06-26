var Search = (props) => (
  <div className="search-bar form-inline">
    <input id="input-bar" className="form-control" type="text" />
    <button className="btn hidden-sm-down" onClick={(event) => {
      console.log('SUBMIT triggered with input: ', document.getElementById('input-bar').value);
      props.submithandler(document.getElementById('input-bar').value);
    }}>
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.Search = Search;
