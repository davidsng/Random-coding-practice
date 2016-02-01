h = { 0 => "Zero", 1 => "One", :two => "Two", "two" => 2 }

p h[1]
p h[:two]
p h["two"]

h[3] = "Three"
p h[3]

h[:four] = 4
p h[:four]

p h
