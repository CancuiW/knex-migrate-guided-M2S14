

exports.up = async function (knex) {
    // 异步迁移操作
    await knex.schema.createTable('fruits', (table) => {
        table.increments('fruit_id');
        table.string('name',100).notNullable().unique();
        table.decimal('avg_weight_oz').notNullable();
        table.boolean('delicious')
    });

    // 返回 Promise
    return Promise.resolve();
};

exports.down = async function (knex) {
    // 异步撤销迁移操作
    await knex.schema.dropTableIfExists('fruits');

    // 返回 Promise
    return Promise.resolve();
};

