

export interface I<%= name %> {
  id: number
  <% attributes.forEach(function(attribute, index) { %>
    <%= attribute.fieldName %>: <%= attribute.dataFunction ? `${attribute.dataFunction}(DataTypes.${attribute.dataType})` : attribute.dataValues ? `${attribute.dataType}(${attribute.dataValues})` : attribute.dataType %>
  <% }) %>
}

export interface I<%= name %>CreationAttributes extends Optional<I<%= name %>, "id"> {}