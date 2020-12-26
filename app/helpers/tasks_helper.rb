module TasksHelper
  def format_estimate(estimate)
    hours = (estimate.to_f / 60).floor
    minutes = estimate % 60
    
    result = ""
    if hours > 0
      result += "#{hours}h "
    end
    
    if minutes > 0
      result += "#{minutes}m"
    end
    
    result
  end
  
  def colors_for_estimate(estimate)
    if estimate <= 10
      ["bg-green-200", "text-green-500"]
    elsif estimate <= 20
      ["bg-green-300", "text-green-600"]
    elsif estimate <= 30
      ["bg-blue-200", "text-blue-500"]
    elsif estimate <= 60
      ["bg-blue-300", "text-blue-600"]
    elsif estimate <= 90
      ["bg-yellow-200", "text-yellow-600"]
    else
      ["bg-yellow-300", "text-yellow-700"]
    end
  end
end
