import { View, Text, SafeAreaView, StyleSheet, Image, ScrollView, StatusBar } from "react-native";
import React from "react";
import FitnessCards from "../components/FitnessCards";

const HomeScreen = () => {
    return (
        <SafeAreaView className="flex-1" style={styles.safeArea}>
            <View className="bg-orange-500 p-4 pb-10">
                <Text className="text-xl font-bold text-white mb-4 mx-auto">Home Workout</Text>
                <View className="flex-row justify-between space-x-2">
                    <View className="justify-center items-center">
                        <Text className="text-white text-lg font-bold">0</Text>
                        <Text className="text-white text-lg ">Workouts</Text>
                    </View>
                    <View className="justify-center items-center">
                        <Text className="text-white text-lg font-bold">0</Text>
                        <Text className="text-white text-lg ">Calories</Text>
                    </View>
                    <View className="justify-center items-center">
                        <Text className="text-white text-lg font-bold">0</Text>
                        <Text className="text-white text-lg ">Minutes</Text>
                    </View>
                </View>
            </View>

            <FitnessCards />
        </SafeAreaView>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    safeArea: {
        marginTop: StatusBar.currentHeight || 0,
    },
});
