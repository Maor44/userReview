<template>
  <v-app>
    <v-content>
      <h1
        class="mt-4 text-xs-center blue--text text--accent-3 disply-4 font-weight-medium font-italic"
      >User Review</h1>

      <v-container>
        <Reviews :reviews="reviews"/>
        <AddReview @addNewReview="addReview"/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import { bus } from "./main";

import AddReview from "./components/AddReview";
import Reviews from "./components/Reviews";

export default {
  name: "App",
  components: {
    AddReview,
    Reviews
  },
  watch: {
    reviews: {
      handler() {
        bus.$emit("hideEditForm", false);
      },
      deep: true
    }
  },
  data() {
    return {
      reviews: [
        { id: 0, name: "Maor Bar", comment: "This app is amazing!!! LOVE IT!" },
        { id: 1, name: "Maor Bar", comment: "This app is amazing!!! LOVE IT!" },
        { id: 2, name: "Maor Bar", comment: "This app is amazing!!! LOVE IT!" }
      ]
    };
  },
  methods: {
    addReview(newReview) {
      this.reviews.push({ ...newReview });
    }
  },
  created() {
    bus.$on("removeReview", reviewId => {
      this.reviews.splice(reviewId, 1);
    });

    bus.$on("EditReview", reviewData => {
      this.reviews.find(element => {
        if (element.id === reviewData.id) {
          element.name = reviewData.name;
          element.comment = reviewData.comment;
        }
      });
    });
  }
};
</script>
