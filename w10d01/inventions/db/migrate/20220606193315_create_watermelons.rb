class CreateWatermelons < ActiveRecord::Migration[6.1]
  def change
    create_table :watermelons do |t|

      t.timestamps
    end
  end
end
