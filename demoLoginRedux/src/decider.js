import React, { Component } from 'react'
import { connect } from "react-redux";
import {AppContext} from './context'
import  AppContainer  from "./navigation";


class Decider extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    
    render() {
        return (
             <AppContext.Provider>
                <AppContainer />
            </AppContext.Provider>
        )
    }
}
const mapStateToProps = (state) => {
    return {};
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {};
  };
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Decider);
  