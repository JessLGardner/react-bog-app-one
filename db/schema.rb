
ActiveRecord::Schema.define(version: 20170907152216) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "creatures", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
