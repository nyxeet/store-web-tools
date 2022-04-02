import React from 'react';
import { Styles } from './container-styles';

type Props = {
  children: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => {
  return (
    <Styles>
      <div className="container">{children}</div>
    </Styles>
  );
};

export default Container;
