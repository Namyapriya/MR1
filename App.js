import React from "react";
import HomeScreen from "./screens/Home";
import RecommendedMoviesScreen from "./screens/Recommendation";
import PopularMoviesScreen from "./screens/Popular";
import EmotionScreen from "./screens/Emotions";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import { RFValue } from "react-native-responsive-fontsize";

export default function App() {
  return <AppContainer />;
}

const AppTopNavigation = createMaterialTopTabNavigator({
  RecommendedMovies: {
    screen: RecommendedMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Recommended",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#FFFDD0" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },
  PopularMovies: {
    screen: PopularMoviesScreen,
    navigationOptions: {
      tabBarLabel: "Popular",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#FFFDD0" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#000" }
      }
    }
  },
  EmotionMovies: {
    screen: EmotionScreen,
    navigationOptions: {
      tabBarLabel: "Emotions",
      tabBarOptions: {
        tabStyle: { backgroundColor: "#FFFDD0" },
        labelStyle: { color: "#000" },
        indicatorStyle: { backgroundColor: "#FFFDD0" }
      }
    }
  }
});

const AppStackNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    AppTopNav: {
      screen: AppTopNavigation,
      navigationOptions: {
        headerBackTitle: null,
        headerTintColor: "#fff",
        headerTitle: "Recommended Movies",
        headerStyle: {
          backgroundColor: "blue"
        },
        headerTitleStyle: {
          color: "#fff",
          fontWeight: "bold",
          fontSize: RFValue(18)
        }
      }
    }
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppStackNavigator);
