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
        'white-50': '#FFFFFF80'
      },
      fontFamily: {
        'inter-regular': 'Inter-regular',
        'inter-medium': 'Inter-medium',
        'inter-semibold': 'Inter-semibold',
        'inter-bold': 'Inter-bold',
        'geist-semibold': 'Geist-semibold',
      }
    },
  },
  plugins: [],
};

