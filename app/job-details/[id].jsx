import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";

import {
  Stack,
  useRouter,
  useLocalSearchParams,
  useGlobalSearchParams,
} from "expo-router";

import { COLORS, icons, SIZES } from "../../constants";
import useFetch from "../../hook/useFetch";
import styles from "./job-details.style";
import { Company, JobTabs, ScreenHeaderBtn } from "../../components";

const JobDetails = () => {
  const params = useGlobalSearchParams();
  const router = useRouter();

  const { data, isLoading, error, refetch } = useFetch("job-details", {
    job_id: params.id,
  });

  console.log("params", params.id);

  console.log("data", data);

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {};

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      >
        <>
          <ScrollView
            showsVerticalScrollIndicator={false}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View>
              <Text>hi</Text>
            </View>
            {/* {isLoading ? (
              <ActivityIndicator size="large" color={COLORS.primary} />
            ) : error ? (
              <Text>Something went wrong! </Text>
            ) : data?.length === 0 ? (
              <Text>No data</Text>
            ) : (
              <View style={styles.dataView}>
                <Text>{params.id} </Text>
                <Company />
                <JobTabs />
              </View>
            )} */}
          </ScrollView>
        </>
      </Stack.Screen>
    </SafeAreaView>
  );
};

export default JobDetails;
