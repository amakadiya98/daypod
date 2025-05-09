module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  
  ],
  theme: {
    extend: {
      colors: {
        primary: '#AA18FF',    
        secondary: '#5672FF',  
        'daypod-black': '#141416',
        'white-10': '#FFFFFF1A',
        'white-8': '#FFFFFF14',
        'white-50': '#FFFFFF80',
        'white-9': '#FFFFFF17',
        'white-40': '#FFFFFF66',
        'white-54': '#FFFFFF8A',
        'white-60': '#FFFFFF99',
        'black-15': '#00000026'
      },
      fontFamily: {
        'inter-regular': 'Inter-regular',
        'inter-medium': 'Inter-medium',
        'inter-semibold': 'Inter-semibold',
        'inter-bold': 'Inter-bold',
        'geist-bold': 'Geist-bold',
        'geist-semibold': 'Geist-semibold',
        'geist-medium': 'Geist-medium',
      },
      screens: {
        'custom-lg': '991px', 
      },
    },
  },
  plugins: [],
};

