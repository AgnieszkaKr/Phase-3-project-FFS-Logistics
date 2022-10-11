class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string(:name)
      t.string(:lastName)
      t.string(:contact)
      t.string(:login)
      t.string(:password)
    end
  end
end
