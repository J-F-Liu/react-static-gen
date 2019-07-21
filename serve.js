const { spawn } = require("child_process");
const browserSync = require("browser-sync").create();

function genHtml() {
  const build = spawn("npx", ["babel-node", "build.js"], { cwd: __dirname });
  build.stdout.on("data", data => {
    console.log(data.toString());
  });

  build.stderr.on("data", data => {
    console.error(data.toString());
  });

  build.on("exit", code => {
    if (code != 0) {
      console.log(`build exited with code ${code}`);
    }
  });
}

function serve() {
  genHtml();
  browserSync.watch(["src/*", "src/*/*.js"]).on("change", function() {
    genHtml();
  });
  browserSync
    .watch(["public/*.html", "public/*/*.css"])
    .on("change", browserSync.reload);

  browserSync.init({
    notify: false,
    port: 9000,
    server: {
      baseDir: "public",
      index: "home.html",
      routes: {
        "/bower_components": "bower_components"
      }
    }
  });
}

serve();
