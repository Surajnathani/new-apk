import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import moment from "moment";

const Card = ({ item, navigation, index }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("NewsViewer", {
          url: item.url,
        })
      }
    >
      <View style={styles.cardContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.sourceText}>{item.source.name}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.infoContainer}>
            <Text style={styles.author}>{item.author}</Text>
            <Text style={styles.publishedAt}>
              {moment(item.publishedAt).startOf("day").fromNow()}
            </Text>
          </View>
        </View>

        <Image
          source={{
            uri: item.urlToImage
              ? item.urlToImage
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTULSPiQKGEcCtCxrkr4t9Ub8U-Jwzv3kXu2RMOzQoihg&s",
          }}
          style={styles.image}
          resizeMethod="resize"
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 8,
    marginBottom: 8,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    paddingHorizontal: 8,
    marginTop: 8,
  },
  image: {
    width: "30%",
    height: 80,
    borderRadius: 8,
  },
  title: {
    fontSize: 14,
    color: "#333",
    fontWeight: "600",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },
  author: {
    fontSize: 12,
    color: "#666",
  },
  publishedAt: {
    fontSize: 12,
    color: "#666",
  },
  sourceText: {
    fontSize: 12,
    paddingVertical: 4,
  },
});

export default Card;