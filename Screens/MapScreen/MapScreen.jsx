import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import * as Location from "expo-location";

function MapScreen() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setCurrentLocation(coords);
    })();
  }, []);

  const { params: userLocation } = useRoute();
  console.log(userLocation);

  const markerCoordinate = userLocation || currentLocation;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapStyle}
        region={{
          latitude: markerCoordinate?.latitude || 0,
          longitude: markerCoordinate?.longitude || 0,
          // latitudeDelta: 0.0922,
          // longitudeDelta: 0.0421,
        }}
        mapType="standard"
        minZoomLevel={15}
        onMapReady={() => console.log("Map is ready")}
        onRegionChange={() => console.log("Region change")}
      >
        {markerCoordinate && (
          <Marker
            title="I am here"
            coordinate={markerCoordinate}
            description="Hello"
          />
        )}
      </MapView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

export default MapScreen;
