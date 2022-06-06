class CreateMottos < ActiveRecord::Migration[6.1]
  def change
    create_table :mottos do |t|
      t.string :motto
      t.string :company

      t.references :invention, foreign_key: true, index: true

      t.timestamps
    end
  end
end
