class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.string(:body)
      t.string(:owner)
      t.time(:sent_at)
    end
  end
end
