import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "./Navigation";
import { FitnessProvider } from "./Context";

export default function App() {
    return (
        <FitnessProvider>
            <Navigation />
        </FitnessProvider>
    );
}
