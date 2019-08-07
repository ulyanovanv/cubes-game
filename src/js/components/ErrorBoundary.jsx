import React, { Fragment } from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isErrorOccured: false
    }
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });

    console.log(error, info);
    // logErrorToMyService(error, info);
  }

  render() {
    return (
      <Fragment>
        {this.state.isErrorOccured &&
          <h1>Failed</h1>
        }
        {!this.state.isErrorOccured && this.props.children}
      </Fragment>
    )
  }
}