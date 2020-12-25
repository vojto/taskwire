module HeroiconHelper
  def heroicon(name, options={})
    style = options[:style] || "solid"
    class_name = options[:class]
    
    file_path = "#{Rails.root}/app/assets/images/heroicons/#{style}/#{name}.svg"
    
    unless File.exists?(file_path)
      return '(not found)'
    end
    
    svg = File.read(file_path)
    
    if class_name
      svg = svg.sub('<svg', "<svg class=\"#{class_name}\"")
    end
    
    svg.html_safe
  end
end