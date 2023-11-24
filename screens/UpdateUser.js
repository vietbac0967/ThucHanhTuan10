import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useDispatch } from "react-redux";
import React, { useState } from "react";
export default function UpdateUser({ navigation, route }) {
  const { item } = route.params;
  const [username, setUserName] = useState(item.username);
  const [password, setPassword] = useState(item.password);
  const [role, setRole] = useState(item.role);
  const dispatch = useDispatch();

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
            type: "UPDATE",
            payload: {
              id: item.id,
              username: username,
              password: password,
              role: role,
            },
          });
          navigation.goBack();
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
          Update User
        </Text>
      </Pressable>
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
