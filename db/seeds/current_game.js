exports.seed = function(knex, Promise) {
  return knex('current_game').del()
    .then(function() {
      return Promise.all([
        knex('current_game').insert({
          id: 1,
          winner: 2,
          turn_count: 13
        })
      ]);
    });
};
