import {Switch, Route, Redirect} from 'react-router-dom'
import Home from './components/Home'
import CourseList from './components/CourseList'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/courses/:id" component={CourseList} />
      <Route exact path="/not-found" component={NotFound} />
      <Redirect to="/not-found" />
    </Switch>
  </div>
)

export default App
