module SearchService
  # alias
  QpxExpressV1 = Google::Apis::QpxExpressV1

  class GetFlights
    class << self
      def build_pass(**args)
        QpxExpressV1::PassengerCounts.new(args)
      end

      def build_slice(**args)
        QpxExpressV1::SliceInput.new(args)
      end

      def build_trip_req(**args)
        QpxExpressV1::TripOptionsRequest.new(args)
      end

      def call(**args)
        pass_obj  = build_pass(args[:passengers])
        slice_obj = build_slice(args[:slice])
        trip_obj  = build_trip_req({ slice: slice_obj, passengers: pass_obj })

        q     = QpxExpressV1::QPXExpressService.new
        q.key = ENV['GOOGLE_PRIVATE_KEY']
        q.search_trips(trip_obj)
      end
    end
  end
end
