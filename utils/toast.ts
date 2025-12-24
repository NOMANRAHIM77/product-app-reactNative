import { Platform, ToastAndroid, Alert } from "react-native";

export const showToast = (message: string, title = "Error") => {
  if (Platform.OS === "android") {
    ToastAndroid.show(message, ToastAndroid.SHORT);
  } else {
    Alert.alert(title, message);
  }
};
