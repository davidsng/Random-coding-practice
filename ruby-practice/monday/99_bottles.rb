number = 99

number.times do |counter|
  if (number - counter) > 0
    puts (number - counter).to_s + " bottles of beer on the wall" + (number - counter).to_s + " bottles of beer. Take one beer bottle down from the wall, and there are" + (number - counter - 1).to_s + " beer bottle hanging on the wall"
  else
    puts "no more bottles!"
  end
end


# number_of_bottles = 99
#
# def get_bottles(number)
#   if number > 1
#     "#{number} bottles"
#   elsif number == 1
#     "1 bottle"
#   elsif number == 0
#     "No more bottles"
#   end
# end
#
