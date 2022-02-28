import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './Home'
import SignIn from './SignIn'

class App extends React.Component {

    render(){
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route path="/SignIn">
                        <SignIn/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;


// function App() {
//     const [count, setCount] = React.useState(0)
//     let helloFcn = () => setCount(count+1)
//   return (
//       <div>
//           <h1>Hello World</h1>
//           <h2>Count: {count}</h2>
//           <button onClick={helloFcn}>Hello World</button>
//       </div>
//   );
// }

// class App extends React.Component {
    // constructor(){
    //     super()
    //     this.state = {item: "Press The Bored Button!"}
    //     this.handleClick.bind(this);
    // }

    // // replaced by get boredAPI call
    // getRandomItem(itemArray){
    //     return itemArray[Math.floor(Math.random() * itemArray.length)]
    // }

    // // Why does this work? rather than handleClick(itemArray){...} with bind
    // handleClick = (itemArray) => {
    //     let randomItem = this.getRandomItem(itemArray)
    //     // set new state to random activity
    //     this.setState({item: randomItem.activity})
    // }