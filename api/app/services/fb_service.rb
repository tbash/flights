module FbService
  ROOT_URL      = "https://graph.facebook.com/v2.4/oauth/access_token"
  CLIENT_ID     = ENV['FACEBOOK_APP_ID']
  REDIRECT_URI  = ENV['FACEBOOK_REDIRECT_URI']
  CLIENT_SECRET = ENV['FACEBOOK_APP_SECRET']

  class Auth
    class << self
      def build_req(code)
        "#{ROOT_URL}"\
        "?client_id=#{CLIENT_ID}"\
        "&redirect_uri=#{REDIRECT_URI}"\
        "&client_secret=#{CLIENT_SECRET}"\
        "&code=#{code}"
      end

      def call(code = "")
        res = HTTParty.get(build_req(code))
        case res.code
        when 200
          JSON.parse(res.body)
        else
          {"error" => "invalid code"}
        end
      end
    end
  end

  class UserData
    class << self
      def build_req(token)
        "#{ROOT_URL}"\
        "/me?fields=id,name,picture"\
        "&access_token=#{token}"
      end

      def call(token = "")
        res = HTTParty.get(build_req(token))
        case res.code
        when 200
          JSON.parse(res.body)
        else
          {"error" => "invalid token"}
        end
      end
    end
  end
end
