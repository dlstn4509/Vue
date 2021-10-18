export default {
  props: ["styled", "data"],
  computed: {
    style() {
      if (this.styled && this.styled.padding) {
        return `padding: ${this.styled.padding}`;
      } else {
        return `padding: 0`;
      }
    },
  },
};
