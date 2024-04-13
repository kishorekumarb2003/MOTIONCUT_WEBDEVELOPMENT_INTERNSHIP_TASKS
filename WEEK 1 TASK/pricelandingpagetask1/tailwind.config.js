/** @type {import('tailwindcss').Config} */


module.exports = {
  darkMode: "class",
  // darkMode: "media",
  content: [
    "./src/**/*.{html,js,jsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      purple: "#3f3cbb",
      midnight: "#121063",
      metal: "#565584",
      blue: "#4c3ed8",
      silver: "#ecebff",
      bermuda: "#78dcca",
      gray: "#f5f5f6",
      lightgray: "#747579",
      lightpurple: "#857be4",
      hoverpurple: "#edecfb",
      dot: "#f7c32e",
      bordergray: "#9b9c9f",
      red: "#d6293e",
      black: "#000000",
      darkblue: "#0f172a",
      loginborder: "#e5e5e5",
      lightgreen: "#e6f8f3",
      peach: "#fbe9eb",
      lightred: "#fbe9eb",
      skyblue: "#e7f6f8",
      goldstar: "#f7c32e",
      bluegray: "#222529",
      darkgray: "#2a2c31",
      darkgray1: "#191b1d",
      brightgreen: "#0cbc87",
      lightgray1: "#dfdfe3",
      facebook: "#5D82D1",
      instagram: "#C22B72",
      twitter: "#40BFF5",
      linkedin: "#238CC8",
      lightorange: "#fff2e7",
      orange: "#fda36d",
      aqua: "#d1e7dd",
      darkgreen: "#146c43",
      turquese: "#17a2b8",
    },
    screens: {
      // 'sm': [{'min':'300px', 'max':'380px'  }],

      // 'md': '568px',

      xl: [{ min: "1150px", max: "2648px" }],

      lg: [{ min: "260px", max: "1149px" }],
    },

    fontFamily: {
      // 'sans': ['ui-sans-serif', 'system-ui'],
      // 'serif': ['ui-serif', 'Georgia', ...],
      // 'mono': ['ui-monospace', 'SFMono-Regular', ...],
      // 'display': ['Oswald', ...],
      dmsans: ["DM Sans", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {
      // ...
      darkMode: "class",
    },

    extend: {
      backgroundImage: {
        flightimage: "url('Assets/images/flights/flightbooking1.jpg')",
        profilebg: "url('Assets/images/users/bg1.png')",
      },
    },
  },
  plugins: [],
};
