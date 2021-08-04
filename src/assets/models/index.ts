import { Sequelize } from "sequelize-typescript"
import config from "<%= configFile %>"

export default new Sequelize({
  ...config[process.env.NODE_ENV || "development"],
  models: [__dirname],
});
