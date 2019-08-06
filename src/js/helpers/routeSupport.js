import React from 'react';

let NoMatch = ({ location }) => {
  console.log(location);
  return (
    <div>
      <h3>
        No match for <code>{location.pathname}</code>
      </h3>
    </div>
  );
};

export default NoMatch;