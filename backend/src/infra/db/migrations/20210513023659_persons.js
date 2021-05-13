exports.up = async function (knex) {
    return knex.schema
    .createTable('persons', function (table) {
        table.bigInteger('id').primary()
        table.string('name', 60)
        table.string('gender', 60)
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema 
    .dropTableIfExists('persons')
}