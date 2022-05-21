import { connect } from "react-redux";
import App from "../App";
import { increment, reset, changeorder } from "../action/Action";

export const mapStateToProps = (state) => {
  return {
    data: state.val.count,
    order: state.val.order
  };
};
export const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(increment()),
  reset: () => dispatch(reset()),
  changeorder: () => dispatch(changeorder())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
