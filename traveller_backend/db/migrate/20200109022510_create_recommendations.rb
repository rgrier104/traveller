class CreateRecommendations < ActiveRecord::Migration[6.0]
  def change
    create_table :recommendations do |t|
      t.string :title
      t.string :description
      t.integer :trip_id

      t.timestamps
    end
  end
end
