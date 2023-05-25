import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  camera: {
    width: width - 32,
    height: 240,
    backgroundColor: "#E8E8E8",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    // position: 'relative'
  },
  photo: {
    // position: 'absolute',

  },
  image: {
    width: width - 32,
    height: 240,
    // resizeMode: 'center',
  },
  cameIconWrapper: {
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  cameraIcon: {
    fontSize: 20,
    color: "#BDBDBD",
  },
  text: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
    marginBottom: 32,
  },
  inputPostTitle: {
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 32,
  },
  locationWrapper: {
    flexDirection: "row",
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 8,
    marginBottom: 32,
  },
  locationIcon: {
    fontSize: 18,
  },
  inputPostLocation: {
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
  },
  button: {
    paddingVertical: 16,
    backgroundColor: "#F6F6F6",
    alignItems: "center",
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
    color: "#BDBDBD",
  },
});

export default styles;
