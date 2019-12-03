import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { connect } from "react-redux";

import { error, errorMessage } from "../../selectors/errorsSelector";

import { cleanErrors } from "../../actions/global";

const Toaster = ({ error, errorMessage, cleanErrors }) => {
  useEffect(() => {
    if (error) {
      toast.error(errorMessage);
      cleanErrors();
    }
  }, [error]);
  return <ToastContainer />;
};

const mapStateToProps = (state) => {
  return {
    error: error(state),
    errorMessage: errorMessage(state)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    cleanErrors: () => dispatch(cleanErrors)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Toaster);
