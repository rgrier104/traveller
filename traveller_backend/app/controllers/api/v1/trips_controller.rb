class Api::V1::TripsController < ApplicationController

    def index
        @trips = Trip.all
        render json: @trips
    end

    def create
        @trip = Trip.new(trip_params)
        if @trip.save
            render json: @trip
        else
            render json: {error: 'Error creating trip'}
        end
    end

    private

    def trip_params
        params.require(:trip).permit(:name, :status)
    end

end
