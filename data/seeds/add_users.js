const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      const rounds = process.env.HASH_ROUNDS || 14;
      const password = bcrypt.hashSync('password', rounds);
      return knex('users').insert([
        {username: 'alexindahouse', password: password, department: 'media' },
      ]);
    });
};
