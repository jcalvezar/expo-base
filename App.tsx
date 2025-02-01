import "react-native-reanimated";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./src/stacks/AuthStack";
import UserStack from "./src/stacks/UserStack";
import { AuthProvider, useAuth } from "./src/context/AuthContext";

const AppNavigator: React.FC = () => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <UserStack /> : <AuthStack />;
};

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AuthProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
