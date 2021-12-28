<template>
    <div class='container-children2'>
        {{ testData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: '这是子应用2'
        };
    }
};
</script>

<style lang="less" scoped>
.container-children2 {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: green;
    font-size: 50px;
}
</style>
