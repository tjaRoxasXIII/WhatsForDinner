class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :food_type
      t.integer :serving_size
      t.integer :prep_time
      t.integer :cook_time
      t.integer :user_id

      t.timestamps
    end
  end
end
