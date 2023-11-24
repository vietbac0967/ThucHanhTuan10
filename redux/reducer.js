import { useState, useEffect } from "react";

const getUsers = async () => {
  try {
    const response = await fetch(
      "https://653f4b7b9e8bd3be29e02fc1.mockapi.io/users"
    );
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error("Error fetching data from the API");
      return [];
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    return [];
  }
};
const initialState = {
  users: [
    { id: 12, username: "bac", password: "213", role: "user" },
    { id: 20, username: "haianh", password: "2213", role: "admin" },
    { id: 30, username: "quocuong", password: "2213", role: "admin" },
  ],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    case "DELETE":
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        users: state.users.map((task) => {
          if (task.id === action.payload.id) {
            return action.payload;
          } else {
            return task;
          }
        }),
      };
    default:
      return state;
  }
};
