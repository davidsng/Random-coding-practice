def perfectsquare (number)
  sqrt = (number ** 0.5).floor
  if sqrt**2 == number
    p number
  elsif
    number -= 1
    perfectsquare (number)
  end
end

perfectsquare(88)
