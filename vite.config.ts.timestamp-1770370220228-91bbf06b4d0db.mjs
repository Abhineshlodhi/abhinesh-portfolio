// vite.config.ts
import { defineConfig } from "file:///D:/CDAC/project/Portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///D:/CDAC/project/Portfolio/node_modules/@vitejs/plugin-react/dist/index.js";
import mdx from "file:///D:/CDAC/project/Portfolio/node_modules/@mdx-js/rollup/index.js";
import svgr from "file:///D:/CDAC/project/Portfolio/node_modules/vite-plugin-svgr/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    mdx(),
    svgr()
  ],
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "animation-vendor": ["framer-motion", "gsap"]
        }
      }
    },
    chunkSizeWarningLimit: 1e3
  },
  optimizeDeps: {
    include: ["react", "react-dom", "framer-motion", "gsap"]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDREFDXFxcXHByb2plY3RcXFxcUG9ydGZvbGlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxDREFDXFxcXHByb2plY3RcXFxcUG9ydGZvbGlvXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9DREFDL3Byb2plY3QvUG9ydGZvbGlvL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnO1xyXG5pbXBvcnQgc3ZnciBmcm9tICd2aXRlLXBsdWdpbi1zdmdyJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgICBwbHVnaW5zOiBbXHJcbiAgICAgICAgcmVhY3QoKSxcclxuICAgICAgICBtZHgoKSxcclxuICAgICAgICBzdmdyKCksXHJcbiAgICBdLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgICAgICdAJzogJy9zcmMnLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYnVpbGQ6IHtcclxuICAgICAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgICAgICAgIG91dHB1dDoge1xyXG4gICAgICAgICAgICAgICAgbWFudWFsQ2h1bmtzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2FuaW1hdGlvbi12ZW5kb3InOiBbJ2ZyYW1lci1tb3Rpb24nLCAnZ3NhcCddLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGNodW5rU2l6ZVdhcm5pbmdMaW1pdDogMTAwMCxcclxuICAgIH0sXHJcbiAgICBvcHRpbWl6ZURlcHM6IHtcclxuICAgICAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ3JlYWN0LWRvbScsICdmcmFtZXItbW90aW9uJywgJ2dzYXAnXSxcclxuICAgIH0sXHJcbn0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFRLFNBQVMsb0JBQW9CO0FBQ2xTLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxVQUFVO0FBR2pCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQ3hCLFNBQVM7QUFBQSxJQUNMLE1BQU07QUFBQSxJQUNOLElBQUk7QUFBQSxJQUNKLEtBQUs7QUFBQSxFQUNUO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDTCxPQUFPO0FBQUEsTUFDSCxLQUFLO0FBQUEsSUFDVDtBQUFBLEVBQ0o7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNILGVBQWU7QUFBQSxNQUNYLFFBQVE7QUFBQSxRQUNKLGNBQWM7QUFBQSxVQUNWLGdCQUFnQixDQUFDLFNBQVMsV0FBVztBQUFBLFVBQ3JDLG9CQUFvQixDQUFDLGlCQUFpQixNQUFNO0FBQUEsUUFDaEQ7QUFBQSxNQUNKO0FBQUEsSUFDSjtBQUFBLElBQ0EsdUJBQXVCO0FBQUEsRUFDM0I7QUFBQSxFQUNBLGNBQWM7QUFBQSxJQUNWLFNBQVMsQ0FBQyxTQUFTLGFBQWEsaUJBQWlCLE1BQU07QUFBQSxFQUMzRDtBQUNKLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
