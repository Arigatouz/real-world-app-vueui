<template>
  <h1>Up Coming Events</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
// eslint-disable-next-line
import EventCard from "@/components/EventCard.vue";
import EventServices from "../services/EventService.js";
export default {
  /* eslint-disable */
  name: "Home",
  components: {
    EventCard,
  },
  data() {
    return {
      events: null,
    };
  },
  created() {
    // axios
    //   .get(
    //     "https://my-json-server.typicode.com/Arigatouz/real-world-app-vueui/events"
    //     // {
    //     // onDownloadProgress: (e) => {
    //     // console.log(e);
    //     // e.target.onloadend(console.log("loaded from onloadend"));
    //     // console.log(Math.round((e.loaded * 100) / e.total)); using is while get request
    //     // console.log(Math.round((e.total + 1) / e.loaded) * 100); using it while post request
    //     // testing some axios benefits
    //     // },
    //     // }
    //   )
    EventServices.getEvents()
      .get("/events")
      .then((response) => (this.events = response.data))
      .catch((error) => console.error(error));
  },
};
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
