<template>
    <div class="cont">
        <div class="text">
            <img src="../images/temp4.svg" class="picture" alt="" style="display: inline-block; width: 45%; height: auto;">
            <p class="location"><font-awesome-icon icon="fa-solid fa-location-pin" /> Location</p>
            <p class="time">longer text</p>
            <p class="temp">12°</p>
            <p class="temp2">longer text</p>
            <p class="stats"><font-awesome-icon icon="fa-solid fa-wind" /> text</p>
            <p class="stats"><font-awesome-icon icon="fa-solid fa-droplet" /> text</p>
            <p class="stats"><font-awesome-icon icon="fa-solid fa-wind" /> text</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cont {
    background-color: rgba(35,59,82,255);
    height: 45vh;
    width: 87%;
    border-radius: 8px;
    color: white;
    

    .location {
        display: inline-block;
        font-size: 1.1rem;
        font-weight: 700;
        margin: 5% 2% 0% 5%;

    }
    .time {
        display: inline-block;
        font-size: .9rem;
        font-weight: 100;
        margin: 0% 0% 4% 12%;
    }
    .temp {
        text-align: center;
        font-size: 3rem;
        font-weight: 700;  
    }
    .temp2 {
        text-align: center;
        font-size: 1rem;
        font-weight: 500;
        margin: 0% 0% 2% 0%;
    }
    .picture {
        float: right;
        margin: 3% 3% 0% 0%;
    }

    .stats {
        display: inline-block;
        margin-right: 20px;
        margin-left: 20px;
        font-size: 1rem;
        font-weight: 500;
        margin: 4% 3% 2% 6%;
    }

}
</style>