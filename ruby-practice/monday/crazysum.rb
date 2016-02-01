def crazysum (arrayinput)
  sum = 0
  input = arrayinput.each_with_index {|val, index| sum += val * index }
  p sum
end

crazysum([1,2,3])


# def crazysum (arrayinput)
#   sum = 0
#   input = arrayinput.each_with_index do |val, index| sum += val * index
#   end
#   p sum
# end
#
# crazysum([1,2,3])
