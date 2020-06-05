
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('steps').insert([
        {step_name: 'pour cerial into bowl',
         description: 'pour cerial into bowl until satisfied',
         recipie_id: 1
      },
      {
        step_name: 'pour milk into bowl',
         description: 'pour milk into bowl until satisfied',
         recipie_id: 1
      }
      ]);
    });
};
