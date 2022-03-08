import { makeAutoObservable } from "mobx";
import instance from "./instance";
import decode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  setUser = (token) => {
    this.user = decode(token);
    this.storeData();
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  };

  unSetUser = () => {
    this.removeData();
    this.user = null;
  };

  signup = async (user) => {
    try {
      // user = { username: "Ali Ahmad", password: "123KDD"}
      const res = await instance.post("/api/user/singup", user);
      this.setUser(res.data.token);
      // console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  signin = async (user) => {
    try {
      // user = { username: "Ali Ahmad", password: "123KDD"}
      const res = await instance.post("/api/user/singin", user);
      this.setUser(res.data.token);
      // console.log(res.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  storeData = async () => {
    try {
      const jsonValue = JSON.stringify(this.user);
      await AsyncStorage.setItem("@authUser", jsonValue);
    } catch (e) {
      // saving error
    }
  };
  getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("@authUser");
      jsonValue != null
        ? (this.user = JSON.parse(jsonValue))
        : (this.user = null);
    } catch (e) {
      // error reading value
    }
  };

  removeData = async () => {
    try {
      await AsyncStorage.removeItem("@authUser");
    } catch (error) {
      console.log(error);
    }
  };

  checkForToken = async () => {
    this.getData();
    const token = this.user;
    if (token) {
      const decodedToken = decode(token);
      console.log(decodedToken);
      if (Date.now() < +decodedToken.exp) {
        this.setUser(token);
      } else this.unSetUser();
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;