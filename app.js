// Initialize the Github class
const github = new Github();

// Search input
const searchUser = document.querySelector("#search-user");

// Search input eventlistener
searchUser.addEventListener("keyup", (e) => {
  // get input text
  const userText = e.target.value;
  if (userText !== "") {
    //make http call
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        //show alert in the ui
        console.log("Error");
      } else {
        // show profile
        console.log(data);
      }
    });
    // console.log(githubUser);
  } else {
    // clear profile
  }
});
