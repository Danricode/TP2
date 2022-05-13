import React, { Component } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";
import tp2 from "./tp2.json";

const canvas = () => {
  return (
    <View>
      <FlatList
        data={tp2}
        showsVerticalScrollIndicator={true}
        renderItem={({ item }) => (
          <View style={styles.container}>
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.titleDescription}>
              <Image style={styles.image} source={{ uri: item.img }} />
              <Text style={styles.description}>{item.desc}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};
export default canvas;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 0,
    padding: 30,
    backgroundColor: "#FFD133",
  },
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  description: {
    marginTop: 10,
    fontSize: 18,
  }
});
