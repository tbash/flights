module UserService
  class FindOrCreate
    class << self
      def call(**user_data)
        user = User.find_or_initialize_by(fb_id: user_data[:fb_id])
        user.assign_attributes({
          name:    user_data[:name],
          picture: user_data[:picture],
        })

        user
      end
    end
  end

  class InsertToken
    class << self
      def call(user, token)
        new_token = {token => {inserted_at: Time.now.to_i}}
        if user.tokens?
          tokens = user
            .tokens
            .merge(new_token)
            .sort_by { |_, v| v["inserted_at"] || v[:inserted_at] }
            .last(10)
            .to_h
        else
          tokens = new_token
        end

        user.update({
          tokens: tokens
        })
      end
    end
  end

  class HasToken
    class << self
      def call(fb_id, token)
        !!User
        .find_by(fb_id: fb_id)
        .tokens[token]
      end
    end
  end
end
