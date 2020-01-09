# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

japan = Trip.create(name: 'Japan', status: 'completed')
sa = Trip.create(name: 'South Africa', status: 'completed')
alb = Trip.create(name: 'Albania', status: 'completed')
scot = Trip.create(name: 'Scotland', status: 'upcoming')
nv = Trip.create(name: 'Napa Valley', status: 'upcoming')
nz = Trip.create(name: 'New Zealand', status: 'bucketlist')
banff = Trip.create(name: 'Banff', status: 'bucketlist')

japan.recommendations.create(title: 'The Gate Hotel - Tokyo', description: 'https://www.gate-hotel.jp/en/asakusa-kaminarimon/')
japan.recommendations.create(title: 'Fushimi Inari Taisha', description: 'Hour outside of Tokyo, go early')
nv.recommendations.create(title: 'Bouchaine Vineyards')
