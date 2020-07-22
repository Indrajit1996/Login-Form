import React from 'react';
export default (ToWrap) => {
  return (props) => {
      debugger
    if (props.loading) {
      return (
        <Loader />
      )
    } else {
      return (
        <ToWrap {...props} />      
      )
    }
  }
}

export const Loader = (props) => (
  <div style={{
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '10',
    height: '100%',
    width: '100%',
    margin: '0',
    background: 'rgba(255,255,255,.7)'
  }}>
    <div className="spinner-loader">
    </div>
  </div>
)