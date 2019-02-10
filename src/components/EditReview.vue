<template>
  <v-layout class="grey lighten-3 mb-3 mx-auto pa-3" style="width: 500px;">
    <v-flex xs-12>
      <v-text-field
        :error-messages="errors.collect('name')"
        v-validate="'required|max:20'"
        v-model="name"
        :counter="20"
        label="Your name"
        data-vv-name="name"
      ></v-text-field>
      <v-textarea
        data-vv-name="comment"
        :error-messages="errors.collect('comment')"
        v-validate="'required'"
        v-model="comment"
        auto-grow
        label="Comments"
        rows="1"
      ></v-textarea>
      <v-spacer></v-spacer>
      <v-flex right>
        <v-btn class="blue accent-3 white--text" round @click="this.handleSubmit">Edit Review</v-btn>
      </v-flex>
    </v-flex>
  </v-layout>
</template>

<script>
import { bus } from "../main";

export default {
  props: ["editReview", "id"],
  data() {
    return {
      name: this.editReview.name,
      comment: this.editReview.comment
    };
  },
  methods: {
    handleSubmit() {
      this.$validator.validate().then(result => {
        if (result) {
          bus.$emit("EditReview", {
            id: this.id,
            name: this.name,
            comment: this.comment
          });
        }
      });
    }
  }
};
</script>

<style>
</style>
