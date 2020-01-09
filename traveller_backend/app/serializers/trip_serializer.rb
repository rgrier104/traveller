class TripSerializer < ActiveModel::Serializer
  attributes :id, :name, :status
  has_many :recommendations
end
