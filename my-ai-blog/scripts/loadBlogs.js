// FILE: scripts/loadBlogs.js

async function loadBlogs() {

  const response = await fetch("blogs/blogs.json");
  const blogs = await response.json();

  const container = document.getElementById("blogContainer");

  blogs.reverse().forEach(blog => {

    container.innerHTML += `
      <div class="card rounded-2xl p-6 shadow-lg">

        <div class="mb-4">
          <span class="text-sm text-slate-400">
            ${blog.date}
          </span>
        </div>

        <h2 class="text-2xl font-bold mb-4">
          ${blog.title}
        </h2>

        <p class="text-slate-400 mb-6">
          ${blog.description}
        </p>

        <a
          href="blog.html?file=${blog.file}"
          class="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg inline-block"
        >
          Read More
        </a>

      </div>
    `;
  });
}

loadBlogs();