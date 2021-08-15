<template>
  <v-container fluid>
    <div class="container col-xl-10 col-sm-12">
      <section class="my-5">
        <h1 class="h1-responsive font-weight-bold text-center my-5">
          Contact us
        </h1>
        <div class="row">
          <div class="col-lg-6">
            <div
              id="map-container-section"
              class="z-depth-1-half map-container-section mb-4"
              style="height: 450px"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2729.221796529417!2d29.025560115123568!3d46.83932354865727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c99e4f8d092f3b%3A0x73ba943177dbadff!2sASCONI+Winery!5e0!3m2!1sen!2s!4v1561881493066!5m2!1sen!2s"
                width="600"
                height="450"
                style="border:0"
                allowfullscreen
              />
            </div>
            <div class="row text-center">
              <div class="col-md-4 ic">
                <a class="navbar-brand brand-wrap">
                  <i class="bi bi-geo-alt-fill" />
                </a>
                <p class="mb-0 text-secondary">
                  New York, 94126
                </p>
                <p class="mb-md-0 text-secondary">
                  United States
                </p>
              </div>
              <div class="col-md-4 ic">
                <a class="navbar-brand brand-wrap">
                  <i class="bi bi-telephone-forward-fill" />
                </a>
                <p class="mb-0 text-secondary">
                  + 01 234 567 89
                </p>
                <p class="mb-md-0 text-secondary">
                  Mon - Fri, 8:00-22:00
                </p>
              </div>
              <div class="col-md-4 ic">
                <a class="navbar-brand brand-wrap">
                  <i class="bi bi-envelope" />
                </a>
                <p class="mb-0 text-secondary">
                  info@gmail.com
                </p>
                <p class="mb-0 text-secondary">
                  sale@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "Contacts"
}
</script>

<style scoped>

</style>