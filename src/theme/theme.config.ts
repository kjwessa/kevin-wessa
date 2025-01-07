// Theme configuration for the Omnia Design System
// This file defines the structure and values of our theme

export type ColorScale = {
  50: string
  100: string
  200: string
  300: string
  400: string
  500: string
  600: string
  700: string
  800: string
  900: string
  950: string
}

export type ThemeColors = {
  background: string
  foreground: string
  card: string
  'card-foreground': string
  popover: string
  'popover-foreground': string
  primary: string
  'primary-foreground': string
  secondary: string
  'secondary-foreground': string
  muted: string
  'muted-foreground': string
  accent: string
  'accent-foreground': string
  destructive: string
  'destructive-foreground': string
  border: string
  input: string
  ring: string
}

export type ThemeBreakpoints = {
  sm: string
  md: string
  lg: string
  xl: string
  '2xl': string
  '3xl': string
}

export type ThemeSpacing = {
  none: string
  tiny: string
  xsmall: string
  small: string
  medium: string
  large: string
  xlarge: string
  huge: string
}

export type ThemeContainer = {
  spacing: ThemeSpacing
  sizes: {
    small: string
    medium: string
    large: string
    xl: string
    '2xl': string
    '3xl': string
    full: string
  }
}

export type ThemeGrid = {
  columns: number
  gutter: string
  margin: string
  width: string
}

export type ThemeTypography = {
  fonts: {
    sans: string
    serif: string
    mono: string
  }
  weights: {
    thin: number
    light: number
    normal: number
    medium: number
    semibold: number
    bold: number
    black: number
  }
  leading: {
    none: string
    tight: string
    snug: string
    normal: string
    relaxed: string
    loose: string
  }
  tracking: {
    tighter: string
    tight: string
    normal: string
    wide: string
    wider: string
    widest: string
  }
  fluid: {
    min: string
    max: string
    scale: number
  }
}

export type ThemeConfig = {
  colors: ThemeColors
  breakpoints: ThemeBreakpoints
  spacing: ThemeSpacing
  container: ThemeContainer
  grid: ThemeGrid
  typography: ThemeTypography
}

// Default theme configuration
export const defaultTheme: ThemeConfig = {
  colors: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    card: 'hsl(var(--card))',
    'card-foreground': 'hsl(var(--card-foreground))',
    popover: 'hsl(var(--popover))',
    'popover-foreground': 'hsl(var(--popover-foreground))',
    primary: 'hsl(var(--primary))',
    'primary-foreground': 'hsl(var(--primary-foreground))',
    secondary: 'hsl(var(--secondary))',
    'secondary-foreground': 'hsl(var(--secondary-foreground))',
    muted: 'hsl(var(--muted))',
    'muted-foreground': 'hsl(var(--muted-foreground))',
    accent: 'hsl(var(--accent))',
    'accent-foreground': 'hsl(var(--accent-foreground))',
    destructive: 'hsl(var(--destructive))',
    'destructive-foreground': 'hsl(var(--destructive-foreground))',
    border: 'hsl(var(--border))',
    input: 'hsl(var(--input))',
    ring: 'hsl(var(--ring))',
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
    '3xl': '1920px',
  },
  spacing: {
    none: '0',
    tiny: 'clamp(0.5rem, 0.5vw, 0.75rem)',
    xsmall: 'clamp(0.75rem, 1vw, 1rem)',
    small: 'clamp(1rem, 1.5vw, 1.5rem)',
    medium: 'clamp(1.5rem, 2vw, 2rem)',
    large: 'clamp(2rem, 3vw, 3rem)',
    xlarge: 'clamp(3rem, 4vw, 4rem)',
    huge: 'clamp(4rem, 5vw, 5rem)',
  },
  container: {
    spacing: {
      none: '0',
      tiny: 'clamp(1rem, 2vw, 1.5rem)',
      xsmall: 'clamp(1.5rem, 3vw, 2rem)',
      small: 'clamp(2rem, 4vw, 3rem)',
      medium: 'clamp(3rem, 5vw, 4rem)',
      large: 'clamp(4rem, 6vw, 5rem)',
      xlarge: 'clamp(5rem, 7vw, 6rem)',
      huge: 'clamp(6rem, 8vw, 7rem)',
    },
    sizes: {
      small: '640px',
      medium: '768px',
      large: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
      full: '100%',
    },
  },
  grid: {
    columns: 12,
    gutter: '2rem',
    margin: '2rem',
    width: '1440px',
  },
  typography: {
    fonts: {
      sans: 'var(--font-sans)',
      serif: 'var(--font-serif)',
      mono: 'var(--font-mono)',
    },
    weights: {
      thin: 100,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      black: 900,
    },
    leading: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    tracking: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    fluid: {
      min: '16px',
      max: '20px',
      scale: 1.25,
    },
  },
}
