class SearchController < ApplicationController
  before_action :require_auth

  def index
    trip_params = params.permit([:passengers_count, :origin, :destination]).to_h
    trips       = TripSearchService::GetFlights.call(trip_params)
    render json: trips, status: :ok
  end
end
