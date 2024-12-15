import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../../context/AuthContext';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  // Tạo thông tin đăng nhập giả
  const fakeUser = {
    username: 'hoa',
    password: '123',
  };

  const handleLogin = async () => {
    // Kiểm tra tên người dùng và mật khẩu với thông tin giả
    if (username === fakeUser.username && password === fakeUser.password) {
      // Đăng nhập thành công
      login({ id: '1', username }, 'fake-token'); // Thay bằng token thật sau này
      Alert.alert('Success', 'Login successful!');
    } else {
      Alert.alert('Error', 'Incorrect username or password.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, marginBottom: 10, borderRadius: 5 },
});

export default LoginScreen;
