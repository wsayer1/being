import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet, Alert } from "react-native";
import { supabase } from "../../lib/supabase"; // Import your Supabase client

export default function ProfileScreen() {
  // Form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [message, setMessage] = useState("");

  // Function to insert data into 'users' table
  const addUser = async () => {
    // Basic form validation
    if (!name || !email || !bio) {
      Alert.alert("Error", "All fields are required!");
      return;
    }

    const { data, error } = await supabase.from("users").insert([
      {
        name: name,
        email: email,
        bio: bio,
      },
    ]);

    if (error) {
      console.error("Error adding user:", error.message);
      setMessage(`Error: ${error.message}`);
    } else {
      console.log("User added:", data);
      setMessage("User added successfully!");

      // Reset fields
      setName("");
      setEmail("");
      setBio("");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add User</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
      />
      <Button title="Add User" onPress={addUser} />
      {message ? <Text style={styles.message}>{message}</Text> : null}
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  message: {
    marginTop: 10,
    textAlign: "center",
    color: "green",
  },
});
