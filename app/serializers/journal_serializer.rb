class JournalSerializer < ActiveModel::Serializer
  attributes :id, :title, :message, :date, :reptile_name

  def reptile_name
    self.object.reptile.name
  end
end
