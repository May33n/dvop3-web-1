<template>
    <div class="cont-i">
      <div>
        <p class="day"> Text </p>
        <p class="date">date</p>
      </div>
      <div class="d2">
        <p>20°</p>
      </div>
      <div><img src="src/images/sunY.svg" alt="" width="38" height="38"></div>
    </div>
  </template>
  
  <style scoped lang="scss">
  .cont-i {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0.5vh 1.5vh;
    .day {
      font-size: 0.9rem;
    }
    .date {
      font-size: 0.8rem;
      color: gray;
    }
    .d2 {
      font-size: 1.1rem;
      font-weight: 600;
    }
  }</style>