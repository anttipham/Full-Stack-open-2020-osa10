import AsyncStorage from "@react-native-community/async-storage";
import Constants from "expo-constants";

export default class AuthStorage {
  constructor (namespace = "auth") {
    this.key = `${namespace}:token`;

    // debug
    if (Constants.manifest.extra.env === "development") {
      AsyncStorage.getItem(this.key).then((value) => {
        console.log(value);
      });
    }
  }

  /**
   * Get the access token for the storage
   * @returns {Promise<string | null>}
   */
  async getAccessToken() {
    return await AsyncStorage.getItem(this.key);
  }

  /**
   * Add the access token to the storage
   * @param {string} accessToken
   */
  async setAccessToken(accessToken) {
    // console.log(2, accessToken);
    await AsyncStorage.setItem(this.key, accessToken);
  }

  /**
   * Remove the access token from the storage
   */
  async removeAccessToken() {
    await AsyncStorage.removeItem(this.key);
  }
}