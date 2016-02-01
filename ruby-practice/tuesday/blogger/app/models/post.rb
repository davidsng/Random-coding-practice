class Post < ActiveRecord::Base  #there is an active module called ActiveRecord and inside it we have a class called  base
  validates :title, presence: true  # validates that all posts have a title
  has_many :comments
end
