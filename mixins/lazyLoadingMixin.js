export default  {
  methods: {
    lazyLoading(targetList, callback, threshold = 0.1) {
      const io = new IntersectionObserver(
        callback,
        { threshold: threshold}
      );
  
      targetList.childNodes.forEach((el) => {
        io.observe(el);
      });
    }
  }
}