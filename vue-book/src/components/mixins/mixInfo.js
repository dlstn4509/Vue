export default {
  props: ["styled", "title", "content"],
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
