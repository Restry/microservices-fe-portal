<template>
    <div class='container-children'>
        {{ testData }}
    </div>
</template>

<script>
export default {
    data() {
        return {
            testData: '这是子应用1'
        };
    },
    mounted() {
        window.dispatchEvent(new CustomEvent('logout'));
    }
};
</script>

<style lang="less" scoped>
.container-children {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    color: blue;
    font-size: 50px;
}
</style>
