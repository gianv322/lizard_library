class CreateJournals < ActiveRecord::Migration[6.1]
  def change
    create_table :journals do |t|
      t.string :title
      t.string :message
      t.string :date
      t.integer :reptile_id

      t.timestamps
    end
  end
end
