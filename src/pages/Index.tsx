
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import HeroDashboard from '@/components/HeroDashboard';
import CategoryNavHub from '@/components/CategoryNavHub';
import ItemGrid from '@/components/ItemGrid';
import ShoppingListPanel from '@/components/ShoppingListPanel';
import { Button } from '@/components/ui/button';
import { groceryItems, searchItems, getItemsByCategory } from '@/data/groceryData';
import { LayoutGrid, List, ShoppingCart } from 'lucide-react';

const Index = () => {
  // State management
  const [language, setLanguage] = useState<'english' | 'kannada'>('english');
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedItems, setSelectedItems] = useState<{ [key: string]: { quantity: number; unit: string } }>({});
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showShoppingList, setShowShoppingList] = useState(false);

  // Filtered items based on search and category
  const [displayItems, setDisplayItems] = useState(groceryItems);

  useEffect(() => {
    let items = groceryItems;
    
    // Filter by search query
    if (searchQuery.trim()) {
      items = searchItems(searchQuery, language);
    }
    
    // Filter by category
    if (selectedCategory) {
      items = getItemsByCategory(selectedCategory);
      // Apply search filter to category items if search is active
      if (searchQuery.trim()) {
        items = items.filter(item => {
          const searchTerm = searchQuery.toLowerCase();
          return item.english.toLowerCase().includes(searchTerm) || 
                 item.kannada.toLowerCase().includes(searchTerm);
        });
      }
    }
    
    setDisplayItems(items);
  }, [searchQuery, selectedCategory, language]);

  // Shopping list functions
  const addItemToList = (itemId: string, quantity: number, unit: string) => {
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: { quantity, unit }
    }));
  };

  const removeItemFromList = (itemId: string) => {
    setSelectedItems(prev => {
      const newItems = { ...prev };
      delete newItems[itemId];
      return newItems;
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItemFromList(itemId);
      return;
    }
    
    setSelectedItems(prev => ({
      ...prev,
      [itemId]: { ...prev[itemId], quantity }
    }));
  };

  const clearAllItems = () => {
    setSelectedItems({});
  };

  const toggleFavorite = (itemId: string) => {
    setFavorites(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    );
  };

  // Sharing functions
  const downloadPDF = () => {
    const selectedItemsList = Object.entries(selectedItems).map(([itemId, details]) => {
      const item = groceryItems.find(i => i.id === itemId);
      return item ? `• ${language === 'english' ? item.english : item.kannada} - ${details.quantity} ${details.unit}` : '';
    }).filter(Boolean);

    const content = `
🛒 SmartGrocer Shopping List

${selectedItemsList.join('\n')}

Total Items: ${Object.keys(selectedItems).length}
Generated on: ${new Date().toLocaleDateString()}

Created with SmartGrocer - Smart Grocery Management
    `.trim();

    // Create a blob and download
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'shopping-list.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const shareWhatsApp = () => {
    const selectedItemsList = Object.entries(selectedItems).map(([itemId, details]) => {
      const item = groceryItems.find(i => i.id === itemId);
      return item ? `• ${language === 'english' ? item.english : item.kannada} - ${details.quantity} ${details.unit}` : '';
    }).filter(Boolean);

    const message = `🛒 *My Grocery List*\n\n${selectedItemsList.join('\n')}\n\n*Total: ${Object.keys(selectedItems).length} items*\n\nCreated with SmartGrocer`;
    
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const cartCount = Object.keys(selectedItems).length;

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-background text-foreground transition-colors duration-300">
        {/* Header */}
        <Header
          language={language}
          onLanguageToggle={() => setLanguage(prev => prev === 'english' ? 'kannada' : 'english')}
          darkMode={darkMode}
          onDarkModeToggle={() => setDarkMode(!darkMode)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          cartCount={cartCount}
        />

        {/* Hero Dashboard - Show only when no search and no category selected */}
        {!searchQuery && !selectedCategory && (
          <HeroDashboard
            language={language}
            onStartFreshList={() => {
              clearAllItems();
              setSelectedCategory(null);
              setSearchQuery('');
            }}
            onViewChecklist={() => setSelectedCategory('cereals-pulses')}
          />
        )}

        {/* Category Navigation */}
        {!searchQuery && (
          <CategoryNavHub
            language={language}
            selectedCategory={selectedCategory}
            onCategorySelect={(categoryId) => {
              setSelectedCategory(selectedCategory === categoryId ? null : categoryId);
              setSearchQuery(''); // Clear search when selecting category
            }}
          />
        )}

        {/* Items Section */}
        {(searchQuery || selectedCategory) && (
          <div className="py-4">
            <div className="container mx-auto px-4">
              {/* Controls Bar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
                <div>
                  <h2 className="text-xl font-semibold">
                    {searchQuery 
                      ? `${language === 'english' ? 'Search Results' : 'ಹುಡುಕಾಟ ಫಲಿತಾಂಶಗಳು'} "${searchQuery}"`
                      : `${language === 'english' ? 'Category Items' : 'ವರ್ಗದ ವಸ್ತುಗಳು'}`
                    }
                  </h2>
                  <p className="text-muted-foreground">
                    {displayItems.length} {language === 'english' ? 'items found' : 'ವಸ್ತುಗಳು ಸಿಕ್ಕಿವೆ'}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  {/* View Mode Toggle */}
                  <div className="flex border rounded-lg">
                    <Button
                      variant={viewMode === 'grid' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('grid')}
                    >
                      <LayoutGrid size={16} />
                    </Button>
                    <Button
                      variant={viewMode === 'list' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setViewMode('list')}
                    >
                      <List size={16} />
                    </Button>
                  </div>

                  {/* Mobile Shopping List Toggle */}
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowShoppingList(!showShoppingList)}
                    className="sm:hidden"
                  >
                    <ShoppingCart size={16} />
                    {cartCount > 0 && (
                      <span className="ml-1 bg-fresh-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                        {cartCount}
                      </span>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <div className="flex gap-6">
          {/* Items Grid */}
          <div className="flex-1">
            {(searchQuery || selectedCategory) && (
              <ItemGrid
                items={displayItems}
                language={language}
                selectedItems={selectedItems}
                favorites={favorites}
                onAddItem={addItemToList}
                onRemoveItem={removeItemFromList}
                onToggleFavorite={toggleFavorite}
                onQuantityChange={updateQuantity}
                viewMode={viewMode}
              />
            )}
          </div>

          {/* Desktop Shopping List Panel */}
          <div className="hidden sm:block w-80">
            <div className="sticky top-24">
              <ShoppingListPanel
                selectedItems={selectedItems}
                groceryItems={groceryItems}
                language={language}
                onRemoveItem={removeItemFromList}
                onClearAll={clearAllItems}
                onDownloadPDF={downloadPDF}
                onShareWhatsApp={shareWhatsApp}
              />
            </div>
          </div>
        </div>

        {/* Mobile Shopping List Modal */}
        {showShoppingList && (
          <div className="sm:hidden fixed inset-0 bg-black/50 z-50 flex items-end">
            <div className="w-full bg-background rounded-t-2xl animate-slide-up max-h-[80vh] overflow-y-auto">
              <ShoppingListPanel
                selectedItems={selectedItems}
                groceryItems={groceryItems}
                language={language}
                onRemoveItem={removeItemFromList}
                onClearAll={clearAllItems}
                onDownloadPDF={downloadPDF}
                onShareWhatsApp={shareWhatsApp}
                onClose={() => setShowShoppingList(false)}
              />
            </div>
          </div>
        )}

        {/* Floating Action Button (Mobile) */}
        {cartCount > 0 && !showShoppingList && (
          <Button
            className="sm:hidden fixed bottom-6 right-6 rounded-full w-14 h-14 bg-fresh-green hover:bg-fresh-green/90 shadow-lg animate-pulse-soft z-40"
            onClick={() => setShowShoppingList(true)}
          >
            <div className="relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-white text-fresh-green text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartCount}
              </span>
            </div>
          </Button>
        )}
      </div>
    </div>
  );
};

export default Index;
