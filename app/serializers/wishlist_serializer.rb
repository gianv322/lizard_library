class WishlistSerializer < ActiveModel::Serializer
  attributes :id, :reptile_name

  def reptile_name
    self.object.reptile.name
  end
end
