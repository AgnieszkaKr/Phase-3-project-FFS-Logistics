puts "🌱 Seeding spices..."

User.destroy_all
Message.destroy_all

User.create(name: "Admin", lastName: "Admin", contact: "admin@admin.com", login: "adminAdmin", password: "Admin123")
User.create(name: "John", lastName: "Silverfish", contact: "johnSilvers@admin.com", login: "JohnSilverfish", password: "11")
User.create(name: "Admin", lastName: "Admin", contact: "admin@admin.com", login: "adminAdmin", password: "22")
# Seed your database here

Message.create!(body: "Hello", owner: "Agnes", sent_at: Time.now.strftime("%I:%M %p"))
Message.create!(body: "Hi", owner: "Andor", sent_at: Time.now.strftime("%I:%M %p"))
Message.create!(body: "Whats up?", owner: "Agnes", sent_at: Time.now.strftime("%I:%M %p"))
Message.create!(body: "Nothing", owner: "Andor", sent_at: Time.now.strftime("%I:%M %p"))

puts "✅ Done seeding!"



