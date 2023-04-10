<template>
    <div class="cont-i">
        <p>text</p>
        <img src="src/images/sun.svg" alt="" width="32" height="32">
        <p class="t">20°</p>
    </div>
</template>

<style scoped lang="scss" >
.cont-i {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 15vh;
    row-gap: 0.3rem;
    background-color: lightgrey;
    border-radius: 10px;
    .t {
        font-size: 0.9rem;
        font-weight: 600;
    }
}
p {
    font-size: 0.75rem;
    font-weight: 500;
}
</style>