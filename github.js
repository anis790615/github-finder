class Github {
  constructor() {
    //the client id and client secret  was taken from the page of your registered oaut apps on the github settings page
    // this.client_id = "";
    // this.client_secret = "";
    this.config = {
      headers: {
        Authorization: "token feeae46cd18893ceb900bbc012f3bee9998e200d",
      },
    };
    this.repos_count = 5;
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    const profileResponse = await fetch(
      // `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
      `https://api.github.com/users/${user}`,
      this.config
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}`,
      this.config
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    // console.log(repos);
    return {
      // the returned object has a key of profile with a value of a profile, which in ES6 can be returned as a single argument when they have the same name
      profile,
      repos,
    };
  }
}
