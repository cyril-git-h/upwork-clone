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
      borderStyle: ['hover'],
      backgroundImage: (theme) => ({
        freelancer:
          "url('https://www.upwork.com/static/assets/Brontes/6a4c747/img/find-talent.bf9ad20.jpg')",
        find_work:
          "url('https://www.upwork.com/static/assets/Brontes/6a4c747/img/find-great-work.935b155.jpg')",
        work_marketplace:
          "url('https://www.upwork.com/static/assets/Brontes/6a4c747/img/clearly-rated.25472a9.jpg')",
      }),
    },
    fill: (theme) => ({
      secondary: "#14a800",
    }),
    backgroundColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
      "secondary-hover": "#148200",
      footer: "#001e00",
      "footer-divider": "#65735b",
    }),
    textColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
      "secondary-hover": "#148200",
    }),
    borderColor: (theme) => ({
      ...theme("colors"),
      secondary: "#14a800",
      "footer": "#65735b",
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
