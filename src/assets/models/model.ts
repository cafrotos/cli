import { Table, Model } from "sequelize-typescript";
import { I<%= name %>, I<%= name %>CreationAttributes } from "<%= interfacePath %>"

@Table
export default class <%= name %> extends Model<I<%= name %>, I<%= name %>CreationAttributes> {}
