class Github {
  constructor() {
    //the client id and client secret  was taken from the page of your registered oaut apps on the github settings page
    this.client_id = "e70fb679656ec001f5f4";
    this.client_secret = "6afb665b27c924b56f9f9f0e904f3e04852e05c0";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    return {
      // the returned object has a key of profile with a value of a profile, which in ES6 can be returned as a single argument when they have the same name
      profile,
    };
  }
}
