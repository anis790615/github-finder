class UI {
  constructor() {
    this.profile = document.querySelector("#profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `<div class="card card-body mb-3">
    <div class="row">
      <div class="col-md-3">
        <img src="${user.avatar_url}" alt="" class="img-fluid mb-2" />
        <br>
        <h6 class="">${user.name}</h6>
        <h6 class="font-weight-light text-muted">${user.login}</h6>
        <a
          href="${user.html_url}"
          target="_blank"
          class="btn btn-primary btn-block mb-2"
          >Profile</a
        >

      </div>
      <div class="col-md-9">
        <span class="badge badge-primary mb-2"
          >Public Repos: ${user.public_repos}</span
        >
        <span class="badge badge-secondary mb-2"
          >Public Gists: ${user.public_gists}</span
        >
        <span class="badge badge-success mb-2"
          >Followers: ${user.followers}</span
        >
        <span class="badge badge-info mb-2">Following: ${user.following}</span>
        <br /><br />
        <ul class="list-group">
          <li class="list-group-item">
            Company: ${user.company}
          </li>
          <li class="list-group-item">
            Website/Blog: ${user.blog}
          </li>
          <li class="list-group-item">
            Location: ${user.location}
          </li>
          <li class="list-group-item">
            Member Since: ${user.created_at}
          </li>
        </ul>
      </div>
    </div>
  </div>
  <h3 class="page-heading mb-3">Latest Repos</h3>
  <div id="repos"></div>`;
  }
  showRepos(repos) {
    let output = "";
    repos.forEach((repo) => {
      output += `
      <div class="card card-body mb-2">
       <div class="row">
        <div class="col-md-6"><a href="${repo.html_url}" target="_blank">${repo.name}</a></div>
        <div class="col-md-6">
          <span class="badge badge-primary mb-2"
          >Stars: ${repo.stargazers_count}</span
        >
          <span class="badge badge-secondary mb-2"
          >Watchers: ${repo.watchers_count}</span
        >
          <span class="badge badge-success mb-2"
          >Forks: ${repo.forks_count}</span
        >
    </div>
  </div>
</div>
      `;
    });
    document.querySelector("#repos").innerHTML = output;
  }
  clearProfile() {
    this.profile.innerHTML = "";
  }
  showAlert(message, alertClass) {
    this.clearAlert();
    const alertDiv = document.createElement("div");
    alertDiv.className = alertClass;
    alertDiv.textContent = message;

    // console.log(alertDiv);
    document
      .querySelector(".search")
      .insertBefore(alertDiv, document.querySelector(".search > h3"));
    setTimeout(() => this.clearAlert(), 3000);
  }
  clearAlert() {
    const currentAlert = document.querySelector(".alert");
    if (currentAlert) {
      currentAlert.remove();
    }
  }
}
