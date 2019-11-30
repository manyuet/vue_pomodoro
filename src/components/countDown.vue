<template>
  <div id="frame">
    <div class="countTime">
      <el-progress
        type="circle"
        :percentage="percentage"
        :width="200"
      ></el-progress>
      <div>
        <i class="el-icon-timer"></i>&nbsp;&nbsp;
        <span
          >{{ this.minutes }}&nbsp;&nbsp;{{ $t("m.minute") }}&nbsp;&nbsp;{{
            this.seconds
          }}&nbsp;&nbsp;{{ $t("m.second") }}</span
        ><br />
        <el-button @click="start" :disabled="displayStart">{{
          $t("m.start")
        }}</el-button>
        <el-button @click="stop" :disabled="displayEnd">{{
          $t("m.end")
        }}</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "countDown",
  data() {
    return {
      startime: 1500,
      minutes: 25,
      seconds: 0,
      displayStart: false,
      displayEnd: true,
      interval: null,
      percentage: 0,
      flag: 0
    };
  },
  methods: {
    CountDown() {
      if (this.startime === 1200) {
        this.percentage = 20;
      }
      if (this.startime === 900) {
        this.percentage = 40;
      }
      if (this.startime === 600) {
        this.percentage = 60;
      }
      if (this.startime === 300) {
        this.percentage = 80;
      }
      if (this.startime === 0) {
        this.percentage = 100;
      }
      if (this.startime >= 0) {
        this.minutes = Math.floor(this.startime / 60);
        this.seconds = Math.floor(this.startime % 60);
        --this.startime;
        this.flag++;
        // if(this.flag%15===0){
        //     console.log(this.flag)
        //     this.percentage++
        // }
      }
    },
    start() {
      this.displayStart = true;
      this.displayEnd = false;
      if (this.interval != null) {
        clearInterval(this.interval);
        this.interval = null;
      }
      this.interval = setInterval(this.CountDown, 1000);
    },
    stop() {
      this.$confirm("此操作将结束番茄钟, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "warning",
            message: "番茄钟无效!"
          });
          clearInterval(this.interval);
          this.flag = 0;
          this.percentage = 0;
          this.interval = null;
          this.displayStart = false;
          this.displayEnd = true;
          this.minutes = 25;
          this.seconds = 0;
          this.startime = 1500;
        })
        .catch(() => {
          this.$message({
            type: "success",
            message: "继续"
          });
        });
    }
  }
};
</script>

<style scoped>
/*/deep/.el-progress-circle{*/
/*   width: 200px;*/
/*    height: 200px;*/
/*}*/
#frame {
  width: 1080px;
  height: 900px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 60px;
}

.countTime {
  width: 600px;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
}
</style>
