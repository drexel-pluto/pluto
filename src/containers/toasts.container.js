import React from "react";
import { View } from 'react-native'
import { connect } from "react-redux";
import Toast from "../components/Toast";
import { removeToast } from "../redux/reducers/toast.reducer";

const Toasts = ({ removeToast, toasts }) => {
  return (
    <View style ={{position: "absolute", right: 1, left: 1}}>
      {toasts.map(toast => {
        const { id } = toast;
        return (
          <Toast {...toast} key={id} onDismissClick={() => {
            removeToast(id)
            console.log("PRESSED")
          }} />
        );
      })}
    </View>
  );
};

const mapDispatchToProps = {
  removeToast
};

const mapStateToProps = state => ({
  toasts: state.toasts
});

export default connect(mapStateToProps, mapDispatchToProps)(Toasts);