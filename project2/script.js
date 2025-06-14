function addPost() {
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    if (title.trim() === "" || content.trim() === "") {
      alert("Please fill in both title and content.");
      return;
    }
    const post = { title, content };
    let posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.push(post);
    localStorage.setItem("blogPosts", JSON.stringify(posts));
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";
    showPosts();
  }
  function showPosts() {
    const postsDiv = document.getElementById("posts");
    postsDiv.innerHTML = "";
    const posts = JSON.parse(localStorage.getItem("blogPosts")) || [];
    posts.reverse().forEach(post => {
      const postDiv = document.createElement("div");
      postDiv.className = "post";
      postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
      postsDiv.appendChild(postDiv);
    }) 
  }  
  showPosts();
  