
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { categories } from '@/data/groceryData';

interface CategoryNavHubProps {
  language: 'english' | 'kannada';
  selectedCategory: string | null;
  onCategorySelect: (categoryId: string) => void;
}

const CategoryNavHub = ({ language, selectedCategory, onCategorySelect }: CategoryNavHubProps) => {
  const getCategoryColorClass = (color: string) => {
    const colorMap = {
      'fresh-green': 'border-fresh-green bg-fresh-green/10 hover:bg-fresh-green/20',
      'warm-amber': 'border-warm-amber bg-warm-amber/10 hover:bg-warm-amber/20',
      'deep-blue': 'border-deep-blue bg-deep-blue/10 hover:bg-deep-blue/20',
      'rich-purple': 'border-rich-purple bg-rich-purple/10 hover:bg-rich-purple/20',
      'earth-brown': 'border-earth-brown bg-earth-brown/10 hover:bg-earth-brown/20',
      'soft-gray': 'border-soft-gray bg-soft-gray/10 hover:bg-soft-gray/20'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200 bg-gray-50 hover:bg-gray-100';
  };

  const getCategoryTextColor = (color: string) => {
    const colorMap = {
      'fresh-green': 'text-fresh-green',
      'warm-amber': 'text-warm-amber',
      'deep-blue': 'text-deep-blue',
      'rich-purple': 'text-rich-purple',
      'earth-brown': 'text-earth-brown',
      'soft-gray': 'text-soft-gray'
    };
    return colorMap[color as keyof typeof colorMap] || 'text-gray-600';
  };

  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            {language === 'english' ? 'Browse by Category' : 'ವರ್ಗದ ಮೇರೆಗೆ ನೋಡಿ'}
          </h2>
          <p className="text-muted-foreground">
            {language === 'english' 
              ? 'Choose a category to explore grocery items' 
              : 'ಕಿರಾಣಿ ವಸ್ತುಗಳನ್ನು ಅನ್ವೇಷಿಸಲು ವರ್ಗವನ್ನು ಆರಿಸಿ'
            }
          </p>
        </div>

        {/* Desktop Grid Layout */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {categories.map((category) => (
            <Card
              key={category.id}
              className={`cursor-pointer transition-all duration-300 hover-scale border-2 ${
                getCategoryColorClass(category.color)
              } ${
                selectedCategory === category.id 
                  ? 'ring-2 ring-offset-2 ring-primary' 
                  : ''
              }`}
              onClick={() => onCategorySelect(category.id)}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className={`font-semibold text-lg mb-2 ${getCategoryTextColor(category.color)}`}>
                  {language === 'english' ? category.name : category.nameKannada}
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  {category.itemCount} {language === 'english' ? 'items' : 'ವಸ್ತುಗಳು'}
                </p>
                <div className={`w-full h-1 rounded-full ${
                  category.color === 'fresh-green' ? 'bg-fresh-green' :
                  category.color === 'warm-amber' ? 'bg-warm-amber' :
                  category.color === 'deep-blue' ? 'bg-deep-blue' :
                  category.color === 'rich-purple' ? 'bg-rich-purple' :
                  category.color === 'earth-brown' ? 'bg-earth-brown' :
                  'bg-soft-gray'
                }`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto gap-4 pb-4 scrollbar-hide">
            {categories.map((category) => (
              <Card
                key={category.id}
                className={`cursor-pointer transition-all duration-300 min-w-[200px] border-2 ${
                  getCategoryColorClass(category.color)
                } ${
                  selectedCategory === category.id 
                    ? 'ring-2 ring-offset-2 ring-primary' 
                    : ''
                }`}
                onClick={() => onCategorySelect(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className={`font-semibold text-sm mb-1 ${getCategoryTextColor(category.color)}`}>
                    {language === 'english' ? category.name : category.nameKannada}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {category.itemCount} {language === 'english' ? 'items' : 'ವಸ್ತುಗಳು'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Category Indicator */}
        {selectedCategory && (
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
              <span className="text-2xl">
                {categories.find(c => c.id === selectedCategory)?.icon}
              </span>
              <span className="font-medium">
                {language === 'english' 
                  ? categories.find(c => c.id === selectedCategory)?.name
                  : categories.find(c => c.id === selectedCategory)?.nameKannada
                }
              </span>
              <span className="text-sm text-muted-foreground">
                ({categories.find(c => c.id === selectedCategory)?.itemCount} {language === 'english' ? 'items' : 'ವಸ್ತುಗಳು'})
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryNavHub;
