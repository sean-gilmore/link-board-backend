// https://knexjs.org/#Seeds-CLI

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('link').del()
    .then(function () {
      // Inserts seed entries
      return knex('link').insert([
        {id: 1, url: 'http://www.example.com'},
        {id: 2, url: 'https://google.com.au'},
        {id: 3, url: 'https://seangilmore.dev'}
      ]);
    });
};
