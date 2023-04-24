import { env } from "../utils/functions";
import axios from "axios";

export const CONFIG = {
  username: env("REACT_APP_API_USERNAME"),
  apikey: env("REACT_APP_API_KEY"),
};

export const BASEURL = env("REACT_APP_API_BASEURL");
export const SCRAPER = axios.create({ BASEURL });

export class Api {
  constructor(config) {
    this.username = config.username;
    this.apikey = config.apikey;
  }

  setUsername(username) {
    this.username = username;
  }

  setApikey(apikey) {
    this.apikey = apikey;
  }

  async getProfile() {
    let { data } = await SCRAPER(
      `${BASEURL}/profile/${this.username}?apikey=${this.apikey}`
    );

    return data;
  }

  async getInbox() {
    return await SCRAPER(`/inbox/${this.username}?apikey=${this.apikey}`);
  }

  async sentInbox(data, cb) {
    if (!cb && typeof cb !== "function") cb = () => {};

    const response = await fetch(
      `${BASEURL}/inbox/${this.username}?apikey=${this.apikey}`,
      {
        method: "POST",
        body: data,
      }
    );

    const result = await response.json();

    return cb(result);
  }
}

const API = new Api(CONFIG);
export default API;
