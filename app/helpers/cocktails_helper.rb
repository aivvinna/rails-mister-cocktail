module CocktailsHelper
  def cocktail_photo_or_default(cocktail)
    if cocktail.photo.present?
      cl_image_path cocktail.photo, height: 300, width: 400, crop: :fill
    else
      image_path 'cocktaillogo.jpg'
    end
  end
end
