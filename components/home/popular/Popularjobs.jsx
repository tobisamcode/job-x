import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { router, useRouter } from "expo-router";

import styles from "./popularjobs.style";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";

const Popularjobs = () => {
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("search", {
    query: "React developer",
    num_pages: 1,
  });

  console.log(data);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error occurred!</Text>; // Render an error message
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {/* <FlatList
          data={data}
          renderItem={({ item }) => <PopularJobCard item={item} />}
          keyExtractor={(item) => item?.job_id}
          contentContainerStyle={{ columnGap: SIZES.medium }}
          showsHorizontalScrollIndicator={false}
          horizontal
        /> */}

        <Text>Hi</Text>
      </View>
    </View>
  );
};

export default Popularjobs;
