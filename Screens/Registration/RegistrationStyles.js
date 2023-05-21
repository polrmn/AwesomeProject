import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "center",
    justifyContent: "flex-end",
  },
  container: {
    paddingTop: 92,
    paddingLeft: 16,
    // paddingBottom: 78,
    paddingRight: 16,
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    position: "relative",
  },
  avatarWrapper: {
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    position: "absolute",
    top: -60,
    left: width * 0.5,
    transform: [{ translateX: -120 * 0.5 }, { translateY: 0 }],
    borderRadius: 16,
  },
  buttonContainer: {
    position: "absolute",
    bottom: 14,
    right: -12.5,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    borderWidth: 1,
    borderColor: "#FF6C00",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontWeight: 500,
    fontSize: 30,
    marginBottom: 33,
  },
  input: {
    padding: 16,
    fontSize: 16,
    lineHeight: 19,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    marginBottom: 16,
  },
  inputPasswordWrapper: {
    padding: 16,
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    // marginBottom: 43,
    flexDirection: "row",
    alignItems: "center",
  },
  intupPassword: {
    flex: 1,
    fontSize: 16,
    lineHeight: 19,
  },
  toggleVisibilityButton: {
    color: "#1B4371",
    fontSize: 16,
    lineHeight: 19,
  },
  submitButton: {
    backgroundColor: "#FF6C00",
    alignItems: "center",
    padding: 16,
    borderRadius: 100,
    marginTop: 43,
    marginBottom: 16,
  },
  submitText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
  },
  link: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 19,
    color: "#1B4371",
  },
  focused: {
    backgroundColor: "#fff",
    borderColor: "#FF6C00",
  },
});

export default styles;