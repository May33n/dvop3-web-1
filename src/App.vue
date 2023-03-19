<script>
import Today from './components/Today.vue'
import Tommorow from './components/Tommorow.vue';

export default {
  name: 'App',
  components: { Today, Tommorow }
}
</script>


<template>
  <main class="app">
    <div class="cont-main">
      <div class="cont-left">left</div>
      <div class="middle">middle</div>
      <div class="divider"></div>
      <div class="flex-container-right">
        <div class="week">
          <img src="./images/arrow-left.svg" alt="" width="24" height="24">
          <h3>This Week</h3>
          <img src="./images/arrow-right.svg" alt="" width="24" height="24">
        </div>
        <div class="today">
          <p>Today</p>
          <div class="today-grid-cont">
            <Today />
            <Today />
            <Today />
            <Today />
          </div>
        </div>
        <div class="tommorow-grid-cont">
          <Tommorow />
          <Tommorow />
          <Tommorow />
          <Tommorow />
          <Tommorow />
          <Tommorow />
          <Tommorow />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.cont-main {
  display: flex;
  flex-direction: row;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);

  .divider {
    background-color: gray;
    height: 100vh;
    width: 0.1vw;
  }

  .flex-container-right {
    display: flex;
    flex-direction: column;
    width: 25vw;
    height: 100vh;
    padding: 0.5vw;
    align-items: center;
    row-gap: 2vh;

    .week {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      height: 9.5%;
    }

    .today {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 25%;

      p {
        padding: 0vh 0vh 0vh 2.75vh;
        font-size: 1rem;
        height: 7vh;
      }

      .today-grid-cont {
        display: grid;
        grid-template-columns: 11vh 11vh 11vh 11vh;
        justify-content: space-around;
      }
    }

    .tommorow-grid-cont {
      display: grid;
      width: 95%;
      grid-template-rows: 8vh 8vh 8vh 8vh 8vh 8vh 8vh;
      row-gap: 1vh;
    }
  }

  .cont-left {
    margin: 0;
    display: flex;
    width: 20vw;
    height: 100vh;
  }

  .middle {
    margin: 0;
    display: flex;
    width: 54vw;
    height: 100vh;
  }
}

h3 {
  margin: 0vw 4vw 0vw 4vw;
  font-weight: 500;
}</style>

