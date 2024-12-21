import config from "../config";

const showConsole = (arg) => {
  if (config.ENVIRONMENT !== "production") {
    console.log(arg);
  }
  return false;
};

export default showConsole;
