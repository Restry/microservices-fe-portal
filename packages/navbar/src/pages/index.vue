/*
 * @Author: caoyp
 * @Date: 2020-03-15 17:11:59
 * @Last Modified by: caoyp
 * @Last Modified time: 2021-04-17 18:52:55
 * @Description: Description
 * @Route: Route
 */
<template>
    <div class='container-navbar'>
        <el-row>
            <el-button type="primary" @click="$router.push('/children1/index')">子应用1</el-button>
            <el-button type="success" @click="$router.push('/children2/index')">子应用2</el-button>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // testData: '这是navbar应用(菜单+头部)'
        };
    }
};
</script>

<style lang="less" scoped>
.container-navbar {
    display: flex;
    justify-content: center;
    align-items: center;
    color: red;
    font-size: 50px;
    margin-top: 100px;
    margin-bottom: 100px;
}
.singe {
    display: inline-block;
}
</style>
