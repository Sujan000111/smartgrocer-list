
export interface GroceryItem {
  id: string;
  english: string;
  kannada: string;
  category: string;
  defaultQuantity: number;
  defaultUnit: string;
  estimatedPrice?: number;
  seasonal?: boolean;
  organic?: boolean;
  dietary?: string[];
}

export interface Category {
  id: string;
  name: string;
  nameKannada: string;
  color: string;
  icon: string;
  itemCount: number;
}

export const categories: Category[] = [
  {
    id: 'cereals-pulses',
    name: 'Cereals & Pulses',
    nameKannada: 'ಧಾನ್ಯಗಳು ಮತ್ತು ದಾಲ್',
    color: 'deep-blue',
    icon: '🌾',
    itemCount: 22
  },
  {
    id: 'flours',
    name: 'Flours',
    nameKannada: 'ಹಿಟ್ಟುಗಳು',
    color: 'earth-brown',
    icon: '🌾',
    itemCount: 8
  },
  {
    id: 'vegetables-fruits',
    name: 'Vegetables & Fruits',
    nameKannada: 'ತರಕಾರಿಗಳು ಮತ್ತು ಹಣ್ಣುಗಳು',
    color: 'fresh-green',
    icon: '🥕',
    itemCount: 45
  },
  {
    id: 'spices-dry-fruits',
    name: 'Spices & Dry Fruits',
    nameKannada: 'ಮಸಾಲೆಗಳು ಮತ್ತು ಒಣಹಣ್ಣುಗಳು',
    color: 'warm-amber',
    icon: '🌶️',
    itemCount: 13
  },
  {
    id: 'greens',
    name: 'Greens',
    nameKannada: 'ಸೊಪ್ಪುಗಳು',
    color: 'fresh-green',
    icon: '🥬',
    itemCount: 7
  },
  {
    id: 'meat-seafood',
    name: 'Meat & Seafood',
    nameKannada: 'ಮಾಂಸ ಮತ್ತು ಸಮುದ್ರಾಹಾರ',
    color: 'rich-purple',
    icon: '🐟',
    itemCount: 6
  },
  {
    id: 'miscellaneous',
    name: 'Miscellaneous',
    nameKannada: 'ವಿವಿಧ',
    color: 'soft-gray',
    icon: '🥛',
    itemCount: 10
  }
];

export const groceryItems: GroceryItem[] = [
  // Cereals & Pulses
  { id: 'bengal-gram', english: 'Bengal Gram', kannada: 'ಕಡಲೇ ಬೇಳೆ', category: 'cereals-pulses', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'green-gram', english: 'Green Gram', kannada: 'ಹೆಸರು ಕಾಳು', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'red-gram', english: 'Red Gram', kannada: 'ತೊಗರಿ ಬೇಳೆ', category: 'cereals-pulses', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'black-gram', english: 'Black Gram', kannada: 'ಉದ್ದಿನ ಬೇಳೆ', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'poppy-seeds', english: 'Poppy Seeds', kannada: 'ಗಸಗಸೆ', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'coriander-seeds', english: 'Coriander Seeds', kannada: 'ಕೋತಂಬರಿ ಬೀಜ', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'mustard-seeds', english: 'Mustard Seeds', kannada: 'ಸಾಸಿವೆ', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'cumin-seeds', english: 'Cumin Seeds', kannada: 'ಜೀರಿಗೆ', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'ground-nuts', english: 'Ground Nuts', kannada: 'ಕಡಲೇಕಾಯಿ ಬೀಜ', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'turmeric', english: 'Turmeric', kannada: 'ಅರಿಶಿನ', category: 'cereals-pulses', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'fenugreek-seeds', english: 'Fenugreek Seeds', kannada: 'ಮೆಂತ್ಯ', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'rice', english: 'Rice', kannada: 'ಅಕ್ಕಿ', category: 'cereals-pulses', defaultQuantity: 5, defaultUnit: 'kg' },
  { id: 'wheat', english: 'Wheat', kannada: 'ಗೋಧಿ', category: 'cereals-pulses', defaultQuantity: 5, defaultUnit: 'kg' },
  { id: 'sago', english: 'Sago', kannada: 'ಸಬ್ಬಕ್ಕಿ', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'flattened-rice', english: 'Flattened Rice', kannada: 'ಅವಲಕ್ಕಿ', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'horse-gram', english: 'Horse Gram', kannada: 'ಹುರಳಿ ಕಾಳು', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'millet', english: 'Millet', kannada: 'ಜೋಳ', category: 'cereals-pulses', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'maize', english: 'Maize', kannada: 'ಮೆಕೆ ಜೋಲಾ', category: 'cereals-pulses', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'salt', english: 'Salt', kannada: 'ಉಪ್ಪು', category: 'cereals-pulses', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'kidney-beans', english: 'Kidney Beans', kannada: 'ಚಪ್ಪರದವರೇ', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'black-eyed-beans', english: 'Black-eyed Beans', kannada: 'ಅಲಸಂದೆ ಕಾಳು', category: 'cereals-pulses', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'chia-seeds', english: 'Chia Seeds', kannada: 'ಆಳವಿ ಬೀಜಗಳು', category: 'cereals-pulses', defaultQuantity: 100, defaultUnit: 'g' },

  // Flours
  { id: 'gram-flour', english: 'Gram Flour', kannada: 'ಕಡಲೆ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'wheat-flour', english: 'Wheat Flour', kannada: 'ಗೋಧಿ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 5, defaultUnit: 'kg' },
  { id: 'rice-flour', english: 'Rice Flour', kannada: 'ಅಕ್ಕಿ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'finger-millet-flour', english: 'Finger Millet Flour', kannada: 'ರಾಗಿ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'jowar-flour', english: 'Jowar Flour', kannada: 'ಜೋಳ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'coconut-flour', english: 'Coconut Flour', kannada: 'ತೆಂಗಿನ ಕಾಯಿ ಪುಡಿ', category: 'flours', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'millet-flour', english: 'Millet Flour', kannada: 'ಸಾಮೆ ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'moong-flour', english: 'Moong Flour', kannada: 'ಹೆಸರು ಹಿಟ್ಟು', category: 'flours', defaultQuantity: 500, defaultUnit: 'g' },

  // Vegetables & Fruits
  { id: 'brinjal', english: 'Brinjal', kannada: 'ಬದನೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'ridge-gourd', english: 'Ridge Gourd', kannada: 'ಹೀರೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'snake-gourd', english: 'Snake Gourd', kannada: 'ಪಡವಲಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'capsicum', english: 'Capsicum', kannada: 'ದೊಡ್ಡ ಮೆಣಸಿನಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'cabbage', english: 'Cabbage', kannada: 'ಎಲೆಕೊಸು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'piece' },
  { id: 'cauliflower', english: 'Cauliflower', kannada: 'ಹುಕೊಸು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'piece' },
  { id: 'carrot', english: 'Carrot', kannada: 'ಗಜ್ಜರಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'green-peas', english: 'Green Peas', kannada: 'ಬಟಾಣಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'lemon', english: 'Lemon', kannada: 'ನಿಂಬೆ ಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'onion', english: 'Onion', kannada: 'ಈರುಳ್ಳಿ', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'garlic', english: 'Garlic', kannada: 'ಬೆಳ್ಳುಳ್ಳಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'potato', english: 'Potato', kannada: 'ಆಲೂಗಡ್ಡೆ', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'tomato', english: 'Tomato', kannada: 'ಟೊಮೇಟೊ ಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'beans', english: 'Beans', kannada: 'ಹುರಳೀಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'cucumber', english: 'Cucumber', kannada: 'ಸೌತೇಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'drumstick', english: 'Drum Stick', kannada: 'ನುಗ್ಗೆ ಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'ladies-finger', english: 'Ladies Finger', kannada: 'ಬೆಂಡೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'radish', english: 'Radish', kannada: 'ಮೂಲಂಗಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'green-chilli', english: 'Green Chilli', kannada: 'ಹಸಿರು ಮೆಣಸಿನಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'bitter-gourd', english: 'Bitter Gourd', kannada: 'ಹಾಗಲಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'ash-gourd', english: 'Ash Gourd', kannada: 'ಬುಧಗುಂಬಳಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'bottle-gourd', english: 'Bottle Gourd', kannada: 'ಸೋರೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'pumpkin', english: 'Pumpkin', kannada: 'ಕುಂಬಳಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'field-beans', english: 'Field Beans', kannada: 'ಅವರೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'banana', english: 'Banana', kannada: 'ಬಾಳೆಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'dozen' },
  { id: 'raw-banana', english: 'Raw Banana', kannada: 'ಬಾಳೆಕಾಯಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'mango', english: 'Mango', kannada: 'ಮಾವಿನ ಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'grapes', english: 'Grapes', kannada: 'ದ್ರಾಕ್ಷಿ', category: 'vegetables-fruits', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'apple', english: 'Apple', kannada: 'ಸೇಬು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'orange', english: 'Orange', kannada: 'ಕಿತ್ತಳೆ ಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'papaya', english: 'Papaya', kannada: 'ಪರಂಗಿ ಹಣ್ಣು', category: 'vegetables-fruits', defaultQuantity: 1, defaultUnit: 'piece' },

  // Spices & Dry Fruits
  { id: 'cardamom', english: 'Cardamom', kannada: 'ಏಲಕ್ಕಿ', category: 'spices-dry-fruits', defaultQuantity: 50, defaultUnit: 'g' },
  { id: 'cloves', english: 'Cloves', kannada: 'ಲವಂಗ', category: 'spices-dry-fruits', defaultQuantity: 50, defaultUnit: 'g' },
  { id: 'cinnamon', english: 'Cinnamon', kannada: 'ಚಕ್ಕೆ', category: 'spices-dry-fruits', defaultQuantity: 50, defaultUnit: 'g' },
  { id: 'dry-coconut', english: 'Dry Coconut', kannada: 'ಒಣ ತೆಂಗಿನಕಾಯಿ', category: 'spices-dry-fruits', defaultQuantity: 2, defaultUnit: 'pieces' },
  { id: 'dry-ginger', english: 'Dry Ginger', kannada: 'ಶುಂಠಿ', category: 'spices-dry-fruits', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'cashew-nut', english: 'Cashew Nut', kannada: 'ಗೋಡಂಬಿ', category: 'spices-dry-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'raisins', english: 'Raisins', kannada: 'ಒಣ ದ್ರಾಕ್ಷಿ', category: 'spices-dry-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'almonds', english: 'Almonds', kannada: 'ಬಾದಾಮಿ', category: 'spices-dry-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'pistachio', english: 'Pistachio', kannada: 'ಪಿಸ್ತಾ', category: 'spices-dry-fruits', defaultQuantity: 100, defaultUnit: 'g' },
  { id: 'red-chilli', english: 'Red Chilli', kannada: 'ಕೆಂಪು ಮೆಣಸಿನಕಾಯಿಯ', category: 'spices-dry-fruits', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'nutmeg', english: 'Nutmeg', kannada: 'ಜಾಜಿಕಾಯಿ', category: 'spices-dry-fruits', defaultQuantity: 25, defaultUnit: 'g' },
  { id: 'mace', english: 'Mace', kannada: 'ಜಾಪತ್ರೆ', category: 'spices-dry-fruits', defaultQuantity: 25, defaultUnit: 'g' },
  { id: 'dates', english: 'Dates', kannada: 'ಖರ್ಜೂರ', category: 'spices-dry-fruits', defaultQuantity: 250, defaultUnit: 'g' },

  // Greens
  { id: 'coriander-leaves', english: 'Coriander Leaves', kannada: 'ಕೊತ್ತಂಬರಿ ಸೊಪ್ಪು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'spinach', english: 'Spinach', kannada: 'ಪಾಲಕ್ ಸೊಪ್ಪು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'dill-leaves', english: 'Dill Leaves', kannada: 'ಸಬ್ಬಸಿಗೆ ಸೊಪ್ಪು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'amaranth-leaves', english: 'Amaranth Leaves', kannada: 'ಹರಿವೆ ಸೊಪ್ಪು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'f-leaves', english: 'Fenugreek Leaves', kannada: 'ಮೆಂತ್ಯೆ ಸೊಪ್ಪು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'curry-leaves', english: 'Curry Leaves', kannada: 'ಕರಿಬೇವು', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },
  { id: 'mint-leaves', english: 'Mint Leaves', kannada: 'ಪುದೀನಾ', category: 'greens', defaultQuantity: 1, defaultUnit: 'bunch' },

  // Meat & Seafood
  { id: 'chicken', english: 'Chicken', kannada: 'ಕೋಳಿ ಮಾಂಸ', category: 'meat-seafood', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'mutton', english: 'Mutton', kannada: 'ಮಾಂಸ', category: 'meat-seafood', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'fish', english: 'Fish', kannada: 'ಮೀನು', category: 'meat-seafood', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'prawns', english: 'Prawns', kannada: 'ಎರ', category: 'meat-seafood', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'crab', english: 'Crab', kannada: 'ನಂಡು', category: 'meat-seafood', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'egg', english: 'Egg', kannada: 'ಮೊಟ್ಟೆ', category: 'meat-seafood', defaultQuantity: 12, defaultUnit: 'pieces' },

  // Miscellaneous
  { id: 'jaggery', english: 'Jaggery', kannada: 'ಬೆಲ್ಲ', category: 'miscellaneous', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'tamarind', english: 'Tamarind', kannada: 'ಹುಣಸೆಹಣ್ಣು', category: 'miscellaneous', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'sugar', english: 'Sugar', kannada: 'ಸಕ್ಕರೆ', category: 'miscellaneous', defaultQuantity: 1, defaultUnit: 'kg' },
  { id: 'ghee', english: 'Ghee', kannada: 'ತುಪ್ಪ', category: 'miscellaneous', defaultQuantity: 500, defaultUnit: 'ml' },
  { id: 'oil', english: 'Oil', kannada: 'ಎಣ್ಣೆ', category: 'miscellaneous', defaultQuantity: 1, defaultUnit: 'ltr' },
  { id: 'honey', english: 'Honey', kannada: 'ಜೇನು ತುಪ್ಪ', category: 'miscellaneous', defaultQuantity: 250, defaultUnit: 'g' },
  { id: 'coconut', english: 'Coconut', kannada: 'ತೆಂಗಿನಕಾಯಿ', category: 'miscellaneous', defaultQuantity: 2, defaultUnit: 'pieces' },
  { id: 'buttermilk', english: 'Buttermilk', kannada: 'ಮಜ್ಜಿಗೆ', category: 'miscellaneous', defaultQuantity: 500, defaultUnit: 'ml' },
  { id: 'curd', english: 'Curd', kannada: 'ಮೊಸರು', category: 'miscellaneous', defaultQuantity: 500, defaultUnit: 'g' },
  { id: 'milk', english: 'Milk', kannada: 'ಹಾಲು', category: 'miscellaneous', defaultQuantity: 1, defaultUnit: 'ltr' }
];

export const units = ['kg', 'g', 'ltr', 'ml', 'pieces', 'bunch', 'dozen', 'packet'];

export const getItemsByCategory = (categoryId: string) => {
  return groceryItems.filter(item => item.category === categoryId);
};

export const searchItems = (query: string, language: 'english' | 'kannada' = 'english') => {
  if (!query.trim()) return groceryItems;
  
  const searchTerm = query.toLowerCase();
  return groceryItems.filter(item => {
    if (language === 'kannada') {
      return item.kannada.toLowerCase().includes(searchTerm) || 
             item.english.toLowerCase().includes(searchTerm);
    }
    return item.english.toLowerCase().includes(searchTerm) || 
           item.kannada.toLowerCase().includes(searchTerm);
  });
};
