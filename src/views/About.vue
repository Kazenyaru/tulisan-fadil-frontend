<template>
  <div>
    <Header src="blog/about-bg.jpg" />
    <div class="container">
      <div class="row">
        <div class="col-lg-10 mx-auto">
          <div class="text-center pb-5">
            <img
              class="img-circle"
              src="images/blog/5-512.png"
              style="width: 200px !important; height: 200px !important;"
            >
          </div>

          <section
            class="about"
            id="about"
          >
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h2 class="text-center">
                    About Writer
                  </h2>
                  <hr>
                </div>
              </div>

              <div class="row justify-content-md-center">
                <div class="col-md-8">
                  <ul class="list-group">
                    <li class="list-group-item list-group-item-dark" />
                    <li class="list-group-item">
                      Muhamad Fadil
                    </li>
                    <li class="list-group-item">
                      XI-RPL-1
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue';

export default {
  components: {
    Header,
  },
};
</script>
