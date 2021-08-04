import { QueryInterface, DataTypes } from "sequelize/types"

export default {
  up: async (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface: QueryInterface, Sequelize: typeof DataTypes) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
