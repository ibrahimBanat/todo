const If = props => {
  if (props.condition) {
    return props.children;
  } else {
    return null;
  }
};

const Else = props => {
  if (props.condition) {
    return null;
  } else {
    return props.children;
  }
};
export { If, Else };
