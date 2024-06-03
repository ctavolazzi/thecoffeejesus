import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()]
});

// import { defineConfig } from 'vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//   plugins: [sveltekit()],
//   define: {
//     'process.env': process.env,
//   },
// });


// import { defineConfig } from 'vite';
// import { sveltekit } from '@sveltejs/kit/vite';
// import dotenv from 'dotenv';

// dotenv.config();

// export default defineConfig({
//   plugins: [sveltekit()],
// });
