<template>
  <v-layout class="grey lighten-3 mx-auto pa-3 add-review-form">
    <v-flex xs-12>
      <v-text-field
        :error-messages="errors.collect('name')"
        v-validate="'required|max:20'"
        v-model="review.name"
        :counter="20"
        label="Your name"
        data-vv-name="name"
      ></v-text-field>
      <v-textarea
        data-vv-name="comment"
        :error-messages="errors.collect('comment')"
        v-validate="'required'"
        v-model="review.comment"
        auto-grow
        label="Comments"
        rows="1"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-flex right>
        <v-btn class="blue accent-3 white--text" round @click="this.handleSubmit">Add Review</v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data() {
    return {
      review: {
        name: null,
        comment: null
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validate().then(result => {
        if (result) {
          this.$emit("addNewReview", this.review);
          this.review.name = "";
          this.review.comment = "";
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.add-review-form {
  width: 100%;
  max-width: 500px;
}
</style>
