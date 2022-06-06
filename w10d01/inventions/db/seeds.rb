# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "starting the seeds..."

puts "creating the inventions"

10.times do
  Invention.create(
    name: Faker::TvShows::SiliconValley.invention,
    url: Faker::TvShows::SiliconValley.url
  )
end

puts "grab the inventions from the database"

inventions = Invention.all

puts "creating the mottos"

30.times do
  Motto.create(
    motto: Faker::TvShows::SiliconValley.motto,
    company: Faker::TvShows::SiliconValley.company,
    invention: inventions.sample
  )
end

puts "all done!"
