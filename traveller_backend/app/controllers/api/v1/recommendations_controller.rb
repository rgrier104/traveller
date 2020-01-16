class Api::V1::RecommendationsController < ApplicationController

    def create
        @recommendation = Recommendation.new(recommendation_params)
        if @recommendation.save
            render json: @recommendation
        else
            render json: {error: 'Error creating recommendation'}
        end
    end

    private

    def recommendation_params
        params.require(:recommendation).permit(:title, :description, :trip_id)
    end

end
