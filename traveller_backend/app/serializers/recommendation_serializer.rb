class RecommendationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description
  belongs_to :trip
end
