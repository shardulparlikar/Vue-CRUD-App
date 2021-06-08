<template>
  <div class="container-fluid">
    <div class="row">
      <div
        class="allData p-3"
        v-for="data in apiData"
        :key="data._id"
        :value="data._id"
      >
        <p><span class="font-bold">Movie Name</span>: {{ data.movieName }}</p>
        <p><span class="font-bold">Movie URL</span>: {{ data.movieURl }}</p>

        <p><span class="font-bold">Movie Type</span>: {{ data.movieType }}</p>

        <p>
          <span class="font-bold">Movie Rating</span>: {{ data.movieRating }}
        </p>
        <div class="updatedata">
          <h3>Update Data</h3>

          <div class="col-12">
            <label for="inputEmail4" class="form-label">Update Name</label>
            <input
              type="text"
              v-on:change="changeName"
              class="form-control"
              id="inputEmail4"
            />
          </div>

          <div class="col-12">
            <label for="inputEmail4" class="form-label">Update URL</label>
            <input
              type="text"
              v-on:change="changeUrl"
              class="form-control"
              id="inputEmail4"
            />
          </div>

          <div class="row">
            <div class="col-md-4">
              <label :for="data._id" class="form-label" :value="data._id"
                >Type</label
              >
              <select
                :id="data._id"
                class="form-select"
                v-on:change="changeType"
                :value="data._id"
              >
                <option value="Action">Action</option>
                <option value="Horror">Horror</option>
                <option value="Thriller">Thriller</option>
                <option value="Sci-Fi">Sci-Fi</option>
              </select>
            </div>
            <div class="col-md-4">
              <label :for="data._id" class="form-label" :value="data._id"
                >Rating</label
              >
              <select
                :id="data._id"
                class="form-select"
                v-on:change="changeRating"
                :name="data._id"
              >
                <option selected value="5">5</option>
                <option value="4">4</option>
                <option value="3">3</option>
                <option value="2">2</option>
                <option value="1">1</option>
              </select>
            </div>
          </div>
        </div>

        <div class="row justify-content-around mt-4">
          <div class="col-4">
            <button
              @click="deleteData(data._id)"
              class="btn btn-danger text-center"
            >
              Delete
            </button>
          </div>
          <div class="col-4">
            <button
              @click="updateData(data._id)"
              class="btn btn-warning text-center"
            >
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="col-4 mx-auto text-center mt-5">
      <button @click="getData" class="btn btn-dark text-center w-50">
        View
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      apiData: [],
      updatedName: "",
      updatedURL: "",
      updatedType: "",
      updatedRationg: "",
    };
  },
  methods: {
    getData() {
      axios.get("http://localhost:3000/").then((res) => {
        console.log(res);
        this.apiData = res.data;
        console.log(res.data._id);
      });
    },
    async updateData(updateID) {
      const update = await axios.patch(
        `http://localhost:3000/update/${updateID}`,
        {
          movieName: this.updatedName,
          movieURl: this.updatedURL,
          movieType: this.updatedType,
          movieRating: this.updatedRationg,
        }
      );
      update.data;
    },
    deleteData(ID) {
      axios
        .delete(`http://localhost:3000/delete/${ID}`)

        .then(() => {
          const projectIndex = this.apiData.findIndex((id) => id._id === ID);
          this.apiData.splice(projectIndex, 1);
        });
    },
    changeUrl: function changeItem(event) {
      this.updatedURL = event.target.value;
    },
    changeName: function changeItem(event) {
      this.updatedName = event.target.value;
    },
    changeType: function changeItem(event) {
      this.updatedType = event.target.value;
    },
    changeRating: function changeItem(event) {
      this.updatedRationg = event.target.value;
    },
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 80px;
}
.container-fluid .row {
  flex-wrap: wrap;
  justify-content: space-around;
}
.allData {
  border: 1px solid grey;
  flex: 0 0 30%;
  margin-bottom: 20px;
}
.font-bold {
  font-weight: bolder;
}
.updatedata{
  border-top: 1px solid black;
  padding: 20px;
}
</style>