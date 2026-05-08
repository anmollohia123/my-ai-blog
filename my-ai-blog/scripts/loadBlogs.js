async function loadBlogs() {

  try {

    const response = await fetch("./blogs/blogs.json");

    if (!response.ok) {
      throw new Error("blogs.json not found");
    }

    const blogs = await response.json();

    const container = document.getElementById("blogContainer");

    if (!blogs.length) {
      container.innerHTML = `
        <p class="text-red-400">
          No blogs found
        </p>
      `;
      return;
    }

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

  } catch (error) {

    console.error(error);

    document.getElementById("blogContainer").innerHTML = `
      <div class="text-red-400 text-xl">
        Error loading blogs
      </div>
    `;
  }
}

loadBlogs();
