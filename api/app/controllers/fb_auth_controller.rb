class FbAuthController < ApplicationController
  def create
    if t = ::FbService::Login.call(params[:code])
      u = t[:user]
      render json: {
        token: t[:token],
        user: {
          picture: u.picture,
          name:    u.name,
        }
      }, status: :created
    else
      render json: { nothing: true }, status: :unauthorized
    end
  end
end
