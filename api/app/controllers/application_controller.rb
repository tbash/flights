class ApplicationController < ActionController::API
  include ActionController::HttpAuthentication::Token::ControllerMethods

  def require_auth
    unless current_user
      render json: { nothing: true }, status: :unauthorized
    end
  end

  def current_user
    (fb_id, token) = current_token&.split(":")

     @current_user ||= UserService::FromToken.call(fb_id, token)
  end

  def current_token
    authenticate_with_http_token do |token, _|
      token
    end
  end
end
