<template>
  <v-layout column>
    <v-card
      :class="this.colors[Math.floor(this.colors.length * Math.random())]"
      class="lighten-4 my-2 mx-auto review-item"
      flat
    >
      <v-flex right class="pa-2">
        <v-icon @click="handleRemove(id)" small>delete</v-icon>
        <v-icon @click="handleEdit(review)" small>edit</v-icon>
      </v-flex>
      <v-card-title primary-title>
        <v-avatar class="mr-3">
          <img :src="avatar" alt>
        </v-avatar>
        <div>
          <h3 class="headline display-3 font-weight-bold">{{review.name}}</h3>
          <p class="body-1 my-1">{{review.comment}}</p>
        </div>
      </v-card-title>
    </v-card>

    <EditReview v-if="showForm" :editReview="review" :id="id"/>
  </v-layout>
</template>

<script>
import { bus } from "../main";
import { colors } from "../assets/colors";
import EditReview from "./EditReview";

export default {
  components: {
    EditReview
  },
  props: ["review", "id"],
  data() {
    return {
      colors,
      showForm: false,
      avatar: null
    };
  },
  computed: {},
  methods: {
    handleRemove(id) {
      bus.$emit("removeReview", id);
    },
    handleEdit() {
      this.showForm = !this.showForm;
    }
  },
  mounted() {
    bus.$on("hideEditForm", data => {
      this.showForm = data;
    });
    const imgGen = require("@dudadev/random-img");
    imgGen().then(avatarURL => {
      this.avatar = avatarURL;
    });
  }
};
</script>

<style lang="scss" scoped>
.review-item {
  width: 100%;
  max-width: 500px;
}
</style>
