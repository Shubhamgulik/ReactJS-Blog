import { Switch,Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
     <h1>Starting blog App</h1>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/post/:postId' component={PostDetail} />
          <Route exact path='/create-post' component={CreatePost} />
          {/* <Route exact path='/' component={} /> */}

        </Switch>
    </div>
  );
}

export default App;

