class MagicBallController < ApplicationController

  def result
    @magic_answer = generate_random_response  # the @ symbol is an instance variable
    puts @magic_answer
  end

  private
  def generate_random_response
    all_responses =
      ["Thou shall not pass",
      "I guess so",
      "Maybe. Just maybe",
      "WTH",
      "What is up"]
      all_responses.sample
  end

end
