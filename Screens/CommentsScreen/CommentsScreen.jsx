import React, { useState } from "react";
import {
  Text,
  View,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../../redux/comments/commentsSlice";
import { useRoute } from "@react-navigation/native";
const avatar = require("../../assets/avatar.png");

function CommentsScreen() {
  const [newComment, setNewComment] = useState("");
  const [comments, setComments] = useState([])
  // const comments = useSelector((state) => state.comments.comments);
  const dispatch = useDispatch();
  const {
    params: { postId, photo },
  } = useRoute();

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      const comment = {
        avatar: avatar,
        comment: newComment.trim(),
      };

      dispatch(
        addComment({
          postId: postId,
          commentId: new Date().toISOString(),
          comment: newComment.trim(),
        })
      );
      setComments((prev) => [...prev, comment]);
      setNewComment("");
    }
  };
  console.log(comments);

  return (
    <View
      style={{
        alignItems: "center",
        paddingHorizontal: 16,
        paddingVertical: 32,
        gap: 32,
      }}
    >
      <Image source={photo} style={{ height: 240, width: "100%" }} />
      <View style={{ flexDirection: "row", gap: 16 }}>
        <TextInput
          placeholder="Add a comment..."
          value={newComment}
          onChangeText={setNewComment}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: "gray",
            borderRadius: 4,
            paddingHorizontal: 8,
          }}
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Text style={{ color: "blue" }}>Post</Text>
        </TouchableOpacity>
      </View>
      <View style={{alignItems: 'flex-start', width: '100%'}}>
        <FlatList
          // data={[
          //   {
          //     avatar: avatar,
          //     comment:
          //       "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          //   },
          //   {
          //     avatar: avatar,
          //     comment:
          //       "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          //   },
          //   {
          //     avatar: avatar,
          //     comment:
          //       "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
          //   },
          // ]}
          data={comments}
          renderItem={({ item, index }) => (
            <View key={index} style={{ flexDirection: "row", gap: 16, alignContent: 'flex-start' }}>
              <Image source={item.avatar} style={{ width: 28, height: 28 }} />
              <Text>{item.comment}</Text>
            </View>
          )}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>
    </View>
  );
}

export default CommentsScreen;
