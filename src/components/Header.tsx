
import React, { useState } from 'react';
import { Search, Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  language: 'english' | 'kannada';
  onLanguageToggle: () => void;
  darkMode: boolean;
  onDarkModeToggle: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  cartCount: number;
}

const Header = ({ 
  language, 
  onLanguageToggle, 
  darkMode, 
  onDarkModeToggle, 
  searchQuery, 
  onSearchChange,
  cartCount 
}: HeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-fresh-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🛒</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-fresh-green">SmartGrocer</h1>
                <p className="text-xs text-muted-foreground hidden sm:block">
                  {language === 'english' ? 'Smart Grocery Management' : 'ಸ್ಮಾರ್ಟ್ ಕಿರಾಣಿ ನಿರ್ವಹಣೆ'}
                </p>
              </div>
            </div>
          </div>

          {/* Center Section - Search (Hidden on mobile) */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                type="text"
                placeholder={language === 'english' ? 'Search grocery items...' : 'ಕಿರಾಣಿ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ...'}
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Right Section - Controls */}
          <div className="flex items-center space-x-2">
            {/* Language Toggle */}
            <Button
              variant="outline"
              size="sm"
              onClick={onLanguageToggle}
              className="text-xs font-medium"
            >
              {language === 'english' ? 'ಕನ್ನಡ' : 'English'}
            </Button>

            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={onDarkModeToggle}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>

            {/* Cart Counter */}
            <div className="relative">
              <Button variant="outline" size="sm" className="relative">
                🛒
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-fresh-green text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse-soft">
                    {cartCount}
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              type="text"
              placeholder={language === 'english' ? 'Search grocery items...' : 'ಕಿರಾಣಿ ವಸ್ತುಗಳನ್ನು ಹುಡುಕಿ...'}
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 w-full"
            />
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 p-4 bg-card rounded-lg border animate-slide-up">
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                {language === 'english' ? 'Quick Stats' : 'ತ್ವರಿತ ಅಂಕಿಅಂಶಗಳು'}
              </div>
              <div className="text-xs text-muted-foreground">
                {language === 'english' ? '100+ Items | 7 Categories' : '100+ ವಸ್ತುಗಳು | 7 ವಿಭಾಗಗಳು'}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
