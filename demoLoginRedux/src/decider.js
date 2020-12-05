import React, { Component } from 'react'
import {AppContext} from './context'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import { AppContainer } from "./navigation";
import * as util from "./utilities";
import {Text} from 'react-native'

export default class decider extends Component {
    constructor(props){
        super(props)
        this.state={}
    }
    render() {
        return (
            <AppContext.Provider>
                <AppContainer
                  ref={(navigatorRef) => {
                    util.setTopLevelNavigator(navigatorRef);
                }}
                />
            </AppContext.Provider>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {};
//   };
  
//   const mapDispatchToProps = (dispatch) => {
//     return bindActionCreators({}, dispatch);
//   };
//   export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(Decider);
  