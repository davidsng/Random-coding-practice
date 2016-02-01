class Comment < ActiveRecord::Base  #there is an active module called ActiveRecord and inside it we have a class called  base
  belongs_to :post
end
