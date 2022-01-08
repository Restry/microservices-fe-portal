import { BrowserRouter, Route } from "react-router-dom";
import Index from './views/index'

export default function Root(props) {
  return <BrowserRouter>
    <Route path="/app1" component={Index}>
      {/* <Route path="home" component={PlanetPage} /> */}
    </Route>
  </BrowserRouter>
}
