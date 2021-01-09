import React from "react";

interface Props {
  name: string;
  age?: number;
}

interface State {
  defAge: number;
}

class ClassComponent02 extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      defAge: props.age || 1,
    };
  }
  render() {
    return <div>
      name: {this.props.name}
      defAge: {this.state.defAge}
    </div>;
  }
}

export default ClassComponent02;
