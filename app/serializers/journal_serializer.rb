class JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :message, :date, :reptile_name, :reptile_image

  def reptile_name
    self.object.reptile.name
  end
  def reptile_image
    self.object.reptile.image_link
  end
end

