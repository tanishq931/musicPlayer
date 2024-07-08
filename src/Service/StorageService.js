import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  async getData(key) {
    try {
      let data = await AsyncStorage.getItem(key);
      return JSON.parse(data);
    } catch (error) {
      console.log(error);
    }
  }
  async setData(key, val) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(val));
    } catch (error) {
      console.log(error);
    }
  }
}
export default new StorageService();
