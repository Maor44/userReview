<template>
  <v-layout column>
    <ReviewItem v-for="(review, index) in reviews" :review="review" :id="index" :key="index"></ReviewItem>
  </v-layout>
</template>

<script>
import ReviewItem from "./Review-Item";

export default {
  props: ["reviews"],
  components: {
    ReviewItem: ReviewItem
  },
  data() {
    return {};
  }
};
</script>
