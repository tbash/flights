class FbAuthsController < ApplicationController
  before_action :require_auth, only: [:show]

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

  def show
    render json: {
      user: {
        picture: current_user.picture,
        name:    current_user.name,
      }
    }, status: :ok
  end
end
