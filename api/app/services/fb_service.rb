module FbService
  ROOT_URL      = "https://graph.facebook.com/v2.4"
  CLIENT_ID     = ENV['FACEBOOK_APP_ID']
  REDIRECT_URI  = ENV['FACEBOOK_REDIRECT_URI']
  CLIENT_SECRET = ENV['FACEBOOK_APP_SECRET']

  class Auth
    class << self
      def build_req(code)
        "#{ROOT_URL}/oauth/access_token"\
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
          {:error => "failed"}
        end
      end
    end
  end

  class UserData
    class << self
      def build_req(token)
        "#{ROOT_URL}/me"\
        "?fields=id,name,picture"\
        "&access_token=#{token}"
      end

      def call(token = "")
        res = HTTParty.get(build_req(token))
        case res.code
        when 200
          JSON.parse(res.body)
        else
          {:error => "failed"}
        end
      end
    end
  end

  class Login
    class << self
      def call(code)
        auth_res = FbService::Auth.call(code)

        return false if auth_res[:error]

        token    = auth_res["access_token"]
        user_res = FbService::UserData.call(token)

        return false if user_res[:error]

        u = UserService::FindOrCreate.call({
          name: user_res["name"],
          fb_id: user_res["id"],
          picture: user_res.dig("picture", "data", "url"),
        })

        UserService::InsertToken.call(u, token)

        return {
          token: "#{u.fb_id}:#{token}",
          user: u,
        }
      end
    end
  end
end
