import axios from "axios";

export const CONFIG = {
  username: "fiandev",
  apikey: "1ZubUHXM8knOjwJy"
}

export const BASEURL = "https://portofolio-api.000webhostapp.com/api";
export const SCRAPER = axios.create({ BASEURL });

export class Api {
  
  constructor(config){
    this.username = config.username;
    this.apikey = config.apikey;
  }
  
  setUsername (username) {
    this.username = username;
  }
  
  setApikey (apikey) {
    this.apikey = apikey;
  }
  
  async getProfile () {
    let { data } = await SCRAPER(`${BASEURL}/profile/${this.username}?apikey=${this.apikey}`);
    
    return data;
  }
  
  async getInbox () {
    return await SCRAPER(`/inbox/${this.username}?apikey=${this.apikey}`)
  }
  
  async sentInbox ({ data }) {
    let { response } = await fetch(`${BASEURL}/inbox/${this.apikey}?apikey=${this.apikey}`, {
      method: "POST",
      data: data
    });
    
    return response.json();
  }
}


const API = new Api(CONFIG);
export default API;