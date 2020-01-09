class Recommendation < ApplicationRecord
    belongs_to :trip

    validates :title, presence: true
end
