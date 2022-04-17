class AddImageLinkToReptiles < ActiveRecord::Migration[6.1]
  def change
    add_column :reptiles, :image_link, :string
  end
end
