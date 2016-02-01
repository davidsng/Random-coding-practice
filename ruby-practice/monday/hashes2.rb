users = {
  "Arnold" => {
    :twitter => "schwarzenegger",
    :favorite_numbers => [12, 42, 75],
  },
  "John Cena" => {
    :twitter => "johncena",
    :favorite_numbers => [8, 12, 24],
  },
  "Martin Luther" => {
    :twitter => "martinluther",
    :favorite_numbers => [12, 14, 85],
  },
}

p users["Arnold"][:twitter]

users["John Cena"][:favorite_numbers] << 7
p users["John Cena"][:favorite_numbers]

p users["John Cena"][:favorite_numbers].min

users["DavidSng"] = {
  :twitter => "davidsng",
  :favorite_numbers => [1,10]
}
p users

p users["John Cena"][:favorite_numbers]

xyz = users["Martin Luther"][:favorite_numbers].select { |a| a % 2 == 0 }
p xyz

abc = users["Martin Luther"][:favorite_numbers] & users["John Cena"][:favorite_numbers] & users["Arnold"][:favorite_numbers]
p abc

htj = users["Martin Luther"][:favorite_numbers] | users["John Cena"][:favorite_numbers] | users["Arnold"][:favorite_numbers]
jth = htj.sort.uniq
p jth
