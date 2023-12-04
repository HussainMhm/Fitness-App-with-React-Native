import { View, Text, Pressable, Image, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import fitness from "../data/fitness";

const FitnessCards = () => {
    const navigation = useNavigation();
    const FitnessData = fitness;

    return (
        <ScrollView className="flex-1 mt-6 space-y-6" showsVerticalScrollIndicator={false}>
            {FitnessData.map((item, key) => {
                return (
                    <Pressable
                        key={key}
                        className="justify-center items-center"
                        onPress={() =>
                            navigation.navigate("Workout", {
                                id: item.id,
                                image: item.image,
                                exercises: item.excersises,
                            })
                        }
                    >
                        <Image
                            className="w-11/12 h-32 rounded-xl bg-slate-900"
                            source={{ uri: item.image }}
                        />

                        <View className="absolute left-7 top-4 bg-black/50 rounded-md px-1">
                            <Text className=" text-white text-lg font-bold">{item.name}</Text>
                        </View>

                        <View className="absolute left-7 bottom-3 bg-black/80 rounded-xl p-1">
                            <MaterialCommunityIcons name="lightning-bolt" size={24} color="white" />
                        </View>
                    </Pressable>
                );
            })}
        </ScrollView>
    );
};

export default FitnessCards;
