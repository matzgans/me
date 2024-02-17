<template>
  <div v-if="isloader">
    <div class="h-screen flex justify-center items-center">
      <span class="text-6xl font-bold">LOVE U</span>
    </div>
  </div>

  <div v-else>
    <Navbar />
    <div class="h-screen bg-black z-10">
      <div class="text-white p-7">
        <div class="font-extrabold text-center">
          <span
            class="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-8.1xl font-rowdies"
            data-aos="fade-top"
            data-aos-duration="3000"
          >
            ABD RAHMAT LAHAY
          </span>
        </div>
        <div class="flex px-24 text-justify">
          <p class="me-7" data-aos="fade-right" data-aos-duration="3000">
            Hi, I am an undergraduate student of the Information Systems,
            Informatics Engineering, State University of Gorontalo, born in
            Gorontalo, 16 September 2002. I have high enthusiasm, and have a
            good social spirit in society.
          </p>
          <p data-aos="fade-left" data-aos-duration="3000">
            a software developer, especially using javascript and php, now
            enjoys working with the laravel and vue js frameworks, and for
            design I often use tailwindcss, apart from several skills I also
            have knowledge of data science and an understanding of big data
          </p>
        </div>
      </div>
      <div class="me-32 mt-4">
        <div
          class="bg-pattern bg-cover md:w-full h-96 rounded-e-full relative"
          data-aos="slide-right"
          data-aos-duration="3000"
        >
          <!-- social media -->
          <div
            class="bg-base-200 w-32 shadow-cyan-500/50 right-[480px] border-2 border-cyan-500 absolute top-8 px-5 flex rounded-lg"
          >
            <i class="fa-brands me-2 fa-instagram text-2xl text-orange-600"></i>
            <i class="fa-brands me-2 fa-facebook text-2xl text-blue-600"></i>
            <i class="fa-brands me-2 fa-x text-2xl text-black-600"></i>
          </div>
          <!-- end social media -->
          <!-- My Project -->
          <button
            class="bg-cyan-500 shadow-lg shadow-cyan-500/50 absolute top-6 left-72 p-3 rounded-lg grid"
          >
            <i class="fa-solid fa-circle-nodes text-white"></i>
            <span class="text-white font-bold">My Project</span>
          </button>
          <div
            class="w-48 py-3 rounded-full text-1xl font-bold text-center absolute top-8 left-11 glass bg-transparent shadow-lg"
          >
            <h2
              class="text-wrap bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-500"
            >
              <a href="#">Sistem Informasi Data Gender dan Anak</a>
            </h2>
          </div>
          <div
            class="w-48 py-3 rounded-full text-1xl font-bold text-center absolute top-28 left-24 glass bg-transparent shadow-lg"
          >
            <h2
              class="text-wrap bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-500"
            >
              <a href="#">Geo-Farm</a>
            </h2>
          </div>
          <div
            class="w-48 py-3 rounded-full text-1xl font-bold text-center absolute top-44 left-32 glass bg-transparent shadow-lg"
          >
            <h2
              class="text-wrap bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-500"
            >
              <a href="#">Makassar Wonder Website</a>
            </h2>
          </div>
          <div
            class="w-48 py-3 rounded-full text-1xl font-bold text-center absolute bottom-20 left-52 glass bg-transparent shadow-lg"
          >
            <h2
              class="text-wrap bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-violet-500"
            >
              <a href="#">Ngaji Apps</a>
            </h2>
          </div>

          <!-- My Profile -->
          <button
            class="bg-pink-700 shadow-lg shadow-pink-500/50 absolute top-6 right-80 p-3 rounded-lg grid"
          >
            <i class="fa-solid fa-user text-white"></i>
            <span class="text-white font-bold">My Profile</span>
          </button>
          <!-- end profile -->

          <img
            src="../assets/image/arrow-image.png"
            class="absolute -rotate-90 left-96 top-16"
            width="160"
            alt=""
          />
          <img
            src="../assets/image/arrow-image.png"
            class="absolute right-96 top-16"
            width="160"
            alt=""
          />
          <img
            src="../assets/image/photo1.png"
            width="300"
            alt=""
            class="absolute -top-20 -right-12 rotate-45 animate-pulse"
          />
          <img
            src="../assets/image//photo2.png"
            width="200"
            class="absolute bottom-0"
            alt=""
          />
          <div class="flex justify-center items-center">
            <img src="../assets/image/profile.png" width="255" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  components: {
    Navbar,
  },
  data() {
    return {
      isloader: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.isloader = false;
      console.log(this.isloader);
    }, 3000);
  },
  // methods: {
  //   getBack() {
  //     this.$router.push({ name: "loading" });
  //   },
  // },
  // mounted() {
  //   this.getBack();
  // },
};
</script>

<style></style>
