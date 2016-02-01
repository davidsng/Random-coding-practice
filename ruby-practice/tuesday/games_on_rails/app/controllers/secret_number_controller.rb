class SecretNumberController < ApplicationController
  def guess
    # Rails will look into a folder in "views/secret_number"
    # to look for an ERB file named 'guess.html.erb'.
    # This erb file will tell Rails what HTML to render
  end

  def result
    # Rails will look into a folder in "views/secret_number" (because the controller is named secret_number)
    # to look for an ERB file named 'result.html.erb'.
    # This erb file will tell Rails what HTML to render 

    @result = params[:guess].to_i == generate_secret_number
  end

  private
  def generate_secret_number
    4
  end
end
