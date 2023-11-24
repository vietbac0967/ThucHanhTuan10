import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet, Text, View } from "react-native";

export default function Screen1() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/users")
      .then((resp) => resp.json())
      .then((json) => setUsers(json));
  });

  const Item = ({ item }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 14, fontWeight: "300" }}>{item.username}</Text>
      <Text style={{ fontSize: 14, fontWeight: "300" }}>{item.password}</Text>
      <Text style={{ fontSize: 14, fontWeight: "300" }}>{item.role}</Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable style={{ marginHorizontal: 10 }}>
          <Text style={{ color: "green" }}>EDIT</Text>
        </Pressable>
        <Pressable style={{ marginHorizontal: 10 }}>
          <Text style={{ color: "red" }}>DELETE</Text>
        </Pressable>
      </View>
    </View>
  );

  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text style={{ fontSize: 15, color: "black", fontWeight: "bold" }}>
        User managerment
      </Text>
      <FlatList data={users} renderItem={Item}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({});
