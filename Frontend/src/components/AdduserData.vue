<template>
  <div class="container mx-auto">
    <form class="row g-3">
      <h2 class="text-center">Movie List</h2>
      <div class="col-12">
        <label for="inputEmail4" class="form-label">Movie Name</label>
        <input
          type="text"
          v-model="movieName"
          class="form-control"
          id="inputEmail4"
        />
      </div>

      <div class="col-12">
        <label for="Rating" class="form-label">Movie URL</label>
        <input
          type="text"
          class="form-control"
          id="Rating"
          v-model="movieURL"
        />
      </div>

      <div class="col-md-4">
        <label for="inputState" class="form-label">Type</label>
        <select id="inputState" class="form-select" v-model="movieType">
          <option selected value="Action">Action</option>
          <option value="Horror">Horror</option>
          <option value="Thriller">Thriller</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>
      </div>
      <div class="col-md-4">
        <label for="inputState" class="form-label">Rating</label>
        <select id="inputState" class="form-select" v-model="movieRating">
          <option selected value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
        </select>
      </div>
      <div class="col-12 text-center mt-5">
        <button @click="submitData" class="btn btn-dark text-center w-50">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>



<script>
import axios from "axios";
export default {
  data() {
    return {
      movieName: "",
      movieURL: "",
      movieType: "Action",
      movieRating: "5",
    };
  },

  methods: {
    submitData(e) {
      e.preventDefault();
      if (this.movieRating === "" || this.movieURL === "") {
        alert("Fill The form");
      } else {
        axios
          .post("http://localhost:3000/newData", {
            movieName: this.movieName,
            movieURl: this.movieURL,
            movieType: this.movieType,
            movieRating: this.movieRating,
          })
          .then(function (res) {
            console.log(res);
          });
      }
    },
  },
};
</script>

<style>
.container {
  max-width: 400px;
  margin-top: 40px;
  border-radius: 1px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}
</style>
