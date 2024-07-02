import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import Card from "../components/Card";

const Search = ({ navigation }) => {
  const apiKey = process.env.EXPO_PUBLIC_API_KEY;
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);

  const searchNews = async (text) => {
    setSearchText(text);
    if (text.length > 2) {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&q=${text}`
        );
        const data = await response.json();
        setData(data.articles);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeftIcon color={"white"} size={18} />
        </TouchableOpacity>
        <Text>{"   "}</Text>
        <TextInput
          placeholder="Search here..."
          value={searchText}
          placeholderTextColor={"white"}
          onChangeText={(text) => searchNews(text)}
          style={styles.searchInput}
        />
      </View>

      <View style={styles.cardList}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={data}
          renderItem={({ item, index }) => (
            <Card item={item} navigation={navigation} index={index} />
          )}
        />
      </View>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#0F4C75",
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
  },
  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "white",
  },
  cardList: {
    marginTop: 16,
    paddingHorizontal: 12,
  },
});
