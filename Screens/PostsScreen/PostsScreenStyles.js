import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: '#fff'
  },
  profileWrapper: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
    marginBottom: 32,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 16,
  },
  name: {
    color: "#212121",
    fontWeight: 700,
    fontSize: 13,
    lineHeight: 15,
  },
  email: {
    color: "#212121",
    fontWeight: 400,
    fontSize: 11,
    lineHeight: 13,
  },
  postImage: {
    width: width - 32,
    borderRadius: 8,
    marginBottom: 8,
  },
  postTitle: {
    color: "#212121",
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 19,
    marginBottom: 10,
  },
  postDetailsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  postDetailsIcon: {
    width: 18,
    height: 18,
    fontSize: 18,
    marginRight: 8,
  },
  postDetailsText: {
    fontWeight: 400,
    fontSize: 16,
    lineHeight: 19,
  },
  textUnderlined: {
    textDecorationLine: 'underline'
  }
});

export default styles;
