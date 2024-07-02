import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Card from "../components/Card";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [Select, setSelect] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = React.useState([
    {
      id: 1,
      name: "Top Headlines",
      category: "general",
    },
    {
      id: 5,
      name: "Sports",
      category: "sports",
    },
    {
      id: 2,
      name: "Business",
      category: "business",
    },
    {
      id: 3,
      name: "Entertainment",
      category: "entertainment",
    },
    {
      id: 4,
      name: "Health",
      category: "health",
    },
    {
      id: 6,
      name: "Science",
      category: "science",
    },
    {
      id: 7,
      name: "Technology",
      category: "technology",
    },
  ]);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=34dcf62c6b4f409790d9dbd15475419d&category=${categories[Select].category}`
      );

      const data = await response.json();
      setData(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const getData2 = async (category) => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=34dcf62c6b4f409790d9dbd15475419d&category=${category}`
      );

      const data = await response.json();
      setData(data.articles);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator color={"#0F4C75"} size={36} />
        </View>
      ) : (
        <View style={styles.container}>
          <Header />
          <View style={styles.categories}>
            <FlatList
              data={categories}
              horizontal
              showsHorizontalScrollIndicator={false}
              renderItem={({ item, index }) => (
                <TouchableOpacity
                  style={[
                    styles.categoryButton,
                    index === Select
                      ? styles.selectedCategory
                      : styles.defaultCategory,
                  ]}
                  onPress={() => {
                    setSelect(index);
                    getData2(categories[index].category);
                  }}
                >
                  <Text
                    style={[
                      styles.categoryText,
                      index === Select
                        ? styles.selectedText
                        : styles.defaultText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              )}
            />
          </View>
          <View style={styles.cards}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              renderItem={({ item, index }) => {
                return (
                  <Card item={item} navigation={navigation} index={index} />
                );
              }}
            />
          </View>
        </View>
      )}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
  },
  categories: {
    paddingHorizontal: 4,
    paddingVertical: 8,
  },
  categoryButton: {
    paddingHorizontal: 16,
    paddingVertical: 6,
    marginRight: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
  },
  selectedCategory: {
    backgroundColor: "#0F4C75",
  },
  defaultCategory: {
    backgroundColor: "#e0e0e0",
  },
  categoryText: {
    fontSize: 16,
  },
  selectedText: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  defaultText: {
    color: "#606060",
  },
  cards: {
    flex: 1,
    marginBottom: 16,
    paddingHorizontal: 2,
  },
});
