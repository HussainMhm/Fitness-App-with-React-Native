import { useState } from "react";
import {
    View,
    Text,
    Image,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    TouchableOpacity,
} from "react-native";

const ExerciseScreen = ({ route }) => {
    const { exercises } = route.params;
    const [exerciseIndex, setExerciseIndex] = useState(0);
    const currentExercise = exercises[exerciseIndex];

    return (
        <SafeAreaView style={styles.safeArea} className="flex-1">
            <Image source={{ uri: currentExercise.image }} className="w-full h-96" />

            <Text className="text-2xl font-bold text-center mt-8">{currentExercise.name}</Text>

            <Text className="text-3xl font-extrabold text-center mt-8">
                x{currentExercise.sets}
            </Text>

            <TouchableOpacity className="bg-orange-600 mx-auto mt-8 px-20 py-2 rounded-2xl">
                <Text className="text-lg font-bold">DONE</Text>
            </TouchableOpacity>

            <View className="flex-row justify-center space-x-4">
                <TouchableOpacity className="bg-slate-400 mt-8 px-5 py-2 rounded-2xl">
                    <Text className="text-base font-bold">PREV</Text>
                </TouchableOpacity>
                
                <TouchableOpacity className="bg-slate-400 mt-8 px-5 py-2 rounded-2xl">
                    <Text className="text-base font-bold">SKIP</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ExerciseScreen;

const styles = StyleSheet.create({
    safeArea: {
        marginTop: StatusBar.currentHeight || 0,
    },
});
