
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, Plus, Minus } from 'lucide-react';
import { GroceryItem } from '@/data/groceryData';

interface ItemGridProps {
  items: GroceryItem[];
  language: 'english' | 'kannada';
  selectedItems: { [key: string]: { quantity: number; unit: string } };
  favorites: string[];
  onAddItem: (itemId: string, quantity: number, unit: string) => void;
  onRemoveItem: (itemId: string) => void;
  onToggleFavorite: (itemId: string) => void;
  onQuantityChange: (itemId: string, quantity: number) => void;
  viewMode: 'grid' | 'list';
}

const ItemGrid = ({ 
  items, 
  language, 
  selectedItems, 
  favorites, 
  onAddItem, 
  onRemoveItem,
  onToggleFavorite,
  onQuantityChange,
  viewMode 
}: ItemGridProps) => {
  const getCategoryColor = (categoryId: string) => {
    const colorMap = {
      'cereals-pulses': 'deep-blue',
      'flours': 'earth-brown',
      'vegetables-fruits': 'fresh-green',
      'spices-dry-fruits': 'warm-amber',
      'greens': 'fresh-green',
      'meat-seafood': 'rich-purple',
      'miscellaneous': 'soft-gray'
    };
    return colorMap[categoryId as keyof typeof colorMap] || 'soft-gray';
  };

  const getCategoryColorClass = (color: string) => {
    const colorMap = {
      'fresh-green': 'border-fresh-green text-fresh-green bg-fresh-green/10',
      'warm-amber': 'border-warm-amber text-warm-amber bg-warm-amber/10',
      'deep-blue': 'border-deep-blue text-deep-blue bg-deep-blue/10',
      'rich-purple': 'border-rich-purple text-rich-purple bg-rich-purple/10',
      'earth-brown': 'border-earth-brown text-earth-brown bg-earth-brown/10',
      'soft-gray': 'border-soft-gray text-soft-gray bg-soft-gray/10'
    };
    return colorMap[color as keyof typeof colorMap] || 'border-gray-200 text-gray-600 bg-gray-50';
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-6xl mb-4">🔍</div>
        <h3 className="text-xl font-semibold mb-2">
          {language === 'english' ? 'No items found' : 'ಯಾವುದೇ ವಸ್ತುಗಳು ಸಿಗಲಿಲ್ಲ'}
        </h3>
        <p className="text-muted-foreground">
          {language === 'english' 
            ? 'Try adjusting your search or select a different category' 
            : 'ನಿಮ್ಮ ಹುಡುಕಾಟವನ್ನು ಬದಲಾಯಿಸಿ ಅಥವಾ ವೇರೆ ವರ್ಗವನ್ನು ಆರಿಸಿ'
          }
        </p>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="container mx-auto px-4">
        <div className={`grid gap-4 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
            : 'grid-cols-1'
        }`}>
          {items.map((item) => {
            const isSelected = selectedItems[item.id];
            const isFavorite = favorites.includes(item.id);
            const categoryColor = getCategoryColor(item.category);

            return (
              <Card
                key={item.id}
                className={`transition-all duration-300 hover-scale ${
                  isSelected ? 'ring-2 ring-primary ring-offset-2' : ''
                }`}
              >
                <CardContent className="p-4">
                  {/* Header with favorite and category */}
                  <div className="flex justify-between items-start mb-3">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${
                      getCategoryColorClass(categoryColor)
                    }`}>
                      {language === 'english' ? item.category.replace('-', ' ') : 'ವರ್ಗ'}
                    </span>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onToggleFavorite(item.id)}
                      className={`p-1 ${isFavorite ? 'text-red-500' : 'text-muted-foreground'}`}
                    >
                      <Heart size={16} fill={isFavorite ? 'currentColor' : 'none'} />
                    </Button>
                  </div>

                  {/* Item Name */}
                  <h3 className="font-semibold text-lg mb-1">
                    {language === 'english' ? item.english : item.kannada}
                  </h3>
                  
                  {/* Bilingual display */}
                  {language === 'english' && (
                    <p className="text-sm text-muted-foreground mb-3 font-kannada">
                      {item.kannada}
                    </p>
                  )}
                  {language === 'kannada' && (
                    <p className="text-sm text-muted-foreground mb-3">
                      {item.english}
                    </p>
                  )}

                  {/* Default Quantity Info */}
                  <div className="text-sm text-muted-foreground mb-4">
                    {language === 'english' ? 'Default:' : 'ಪೂರ್ವನಿಗದಿ:'} {item.defaultQuantity} {item.defaultUnit}
                  </div>

                  {/* Quantity Controls or Add Button */}
                  {isSelected ? (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onQuantityChange(item.id, Math.max(0, isSelected.quantity - 1))}
                          disabled={isSelected.quantity <= 1}
                        >
                          <Minus size={14} />
                        </Button>
                        <Input
                          type="number"
                          value={isSelected.quantity}
                          onChange={(e) => onQuantityChange(item.id, Math.max(1, parseInt(e.target.value) || 1))}
                          className="w-20 text-center"
                          min="1"
                        />
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onQuantityChange(item.id, isSelected.quantity + 1)}
                        >
                          <Plus size={14} />
                        </Button>
                        <span className="text-sm text-muted-foreground ml-2">
                          {isSelected.unit}
                        </span>
                      </div>
                      <Button
                        variant="destructive"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="w-full"
                      >
                        {language === 'english' ? 'Remove' : 'ತೆಗೆದುಹಾಕಿ'}
                      </Button>
                    </div>
                  ) : (
                    <Button
                      onClick={() => onAddItem(item.id, item.defaultQuantity, item.defaultUnit)}
                      className="w-full bg-fresh-green hover:bg-fresh-green/90"
                    >
                      <Plus size={16} className="mr-2" />
                      {language === 'english' ? 'Add to List' : 'ಪಟ್ಟಿಗೆ ಸೇರಿಸಿ'}
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ItemGrid;
