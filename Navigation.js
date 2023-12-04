import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import WorkoutScreen from "./screens/WorkoutScreen";
import ExerciseScreen from "./screens/ExerciseScreen";

const Stack = createNativeStackNavigator();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Workout" component={WorkoutScreen} />
                <Stack.Screen name="Exercise" component={ExerciseScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;
