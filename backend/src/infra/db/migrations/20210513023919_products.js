
exports.up = async function (knex) {
    return knex.schema
    .createTable('products', function (table) {
        table.bigInteger('id').primary()
        table.string('name', 60)
        table.text('link')
        table.text('image')
        table.timestamps(true, true)
    })
}

exports.down = function (knex) {
    return knex.schema 
    .dropTableIfExists('products')
}