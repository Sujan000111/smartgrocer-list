
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface HeroDashboardProps {
  language: 'english' | 'kannada';
  onStartFreshList: () => void;
  onViewChecklist: () => void;
}

const HeroDashboard = ({ language, onStartFreshList, onViewChecklist }: HeroDashboardProps) => {
  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (language === 'english') {
      if (hour < 12) return 'Good Morning! ☀️';
      if (hour < 17) return 'Good Afternoon! 🌞';
      return 'Good Evening! 🌙';
    } else {
      if (hour < 12) return 'ಶುಭೋದಯ! ☀️';
      if (hour < 17) return 'ಶುಭ ಮಧ್ಯಾಹ್ನ! 🌞';
      return 'ಶುಭ ಸಂಜೆ! 🌙';
    }
  };

  return (
    <div className="bg-gradient-to-br from-fresh-green/10 via-warm-amber/5 to-deep-blue/10 py-12">
      <div className="container mx-auto px-4">
        {/* Welcome Banner */}
        <div className="text-center mb-8 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {getCurrentGreeting()}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-4">
            {language === 'english' 
              ? 'Ready to plan your grocery shopping?' 
              : 'ನಿಮ್ಮ ಕಿರಾಣಿ ಶಾಪಿಂಗ್ ಯೋಜಿಸಲು ಸಿದ್ಧರೇ?'
            }
          </p>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-fresh-green rounded-full"></span>
              {language === 'english' ? '100+ Items' : '100+ ವಸ್ತುಗಳು'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-warm-amber rounded-full"></span>
              {language === 'english' ? '7 Categories' : '7 ವಿಭಾಗಗಳು'}
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-deep-blue rounded-full"></span>
              {language === 'english' ? 'Bilingual Support' : 'ದ್ವಿಭಾಷಿಕ ಬೆಂಬಲ'}
            </span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card className="hover-scale cursor-pointer group" onClick={onStartFreshList}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-fresh-green/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-fresh-green/30 transition-colors">
                <span className="text-2xl">📝</span>
              </div>
              <h3 className="font-semibold mb-1">
                {language === 'english' ? 'Start Fresh List' : 'ಹೊಸ ಪಟ್ಟಿ ಪ್ರಾರಂಭಿಸಿ'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'english' ? 'Create a new grocery list' : 'ಹೊಸ ಕಿರಾಣಿ ಪಟ್ಟಿ ರಚಿಸಿ'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale cursor-pointer group" onClick={onViewChecklist}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-deep-blue/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-deep-blue/30 transition-colors">
                <span className="text-2xl">✅</span>
              </div>
              <h3 className="font-semibold mb-1">
                {language === 'english' ? 'Smart Checklist' : 'ಸ್ಮಾರ್ಟ್ ಚೆಕ್‌ಲಿಸ್ಟ್'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'english' ? 'Browse all items by category' : 'ವರ್ಗದ ಮೇರೆಗೆ ಎಲ್ಲಾ ವಸ್ತುಗಳನ್ನು ನೋಡಿ'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-warm-amber/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-warm-amber/30 transition-colors">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-semibold mb-1">
                {language === 'english' ? 'My Favorites' : 'ನನ್ನ ಮೆಚ್ಚಿನವುಗಳು'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'english' ? 'Quick access to favorites' : 'ಮೆಚ್ಚಿನವುಗಳಿಗೆ ತ್ವರಿತ ಪ್ರವೇಶ'}
              </p>
            </CardContent>
          </Card>

          <Card className="hover-scale cursor-pointer group">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-rich-purple/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-rich-purple/30 transition-colors">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-semibold mb-1">
                {language === 'english' ? 'Shopping History' : 'ಶಾಪಿಂಗ್ ಇತಿಹಾಸ'}
              </h3>
              <p className="text-sm text-muted-foreground">
                {language === 'english' ? 'View past shopping lists' : 'ಹಿಂದಿನ ಪಟ್ಟಿಗಳನ್ನು ನೋಡಿ'}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4">
            <div className="w-16 h-16 bg-gradient-to-br from-fresh-green to-deep-blue rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">🌐</span>
            </div>
            <h4 className="font-semibold mb-2">
              {language === 'english' ? 'Bilingual Experience' : 'ದ್ವಿಭಾಷಿಕ ಅನುಭವ'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'english' 
                ? 'Seamless switching between English and Kannada' 
                : 'ಇಂಗ್ಲಿಷ್ ಮತ್ತು ಕನ್ನಡ ನಡುವೆ ಸುಲಭ ಬದಲಾವಣೆ'
              }
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-16 h-16 bg-gradient-to-br from-warm-amber to-rich-purple rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">📱</span>
            </div>
            <h4 className="font-semibold mb-2">
              {language === 'english' ? 'Smart Sharing' : 'ಸ್ಮಾರ್ಟ್ ಹಂಚಿಕೆ'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'english' 
                ? 'Share lists via WhatsApp, PDF, or print' 
                : 'WhatsApp, PDF ಅಥವಾ ಪ್ರಿಂಟ್ ಮೂಲಕ ಪಟ್ಟಿಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳಿ'
              }
            </p>
          </div>

          <div className="text-center p-4">
            <div className="w-16 h-16 bg-gradient-to-br from-earth-brown to-fresh-green rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl text-white">⚡</span>
            </div>
            <h4 className="font-semibold mb-2">
              {language === 'english' ? 'Lightning Fast' : 'ಮಿಂಚಿನ ವೇಗ'}
            </h4>
            <p className="text-sm text-muted-foreground">
              {language === 'english' 
                ? 'Quick search, instant results, smooth experience' 
                : 'ತ್ವರಿತ ಹುಡುಕಾಟ, ತ್ವರಿತ ಫಲಿತಾಂಶಗಳು, ಮೃದು ಅನುಭವ'
              }
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroDashboard;
