<template>
  <div class="all_Container">
    <h1>GoogleAPI</h1>
    <section class="border border-2 border-warning">
      <div>
        <p class="h4">GoogleCalender</p>
        <div>
          {{ googleCalender }}
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { reactive, toRefs, onMounted } from "vue"
export default {
  setup() {
    const data = reactive({
      googleCalender: "test",
    })
    const mountedRef = onMounted(() => {
      fetch("https://dog.ceo/api/breeds/image/random")
        .then(function (res) {
          return res.json()
        })
        .then((json) => {
          data.googleCalender = json
        })
    })

    let { googleCalender } = toRefs(data)
    return { googleCalender, mountedRef }
  },
}
</script>
