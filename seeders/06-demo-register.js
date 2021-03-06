'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   let data = [{
    "id": 1,
    "email": "mvallow0@java.com",
    "pass": "JD0pVC",
    "fname": "Merrel",
    "lname": "Vallow",
    "status": true
  }, {
    "id": 2,
    "email": "wgreenleaf1@ehow.com",
    "pass": "XSzJ8PKDJqwF",
    "fname": "Wald",
    "lname": "Greenleaf",
    "status": true
  }, {
    "id": 3,
    "email": "agerbi2@fema.gov",
    "pass": "3dMN9o3Q2l",
    "fname": "Alex",
    "lname": "Gerbi",
    "status": true
  }, {
    "id": 4,
    "email": "1753001@student.hcmus.edu.vn",
    "pass": "$2a$10$jV8KnS7mmhUFNBsJF7AK1edR8m75h8sxl1kNEoeLnyLqPd6jZPw5W",
    "fname": "Binh",
    "lname": "Trinh",
    "status": true
  }]
  data.map(item => {
    item.createdAt = Sequelize.literal('NOW()');
    item.updatedAt = Sequelize.literal('NOW()');
    return item;
  })
  return queryInterface.bulkInsert('Registers', data, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Registers', null, {});
  }
};