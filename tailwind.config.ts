import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme"

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
			giddaa: {
				DEFAULT: "#335F32",
				50: "#E8F2E8",
				100: "#D0E5D0",
				200: "#A6C6A5",
				300: "#7DA77B",
				400: "#538851",
				500: "#335F32",
				600: "#2B512B",
				700: "#224022",
				800: "#192E19",
				900: "#0F1C0F",
			  },
			  giddaaSecondary: {
				DEFAULT: "#EAA315",
				50: "#FFF6E6",
				100: "#FEE9C4",
				200: "#FDD08A",
				300: "#FBB750",
				400: "#F79E26",
				500: "#EAA315",
				600: "#C78B10",
				700: "#A5740C",
				800: "#825D08",
				900: "#614506",
			  },
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		  fontFamily: {
			millik: ["Millik", ...fontFamily.sans],
		  },
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
