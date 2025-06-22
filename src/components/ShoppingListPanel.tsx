
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { X, Download, Share2 } from 'lucide-react';
import { GroceryItem } from '@/data/groceryData';

interface ShoppingListPanelProps {
  selectedItems: { [key: string]: { quantity: number; unit: string } };
  groceryItems: GroceryItem[];
  language: 'english' | 'kannada';
  onRemoveItem: (itemId: string) => void;
  onClearAll: () => void;
  onDownloadPDF: () => void;
  onShareWhatsApp: () => void;
  isOpen?: boolean;
  onClose?: () => void;
}

const ShoppingListPanel = ({
  selectedItems,
  groceryItems,
  language,
  onRemoveItem,
  onClearAll,
  onDownloadPDF,
  onShareWhatsApp,
  isOpen = true,
  onClose
}: ShoppingListPanelProps) => {
  const selectedItemsList = Object.entries(selectedItems).map(([itemId, details]) => {
    const item = groceryItems.find(i => i.id === itemId);
    return item ? { ...item, ...details } : null;
  }).filter(Boolean);

  const totalItems = selectedItemsList.length;

  const groupedItems = selectedItemsList.reduce((groups, item) => {
    if (!item) return groups;
    const category = item.category;
    if (!groups[category]) {
      groups[category] = [];
    }
    groups[category].push(item);
    return groups;
  }, {} as Record<string, any[]>);

  if (!isOpen) return null;

  return (
    <Card className="w-full max-w-md bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">
            {language === 'english' ? 'Shopping List' : 'ಶಾಪಿಂಗ್ ಪಟ್ಟಿ'}
          </CardTitle>
          {onClose && (
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X size={16} />
            </Button>
          )}
        </div>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{totalItems} {language === 'english' ? 'items' : 'ವಸ್ತುಗಳು'}</span>
          {totalItems > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={onClearAll}
              className="text-xs"
            >
              {language === 'english' ? 'Clear All' : 'ಎಲ್ಲವನ್ನು ತೆರವುಗೊಳಿಸಿ'}
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {totalItems === 0 ? (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🛒</div>
            <p className="text-muted-foreground">
              {language === 'english' 
                ? 'Your shopping list is empty' 
                : 'ನಿಮ್ಮ ಶಾಪಿಂಗ್ ಪಟ್ಟಿ ಖಾಲಿಯಾಗಿದೆ'
              }
            </p>
          </div>
        ) : (
          <>
            {/* Items List */}
            <div className="max-h-60 overflow-y-auto space-y-3">
              {Object.entries(groupedItems).map(([category, items]) => (
                <div key={category}>
                  <h4 className="font-medium text-sm text-muted-foreground mb-2 capitalize">
                    {category.replace('-', ' ')}
                  </h4>
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 px-3 bg-muted/50 rounded-lg">
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {language === 'english' ? item.english : item.kannada}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {item.quantity} {item.unit}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-destructive hover:text-destructive p-1"
                      >
                        <X size={14} />
                      </Button>
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <Separator />

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={onDownloadPDF}
                className="flex items-center gap-2"
              >
                <Download size={14} />
                {language === 'english' ? 'PDF' : 'PDF'}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={onShareWhatsApp}
                className="flex items-center gap-2"
              >
                <Share2 size={14} />
                {language === 'english' ? 'WhatsApp' : 'WhatsApp'}
              </Button>
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ShoppingListPanel;
