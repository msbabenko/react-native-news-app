import AsyncStorage from '@react-native-async-storage/async-storage';

// -- Getting Token
export const getToken = async () => {
  try {
    const value = await AsyncStorage.getItem('@auth_token');
    if (value !== null) {
      return value;
    }
  } catch (e) {
    return null;
  }
};

// -- Setting Token
export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('@auth_token', token);
  } catch (e) {
    return null;
  }
};