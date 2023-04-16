<template>
    <div class="cont">
        <div class="text">
            <p class="p1">text</p>
            <p class="p2">longer text</p>
            <p class="p1">1234</p>
        </div>
        <div class="icon">
            <img src="src/images/Icon.svg" alt="" width="80px" height="80px">
        </div>
    </div>
</template>

<style scoped lang="scss">
.cont {
    background-color: rgb(221, 240, 251);
    margin: 0% 2% 0% 2%;
    height: 18vh;
    width: 40%;
    border-radius: 8px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .text {
        .p1 {
            font-size: 1.3rem;
            font-weight: 500;
        }
        .p2{
            font-size: 0.95rem;
            color: gray;
        }
    }
}
</style>
