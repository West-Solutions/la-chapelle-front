import React, { createContext } from "react";
import PropType from "prop-types";

const WebsiteContext = createContext({
  updateState: () => {}
});

class WebsiteProvider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  updateState = (key, value, callback = () => {}) => {
    this.setState({ [key]: value }, () => {
      callback();
    });
  };

  render() {
    const value = { ...this.state, updateState: this.updateState };
    return (
      <WebsiteContext.Provider value={value}>
        {this.props.children}
      </WebsiteContext.Provider>
    );
  }
}

WebsiteProvider.propTypes = {
  children: PropType.oneOfType([
    PropType.element,
    PropType.arrayOf(PropType.element)
  ]).isRequired
};

export { WebsiteContext, WebsiteProvider };
