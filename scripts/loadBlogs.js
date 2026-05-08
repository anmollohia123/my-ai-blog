async function loadBlogs() {
  const container = document.getElementById('blogContainer');

  try {
    const response = await fetch('./blogs/blogs.json');
    const blogs = await response.json();

    container.innerHTML = '';

    blogs.forEach(blog => {
      const card = document.createElement('div');

      card.className = 'card p-6 flex flex-col justify-between';

      card.innerHTML = `
        <div>
          <div class="mb-4">
            <span class="tag">${blog.category}</span>
          </div>

          <h3 class="text-2xl font-bold mb-3">
            ${blog.title}
          </h3>

          <p class="text-slate-400 mb-6">
            ${blog.description}
          </p>
        </div>

        <a
          href="blog.html?file=${blog.file}"
          class="mt-auto inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center"
        >
          Read Blog
        </a>
      `;

      container.appendChild(card);
    });

  } catch (error) {
    console.error('Error loading blogs:', error);

    container.innerHTML = `
      <div class="text-red-400">
        Failed to load blogs.
      </div>
    `;
  }
}

loadBlogs();
