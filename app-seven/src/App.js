import React, { Component } from "react";

import { Title } from "./styles";
import { TitleSmall } from "./styles";

class App extends Component {
  render() {
    return (
      <div>
        <Title fontSize={20}>
          Hello Bakka
          <span>Texto secundario</span>
        </Title>

        <TitleSmall>Menor texto</TitleSmall>
      </div>
    );
  }
}

export default App;
