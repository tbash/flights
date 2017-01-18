class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def require_auth
    (fb_id, token) = current_token.split(":")

    unless UserService::HasToken.call(fb_id, token)
      render json: { nothing: true }, status: :unauthorized
    end
  end

  def current_token
    authenticate_with_http_token do |token, _|
      token
    end
  end
end
