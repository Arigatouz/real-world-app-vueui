<template>
  <div class="event-card">
    <span>@ {{ event.time }} on {{ event.date }}</span>
    <h4>{{ event.title }}</h4>
  </div>
</template>

<script>
export default {
  /* eslint-disable */
  name: "event-card",
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
  transition: all 0.3s ease-in-out;
}
.event-card:hover {
  transform: scale(1.1);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
