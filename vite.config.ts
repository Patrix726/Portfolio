import path from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import json5Plugin from "vite-plugin-json5";

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss(), json5Plugin()],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
