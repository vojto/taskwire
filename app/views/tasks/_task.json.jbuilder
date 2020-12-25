json.extract! task, :id, :title, :description, :estimate, :status, :created_at, :updated_at
json.url task_url(task, format: :json)
