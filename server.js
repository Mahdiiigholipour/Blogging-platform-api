const http = require("http");
const app = require("./src/app");
const { PORT } = require("./src/common/config");
const connectDB = require("./src/common/config/mongoose");

(async () => {
  try {
    const server = http.createServer(app);
    await connectDB();

    server.listen(PORT, () =>
      console.log(`server run on http://localhost:${PORT}`)
    );

    // بستن اتصال و سرور به‌صورت ایمن
    const gracefulShutdown = async () => {
      await mongoose.disconnect();
      server.close(() => process.exit(0));
    };
    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
})();
