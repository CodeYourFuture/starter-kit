/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("visits", { id: "id", visited_at: "datetime" });
};

exports.down = (pgm) => {
  pgm.dropTable("visits");
};
