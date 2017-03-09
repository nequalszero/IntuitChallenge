import React from 'react';
import classNames from 'classnames';

// Component displaying fetch API call status and a button for retrying API call.
const LoadingBar = ({loading, errors, handleButtonClick}) => {
  // Function for toggling class of button.
  const buttonClass = () => {
    return classNames({
      'enabled': !loading,
      'disabled': loading
    })
  }

  // Button click handler for dispatching new API call.
  const handleClick = () => {
    if (!loading) handleButtonClick();
  }

  return (
    <div className="loading-bar">
      <span>
        Status:
        {loading && <span className="status fetching">Fetching Information</span>}
        {!loading && errors.length === 0 && <span className="status success">Successful</span>}
        {!loading && errors.length > 0 && <span className="status error">{errors}</span>}
      </span>
      <button className={buttonClass()} onClick={handleClick}>
        Retry
      </button>
    </div>
  );
}

export default LoadingBar;
