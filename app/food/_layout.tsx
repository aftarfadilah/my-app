import { Tabs } from "expo-router";
import { TabBarIcon } from "@/components/navigation/TabBarIcon";

export default function FoodLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="home" color={focused ? "blue" : "grey"} />
          ),
        }}
      />

      <Tabs.Screen
        name="promo"
        options={{
          title: "Promo",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="happy" color={focused ? "blue" : "grey"} />
          ),
        }}
      />

      <Tabs.Screen
        name="order"
        options={{
          title: "Order",
          tabBarIcon: ({ focused }) => (
            <TabBarIcon name="cart" color={focused ? "blue" : "grey"} />
          ),
        }}
      />
    </Tabs>
  );
}
