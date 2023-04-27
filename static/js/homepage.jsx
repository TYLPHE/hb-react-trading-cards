'use strict';
function Homepage() {
  return ( 
    <React.Fragment>
      <p>This is a great site for viewing trading cards.</p>
      <a href="/cards">Click here to see trading cards!</a>
      <img src="/static/img/balloonicorn.jpg" />
    </React.Fragment>
  );
}

ReactDOM.render(<Homepage />, document.querySelector('#app'));
