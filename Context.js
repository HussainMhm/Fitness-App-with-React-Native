import React, { createContext, useState } from "react";

const FitnessContext = createContext();

const defaultFitnessState = {
    completedWorkouts: [],
    workout: 0,
    burnedCalories: 0,
    workoutTime: 0,
};

const FitnessProvider = ({ children }) => {
    const [fitnessState, setFitnessState] = useState(defaultFitnessState);

    return (
        <FitnessContext.Provider value={{ ...fitnessState, setFitnessState }}>
            {children}
        </FitnessContext.Provider>
    );
};

export { FitnessProvider, FitnessContext };


