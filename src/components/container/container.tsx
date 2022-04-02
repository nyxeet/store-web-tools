import React from 'react';
import { Styles } from './container-styles';

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <Styles>
      <div className="container">{children}</div>
    </Styles>
  );
};

export default Container;
