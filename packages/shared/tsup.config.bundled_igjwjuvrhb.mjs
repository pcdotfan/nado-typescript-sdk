// ../../tsup.base.config.ts
import { copy } from "esbuild-plugin-copy";
import { esbuildPluginFilePathExtensions } from "esbuild-plugin-file-path-extensions";
import { defineConfig } from "tsup";
var tsup_base_config_default = defineConfig([
  {
    entry: ["src/**/*.ts"],
    format: ["cjs", "esm"],
    target: "esnext",
    outDir: "dist",
    dts: {
      compilerOptions: {
        // Disabling `composite` is required for `tsup` to generate `.d.ts` files correctly.
        // See https://github.com/egoist/tsup/issues/571
        composite: false
      }
    },
    sourcemap: true,
    clean: true,
    esbuildPlugins: [
      // This plugin rewrites our extension-less imports to use '.js' as required in bundler-less environments.
      esbuildPluginFilePathExtensions({ esmExtension: "js" }),
      // This plugin copies JSON files to the output `dist` directory.
      // It resolves paths from the current working directory, so structure is kept.
      copy({
        resolveFrom: "cwd",
        assets: {
          from: ["./src/**/*.json"],
          to: ["./dist"]
        }
      })
    ]
  }
]);

// tsup.config.ts
var tsup_config_default = tsup_base_config_default;
export {
  tsup_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vdHN1cC5iYXNlLmNvbmZpZy50cyIsICJ0c3VwLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCIvVXNlcnMvZnJhbmsvRGVza3RvcC9kZXYvbmFkby9uYWRvLXR5cGVzY3JpcHQtc2RrL3RzdXAuYmFzZS5jb25maWcudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2ZyYW5rL0Rlc2t0b3AvZGV2L25hZG8vbmFkby10eXBlc2NyaXB0LXNka1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vVXNlcnMvZnJhbmsvRGVza3RvcC9kZXYvbmFkby9uYWRvLXR5cGVzY3JpcHQtc2RrL3RzdXAuYmFzZS5jb25maWcudHNcIjtpbXBvcnQgeyBjb3B5IH0gZnJvbSAnZXNidWlsZC1wbHVnaW4tY29weSc7XG5pbXBvcnQgeyBlc2J1aWxkUGx1Z2luRmlsZVBhdGhFeHRlbnNpb25zIH0gZnJvbSAnZXNidWlsZC1wbHVnaW4tZmlsZS1wYXRoLWV4dGVuc2lvbnMnO1xuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndHN1cCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyhbXG4gIHtcbiAgICBlbnRyeTogWydzcmMvKiovKi50cyddLFxuICAgIGZvcm1hdDogWydjanMnLCAnZXNtJ10sXG4gICAgdGFyZ2V0OiAnZXNuZXh0JyxcbiAgICBvdXREaXI6ICdkaXN0JyxcbiAgICBkdHM6IHtcbiAgICAgIGNvbXBpbGVyT3B0aW9uczoge1xuICAgICAgICAvLyBEaXNhYmxpbmcgYGNvbXBvc2l0ZWAgaXMgcmVxdWlyZWQgZm9yIGB0c3VwYCB0byBnZW5lcmF0ZSBgLmQudHNgIGZpbGVzIGNvcnJlY3RseS5cbiAgICAgICAgLy8gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9lZ29pc3QvdHN1cC9pc3N1ZXMvNTcxXG4gICAgICAgIGNvbXBvc2l0ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH0sXG4gICAgc291cmNlbWFwOiB0cnVlLFxuICAgIGNsZWFuOiB0cnVlLFxuICAgIGVzYnVpbGRQbHVnaW5zOiBbXG4gICAgICAvLyBUaGlzIHBsdWdpbiByZXdyaXRlcyBvdXIgZXh0ZW5zaW9uLWxlc3MgaW1wb3J0cyB0byB1c2UgJy5qcycgYXMgcmVxdWlyZWQgaW4gYnVuZGxlci1sZXNzIGVudmlyb25tZW50cy5cblxuICAgICAgZXNidWlsZFBsdWdpbkZpbGVQYXRoRXh0ZW5zaW9ucyh7IGVzbUV4dGVuc2lvbjogJ2pzJyB9KSxcblxuICAgICAgLy8gVGhpcyBwbHVnaW4gY29waWVzIEpTT04gZmlsZXMgdG8gdGhlIG91dHB1dCBgZGlzdGAgZGlyZWN0b3J5LlxuICAgICAgLy8gSXQgcmVzb2x2ZXMgcGF0aHMgZnJvbSB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSwgc28gc3RydWN0dXJlIGlzIGtlcHQuXG4gICAgICBjb3B5KHtcbiAgICAgICAgcmVzb2x2ZUZyb206ICdjd2QnLFxuICAgICAgICBhc3NldHM6IHtcbiAgICAgICAgICBmcm9tOiBbJy4vc3JjLyoqLyouanNvbiddLFxuICAgICAgICAgIHRvOiBbJy4vZGlzdCddLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSxcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiL1VzZXJzL2ZyYW5rL0Rlc2t0b3AvZGV2L25hZG8vbmFkby10eXBlc2NyaXB0LXNkay9wYWNrYWdlcy9zaGFyZWQvdHN1cC5jb25maWcudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiL1VzZXJzL2ZyYW5rL0Rlc2t0b3AvZGV2L25hZG8vbmFkby10eXBlc2NyaXB0LXNkay9wYWNrYWdlcy9zaGFyZWRcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL1VzZXJzL2ZyYW5rL0Rlc2t0b3AvZGV2L25hZG8vbmFkby10eXBlc2NyaXB0LXNkay9wYWNrYWdlcy9zaGFyZWQvdHN1cC5jb25maWcudHNcIjtpbXBvcnQgY29uZmlnIGZyb20gJy4uLy4uL3RzdXAuYmFzZS5jb25maWcnO1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJTLFNBQVMsWUFBWTtBQUNoVSxTQUFTLHVDQUF1QztBQUNoRCxTQUFTLG9CQUFvQjtBQUU3QixJQUFPLDJCQUFRLGFBQWE7QUFBQSxFQUMxQjtBQUFBLElBQ0UsT0FBTyxDQUFDLGFBQWE7QUFBQSxJQUNyQixRQUFRLENBQUMsT0FBTyxLQUFLO0FBQUEsSUFDckIsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsS0FBSztBQUFBLE1BQ0gsaUJBQWlCO0FBQUE7QUFBQTtBQUFBLFFBR2YsV0FBVztBQUFBLE1BQ2I7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxnQkFBZ0I7QUFBQTtBQUFBLE1BR2QsZ0NBQWdDLEVBQUUsY0FBYyxLQUFLLENBQUM7QUFBQTtBQUFBO0FBQUEsTUFJdEQsS0FBSztBQUFBLFFBQ0gsYUFBYTtBQUFBLFFBQ2IsUUFBUTtBQUFBLFVBQ04sTUFBTSxDQUFDLGlCQUFpQjtBQUFBLFVBQ3hCLElBQUksQ0FBQyxRQUFRO0FBQUEsUUFDZjtBQUFBLE1BQ0YsQ0FBQztBQUFBLElBQ0g7QUFBQSxFQUNGO0FBQ0YsQ0FBQzs7O0FDakNELElBQU8sc0JBQVE7IiwKICAibmFtZXMiOiBbXQp9Cg==
