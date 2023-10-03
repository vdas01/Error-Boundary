import React from "react";

class ErrorBoundary extends React.Component{
    state = {
      error : ""
    }

   static getDerivedStateFromError(err){
      return {
        error : err
      }
    }

    componentDidCatch(err,info){
      console.log('error is: ', err);
      console.log('info is: ',info);
    }

    render(){
      if(this.state.error){
        return (
          <div>
            <h2>some error occured:</h2>
            {/* <p>here is what happened:- {this.state.error}</p> */}
          </div>
        )
      }
      return this.props.children;
    }
}

export default ErrorBoundary;