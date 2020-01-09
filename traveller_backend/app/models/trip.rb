class Trip < ApplicationRecord
    has_many :recommendations

    validates :name, presence: true
    validates_inclusion_of :status, :in => ['completed','upcoming','bucketlist']
end
