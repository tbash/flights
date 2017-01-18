class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :fb_id
      t.string :picture
      t.json :tokens

      t.timestamps
    end
    add_index :users, :fb_id, unique: true
  end
end
