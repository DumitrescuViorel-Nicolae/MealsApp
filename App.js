import "react-native-gesture-handler";
import { StatusBar, AppRegistry } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CategoriesScreen from "./screens/CategoriesScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "@expo/vector-icons";
import { Provider } from "react-redux";
import { store } from "./Store/redux/redux";

AppRegistry.registerComponent("app", () => App);

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#351401" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: {
          backgroundColor: "#351401",
        },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#351401",
        drawerActiveBackgroundColor: "#e4baa1",
      }}
    >
      <Drawer.Screen
        name={"Categories"}
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="list" />;
          },
        }}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons color={color} size={size} name="star" />;
          },
        }}
        name="Favorites"
        component={FavoritesScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: { backgroundColor: "#351401" },
              headerTintColor: "white",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              options={{
                headerShown: false,
              }}
              component={DrawerNavigator}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetail" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>

      {/* </FavoritesContextProvider> */}
    </>
  );
}
