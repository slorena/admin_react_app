import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 18px;
  height: 18px;
  background-color: red;
  border: 2px solid #fff;
  border-radius: 100%;
  user-select: none;
  transform: translate(-50%, -50%);
`;

class Marker extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { alt, onClick } = this.props;
        return <Wrapper alt={alt} onClick={() => onClick && onClick()} />
    }
}

export default Marker;