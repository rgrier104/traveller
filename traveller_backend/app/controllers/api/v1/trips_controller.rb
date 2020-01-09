class Api::V1::TripsController < ApplicationController

    def index
        @trips = Trip.all
        render json: @trips
    end

    private

    def trip_params
        params.require(:trip).permit(:name, :status)
    end

end
