import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import Welcome from '../Welcome';
import Register from '../Register'
import Mainscreen from '../MainScreen';

export default class Root extends React.Component{
    componentDidMount(){
        this.props.FetchProducts.bind(null)();
        this.props.FetchRecommends.bind(null)(this.props.login.age,this.props.login.gender);
    }
    render(){
        return (
            <BrowserRouter>
              <Route exact path='/' render={({history})=>{
                    if(!this.props.login.started){
                        return <Welcome history={history} {...this.props}/>
                    }
                    else if(!this.props.login.recognized){
                        return <Redirect to={{pathname: '/register'}}/>
                    }
                    else{
                        return <Redirect to={{pathname: '/icart'}}/>
                    }
                }}/>
              <Route exact path='/register' render={()=>{
                    if(this.props.login.started && !this.props.login.recognized){
                        return <Register {...this.props}/>
                    }
                    else if(this.props.login.started && this.props.login.recognized){
                        return <Redirect to={{pathname: '/icart'}}/>
                    }
                    else{
                        return <Register {...this.props}/>
                        // return <Redirect to={{pathname: '/'}}/>
                    }
                }}/>
              <Route exact path='/icart' render={()=>{
                    if(this.props.login.started && this.props.login.recognized){
                        return <Mainscreen {...this.props}/>
                    }else{
                        return <Mainscreen {...this.props}/>
                        // return <Redirect to={{pathname: '/'}}/>
                    }
                }}/>
            </BrowserRouter>
        );
    }
}