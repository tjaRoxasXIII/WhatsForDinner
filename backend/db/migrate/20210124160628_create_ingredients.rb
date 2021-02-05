class CreateIngredients < ActiveRecord::Migration[6.0]
  def change
    create_table :ingredients do |t|
      t.text :name
      t.text :quantity
      t.timestamps
    end
  end
end
