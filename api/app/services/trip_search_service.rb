module TripSearchService
  ROOT_URL = "https://www.googleapis.com/qpxExpress/v1/trips/search"
  KEY      = ENV['GOOGLE_PRIVATE_KEY']

  class GetFlights
    class << self
      def build_url
        "#{ROOT_URL}?key=#{KEY}"
      end

      def parse_flights(body)
        p body
        options  = body.dig("trips", "tripOption")
        carriers = body.dig("trips", "data", "carrier")

        options.map do |o|

          segment = o["slice"].first["segment"].first
          flight  = segment["flight"]
          carrier = carriers.select { |c| c["code"] == flight["carrier"] }.first
          leg     = segment["leg"].first

          {
            carrier: carrier["name"],
            flight_number: flight["number"],
            price: o["saleTotal"].tr('A-Z', '').to_f,
            origin: leg["origin"],
            destination: leg["destination"],
            duration: leg["duration"],
            arrival_at: leg["arrivalTime"],
            departure_at: leg["departureTime"],
          }
        end
      rescue
        []
      end

      def build_params(params = {})
        {
          request: {
            passengers: {
              adultCount: params[:passengers_count]
            },
            slice: [
              {
                origin: params[:origin],
                destination: params[:destination],
                date: Time.now.strftime("%Y-%m-%d"),
                maxStops: 0
              }
            ],
            solutions: "20",
            refundable: false
          }
        }.to_json
      end

      def call(params = {})
        res = HTTParty.post(
          build_url,
          body: build_params(params),
          headers: { 'Content-Type' => 'application/json' }
        )

        case res.code
        when 200
          parse_flights(JSON.parse(res.body))
        else
          {error: "failed"}
        end
      end
    end
  end
end
