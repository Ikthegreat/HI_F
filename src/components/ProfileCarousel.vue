<template>
  <div class="carousel">
    <div class="slide-container">
      <div
        class="slide"
        :style="slideStyles(index)"
        v-for="(item, index) in items"
        :key="index"
      >
        <img :src="item.image" :alt="item.caption" />
        <div class="caption">{{ item.caption }}</div>
      </div>
    </div>
    <div class="controls">
      <button class="prev-btn" @click="prevSlide">Prev</button>
      <button class="next-btn" @click="nextSlide">Next</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentIndex: 0,
      items: [
        { image: "image1.jpg", caption: "Image 1" },
        { image: "image2.jpg", caption: "Image 2" },
        { image: "image3.jpg", caption: "Image 3" },
        { image: "image4.jpg", caption: "Image 4" },
        { image: "image5.jpg", caption: "Image 5" },
      ],
    };
  },
  methods: {
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.items.length) % this.items.length;
    },
    nextSlide() {
      this.currentIndex =
        (this.currentIndex + this.items.length) % this.items.length;
    },
    slideStyles(index) {
      const offset =
        (index - this.currentIndex + this.items.length) % this.items.length;
      return {
        transform: `translateX(${offset * 100}%)`,
      };
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
}

.slide-container {
  display: flex;
  overflow: hidden;
}

.slide {
  flex: 0 0 100%;
  transition: transform 0.5s ease;
}

.slide img {
  width: 100%;
  height: auto;
}

.caption {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  font-size: 16px;
}

.controls {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.prev-btn,
.next-btn {
  padding: 5px 10px;
  margin: 0 5px;
}
</style>
