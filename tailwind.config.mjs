/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
	  screens: {
		sm: "480px",
		md: "768px",
		lg: "976px",
		xl: "1440px",
	  },
	  colors: {
		customGradient: {
			start: '#F95C04',
			end: '#FF8E0A',
		  },
		black: "#000000",
		orange: "#F95C04",
		white: "#FFFFFF",
		gray: "#0D0C22",
		stone: "#231F20",
		lime: "#B9FF66",
		blue: {
		  50: "#E3F2FD",
		  500: "#2196F3",
		  600: "#1E88E5",
	
		},
		gray: {
		  100: "#F5F5F5",
		  200: "#EEEEEE",
		  300: "#E0E0E0",
		  400: "#BDBDBD",
		  600: "#757575",
		  800: "#424242",
		  900: "#212121",
		},
		indigo: {
		  100: "#C5CAE9",
		  200: "#9FA8DA",
		  300: "#303F9F",
		  400: "#5C6BC0",
		  500: "#303F9F",
		  600: "#3949AB",
		  700: "#303F9F",
		  800: "#292A32",
		  900: "#191A23",
		},
		zinc: {
		  100: "#F3F3F3",
		  200: "#F0F0F0",
		  300: "#D9D9D9",
		  400: "#D8D8D8",
		  500: "#898989",
		  600: "#B0B0B0",
		  700: "#787878",
		  800: "#292A32",
		  900: "#191A23",
		},
	  },
	  boxShadow:{
        'card':'0px 5px 0px 0px #191A23'
      },
	  extend: {
		fontFamily: {
			SpaceGrotesk: ["Space Grotesk", "sans-serif"],
		},
	  },
	},
  };