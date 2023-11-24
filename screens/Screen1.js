import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { Pressable } from "react-native";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
export default function Screen1({ navigation }) {
  const [users, setUsers] = useState([]);
  const dispatch = useDispatch();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const selectUser = useSelector((state) => state.users);
  useEffect(() => {
    fetch("https://653f4b7b9e8bd3be29e02fc1.mockapi.io/users")
      .then((resp) => resp.json())
      .then((json) => setUsers(json));
  }, []);
  const Item = ({ item }) => (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 14, fontWeight: "300", paddingHorizontal: 10 }}>
        {item.username}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "300", paddingHorizontal: 10 }}>
        {item.password}
      </Text>
      <Text style={{ fontSize: 14, fontWeight: "300", paddingHorizontal: 10 }}>
        {item.role}
      </Text>
      <View style={{ flexDirection: "row" }}>
        <Pressable
          style={{ marginHorizontal: 10 }}
          onPress={() => navigation.navigate("Edit", { item: item })}
        >
          <Text style={{ color: "green" }}>EDIT</Text>
        </Pressable>
        <Pressable
          style={{ marginHorizontal: 10 }}
          onPress={() => dispatch({ type: "DELETE", payload: item.id })}
        >
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

      <TextInput
        value={username}
        style={styles.textInput}
        onChangeText={setUserName}
        placeholder="Enter user name"
      ></TextInput>

      <TextInput
        value={password}
        style={styles.textInput}
        onChangeText={setPassword}
        placeholder="Enter password"
      ></TextInput>

      <TextInput
        value={role}
        style={styles.textInput}
        onChangeText={setRole}
        placeholder="Enter role"
      ></TextInput>

      <Pressable
        onPress={() => {
          dispatch({
            type: "ADD",
            payload: {
              id: users.length + 1,
              username: username,
              password: password,
              role: role,
            },
          });
          setPassword("");
          setUserName("");
          setRole("");
        }}
        style={{
          borderRadius: 5,
          backgroundColor: "green",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "white",
            textAlign: "center",
            padding: 5,
          }}
        >
          ADD USER
        </Text>
      </Pressable>

      <FlatList data={users.concat(selectUser)} renderItem={Item}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderRightColor: "green",
    borderRadius: 5,
    marginVertical: 10,
  },
});
