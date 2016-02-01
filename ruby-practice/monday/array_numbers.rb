arr = (1..100).to_a

arr1 = arr.select { |a| a % 3 == 0 }
p arr1

arr2 = arr.select { |a| (a % 2 == 0) && (a % 3 != 0) }
p arr2

arr3 = arr - arr1 - arr2
p arr3
