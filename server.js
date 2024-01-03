require("dotenv").config();
const { performSync } = require("./controller/PerformSync");

const callPerformSync = async () => {
  const response = await performSync();
  if (response) {
    console.log("==================Sync completed successfully====================");
    setTimeout(() => {
      callPerformSync();
    }, 10000);
  }
};

callPerformSync();
