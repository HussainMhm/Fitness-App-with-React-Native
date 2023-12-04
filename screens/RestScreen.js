import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const RestScreen = () => {
    const navigation = useNavigation();
    const [timeLeft, setTimeLeft] = useState(3);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 0) {
                    clearInterval(intervalId);
                    navigation.goBack();
                    return 0; // Reset timeLeft to 0 when the countdown is complete
                }
                return prevTime - 1;
            });
        }, 1000);

        // Clean up the interval when the component is unmounted
        return () => clearInterval(intervalId);
    }, [navigation]);

    return (
        <SafeAreaView>
            <Image
                source={{
                    uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/fl_progressive,f_auto,q_auto:eco,w_500,ar_500:300,c_fit/dpr_2/image/carefit/bundle/CF01032_magazine_2.png",
                }}
                className="w-full h-96"
            />

            <Text className="text-3xl font-extrabold text-center mt-14">TAKE A BREAK!</Text>
            <Text className="text-5xl font-extrabold text-center mt-14">{timeLeft}</Text>
        </SafeAreaView>
    );
};

export default RestScreen;

const styles = StyleSheet.create({});
