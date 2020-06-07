import baseConect from "./baseConect";

export default {
  async login(item) {
    try {
      const resp = await baseConect.post("/login", item);
      return resp;
    } catch (error) {
      return error.response.data;
    }
  },
  async cadastro(item) {
    try {
      const resp = await baseConect.post("/cadastrar", item);
      return resp;
    } catch (error) {
      return error.response.data;
    }
  },
  getLocalUser() {
    const userStr = localStorage.getItem("user");

    if(!userStr) {
        return null;
    }

    return JSON.parse(userStr);
  }
};
