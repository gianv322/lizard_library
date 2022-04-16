class CreateReptiles < ActiveRecord::Migration[6.1]
  def change
    create_table :reptiles do |t|
      t.string :name
      t.string :location
      t.string :description

      t.timestamps
    end
  end
end
