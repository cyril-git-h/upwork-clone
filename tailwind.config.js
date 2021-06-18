module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      none: "none",
      2: "2 2 0%",
    },
    extend: {
      backgroundImage: (theme) => ({
        freelancer:
          "url('https://www.upwork.com/static/assets/Brontes/6a4c747/img/find-talent.bf9ad20.jpg')",
      }),
    },
    fill: (theme) => ({
      secondary: "#14a800",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
      "secondary-hover": "#148200",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
      "secondary-hover": "#148200",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
