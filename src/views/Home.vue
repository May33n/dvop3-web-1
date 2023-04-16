<script>
import Maly from '../components/Maly.vue';
import Today from '../components/Today.vue';
import Tomorrow from '../components/Tomorrow.vue';
import Velky from '../components/Velky.vue';


export default {
    name: 'Home',
  components: { Today, Tomorrow, Maly, Velky }

}
</script>

<template>
    <main class="home-page">
		<div class="cont-main">
      <div class="middle">
        <div class="lupa">
            <span class="material-icons"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
          <p>Search here...</p>
          <span class="material-icons"><font-awesome-icon icon="fa-solid fa-bell" /></span>
          <span class="material-icons"><font-awesome-icon icon="fa-solid fa-circle" /></span>
        </div>
        <div class="velky">
          <Velky/>
        </div>
        <div class="maly">
          <Maly/>
          <Maly/>
          <Maly/>
          <Maly/>
        </div>
      </div>
      <div class="divider"></div>
      <div class="flex-container-right">
        <div class="week">
            <span class="material-icons"><font-awesome-icon icon="fa-solid fa-chevron-left" /></span>
          <h3>This Week</h3>
          <span class="material-icons"><font-awesome-icon icon="fa-solid fa-chevron-right" /></span>
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
        <div class="tomorrow-grid-cont">
          <Tomorrow />
          <Tomorrow />
          <Tomorrow />
          <Tomorrow />
          <Tomorrow />
          <Tomorrow />
          <Tomorrow />
        </div>
      </div>
    </div>

    </main>
</template>


<style scoped lang="scss">
.cont-main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color: #242424;
  background-color: rgba(255, 255, 255, 0.87);
	
  .middle {
    display: flex;
    margin: 0;
    width: 53vw;
    min-height: 80vh;
    flex-direction: column;
    .lupa {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      color: gray;
      width: 100%;
      padding-top: 3vh;
      p{
        width: 70%;
      }
    }
    .velky{
      height: 45vh;
      margin: 2vh;
      display: flex;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
    .maly{
      height: 40vh;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
  }
  .divider {
    background-color: gray;
    height: 95vh;
    width: 0.1vw;
  }
  .flex-container-right {
    display: flex;
    flex-direction: column;
    width: 23vw;
    min-height: 80vh;
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
      height: 20%;
      p {
        padding: 0vh 0vh 0vh 2.75vh;
        font-size: 1rem;
        height: 6rem;
      }
      .today-grid-cont {
        display: grid;
        padding-top: 1rem;
        grid-template-columns: 11vh 11vh 11vh 11vh;
        justify-content: space-evenly;
      }
    }
    .tomorrow-grid-cont {
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
    height: 80vh;
  }
}
h3 {
  margin: 0vw 4vw 0vw 4vw;
  font-weight: 500;
}
</style>
