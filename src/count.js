import React from 'react'
import {connect} from 'react-redux'


const containerStyle = {
    display: 'flex'
  }
const buttonStyle = {
    fontSize: '1.5rem',
    width: 'auto',
    height: '40px'
  }

class Counter extends React.Component
{
        handleMax=()=>{
            this.props.dispatch({type:"ADD_ONE"})
        }
        handleMin=()=>{
            this.props.dispatch({type:'MINUS_ONE'})
        }
    render()
    {
        return(
            <div className="App" >
             <header className="App-header">
            <div >
                <h1>COUNT {this.props.count}</h1>
                <button type="button" onClick={this.handleMax} style={buttonStyle}>Max</button>
                <button type="button" onClick={this.handleMin} style={buttonStyle}>Min</button>
            </div>
            </header>
            </div>
        )
    }
}
const mapStateTOProps=(state)=>{
    return{
        count:state.count
    }
}
export default connect(mapStateTOProps)(Counter)