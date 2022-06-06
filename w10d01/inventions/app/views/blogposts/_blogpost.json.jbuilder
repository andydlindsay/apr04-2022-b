json.extract! blogpost, :id, :created_at, :updated_at
json.url blogpost_url(blogpost, format: :json)
