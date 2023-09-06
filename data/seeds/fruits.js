/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('fruits').truncate()
  await knex('fruits').insert([
    { name: 'apple',avg_weight_oz:1.5,delicious:null,color:'green'},
    { name: 'orange', avg_weight_oz: 1.5, delicious: true, color: 'green' },
    { name: 'pear', avg_weight_oz: 1.5, delicious: 0, color: 'red ' },
    
  ]);
};
