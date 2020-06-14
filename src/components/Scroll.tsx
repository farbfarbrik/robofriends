import React from 'react';

type ScrollProps = {
  children: React.ReactNode;
};

const Scroll: React.SFC<ScrollProps> = (props) => {
  return (
    <div
      style={{
        overflowY: 'scroll',
        border: '3px solid black',
        height: '800px',
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
