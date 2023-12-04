import {
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    StatusBar,
    Image,
    ImageBackground,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const WorkoutScreen = ({ navigation, route }) => {
    const { id, image, exercises } = route.params;

    return (
        <SafeAreaView style={styles.safeArea} className="flex-1 bg-white">
            <ImageBackground source={{ uri: image }} className="w-full h-48">
                <TouchableOpacity
                    className="bg-black/50 absolute p-1 left-2 top-4 rounded-xl"
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons
                        name="arrow-back-outline"
                        size={32}
                        color="white"
                        // style={{ marginTop: 12, marginLeft: 12 }}
                    />
                </TouchableOpacity>
            </ImageBackground>

            <ScrollView showsVerticalScrollIndicator={false}>
                {exercises.map((exercise, index) => {
                    return (
                        <TouchableOpacity
                            key={index}
                            className="flex-row m-4 p-2 space-x-6 border-r-4 border-gray-400"
                        >
                            <Image
                                source={{ uri: exercise.image }}
                                className="w-24 h-24 bg-slate-200"
                            />
                            <View className="mt-4">
                                <Text className="text-lg font-bold">{exercise.name}</Text>
                                <Text className="text-lg text-gray-700">X{exercise.sets}</Text>
                            </View>
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>

            <View className="bg-slate-50 p-4 justify-center items-center">
                <TouchableOpacity
                    className="bg-orange-600 py-2 px-8 rounded-xl"
                    onPress={() => navigation.navigate("Exercise", { exercises: exercises })}
                >
                    <Text className="text-white text-base font-bold">Start</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default WorkoutScreen;

const styles = StyleSheet.create({
    safeArea: {
        marginTop: StatusBar.currentHeight || 0,
    },
});
