class CreateWishlists < ActiveRecord::Migration[6.1]
  def change
    create_table :wishlists do |t|
      t.integer :reptile_id

      t.timestamps
    end
  end
end
