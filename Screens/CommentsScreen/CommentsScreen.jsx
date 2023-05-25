import React from "react";
import { Text, View, FlatList, Image } from "react-native";
const avatar = require('../../assets/avatar.png')

function CommentsScreen() {
  return (
    <View style={{ alignItems: 'center', paddingHorizontal: 16, paddingVertical: 32, gap: 32}}>
      <Image source={require('../../assets/PostImage-default.png')} style={{height: 240}}/>
      <View>
        <FlatList
          data={[
            {
              avatar: avatar,
              comment:
                "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            },
            {
              avatar: avatar,
              comment:
                "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            },
            {
              avatar: avatar,
              comment:
                "Really love your most recent photo. I’ve been trying to capture the same thing for a few months and would love some tips!",
            },
          ]}
          renderItem={({ item, index }) => (
            <View key={index} style={{flexDirection: 'row', gap: 16}}>
              <Image
                source={item.avatar}
                style={{ width: 28, height: 28 }}
              />
              <Text>{item.comment}</Text>
            </View>
          )}
          contentContainerStyle={{gap:16}}
        />
      </View>
    </View>
  );
}

export default CommentsScreen;
