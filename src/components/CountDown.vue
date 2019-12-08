<template>
  <div id="frame">
    <div class="countTime">
      <el-container>
        <el-aside>
          <el-row class="detail status">
            <el-col :span="10"><span>状态</span></el-col>
            <el-col :span="14"><span>{{ status }}</span></el-col>
          </el-row>
          <el-row class="detail pomodoro time">
            <el-col :span="10">
              <span>番茄钟时长</span>
            </el-col>
            <el-col :span="14">
              <el-select v-model="pomodoroTime" placeholder="番茄钟时长" filterable clearable>
                <el-option
                  v-for="item in minutesOptions"
                  :key="item"
                  :label="item+' min'"
                  :value="item"
                />
              </el-select>
            </el-col>
          </el-row>
          <el-row class="detail relax time">
            <el-col :span="10">
              <span>休息时长</span>
            </el-col>
            <el-col :span="14">
              <el-select v-model="relaxTime" placeholder="休息时长" filterable clearable> <!--   filterable可以手动输入，clearable清除-->
                <el-option
                  v-for="item in relaxMinutesOptions"
                  :key="item"
                  :label="item+' min'"
                  :value="item"
                />
              </el-select>
            </el-col>
          </el-row>
          <el-row class="detail pomodoro num">
            <el-col :span="10"><span>番茄钟个数</span></el-col>
            <el-col :span="14"><span>{{ pomodoroNum }}</span></el-col>
          </el-row>
          <el-row class="detail relax totalTime">
            <el-col :span="10"><span>总休息时长</span></el-col>
            <el-col :span="14"><span>{{ relaxTotalTime }}&nbsp;&nbsp;min</span></el-col>
          </el-row>
        </el-aside>
        <el-main>
          <el-progress type="circle" :percentage="progressPercentage" /><br>
          <el-button :disabled="startBtn" @click="startPomodoro">start</el-button>
          <el-button @click="stop">stop</el-button>
          <el-button :disabled="relaxBtn" @click="startRelax">startRelax</el-button><br>
          <span>{{ formatTime(currentSecond) }}</span>
        </el-main>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CountDown',
  data() {
    return {
      pomodoroTime: '',
      relaxTime: '',
      minutesOptions: [],
      relaxMinutesOptions: [],
      progressPercentage: 0,
      timer: null,
      totalSecond: 0,
      currentSecond: 0,
      pomodoroNum: 0,
      relaxTotalTime: 0,
      status: '',
      startBtn: false,
      relaxBtn: false
    }
  },
  created() {
    for (let i = 5; i <= 120; i += 5) {
      this.minutesOptions.push(i)
    }
    for (let i = 1; i <= 30; i++) {
      this.relaxMinutesOptions.push(i)
    }
  },
  methods: {
    startPomodoro() {
      if (!this.pomodoroTime) {
        this.$message({
          message: '请先制定番茄时长',
          type: 'warning'
        })
      } else {
        this.status = 'doing'
        this.displayBtn()
        this.currentSecond = 1
        this.progressPercentage = 0
        if (!this.timer) { // 先判断是否为空，防止重复执行
          this.totalSecond = this.pomodoroTime * 60
          // this.totalSecond = 3
          this.timer = setInterval(() => {
            this.progressPercentage = (this.currentSecond / this.totalSecond) * 100
            if (this.progressPercentage === 100) {
              this.pomodoroNum++
              clearInterval(this.timer)
              this.timer = null
              this.$message({
                message: '恭喜你完成番茄钟啦🍅！',
                type: 'success'
              })
              return
            }
            this.currentSecond += 1
          }, 1000)
        }
      }
    },
    startRelax() {
      if (!this.relaxTime) {
        this.$message({
          message: '请先制定休息时长',
          type: 'warning'
        })
      } else {
        this.status = 'relax'
        this.displayBtn()
        this.currentSecond = 1
        this.progressPercentage = 0
        if (!this.timer) { // 先判断是否为空，防止重复执行
          this.totalSecond = this.relaxTime * 60
          // this.totalSecond = 3
          this.timer = setInterval(() => {
            this.progressPercentage = (this.currentSecond / this.totalSecond) * 100
            if (this.progressPercentage === 100) {
              clearInterval(this.timer)
              this.timer = null
              this.relaxTotalTime += this.relaxTime
              this.$message({
                message: '休息时间到啦！',
                type: 'success'
              })
              return
            }
            this.currentSecond += 1
          }, 1000)
        }
      }
    },
    stop() {
      if (this.timer) {
        if (this.status === 'doing') {
          this.$message.error('这个番茄钟失效了')
        } else {
          this.$message('停止休息了')
        }
        this.status = ''
        this.displayBtn()
        clearInterval(this.timer)
        this.timer = null
        this.currentSecond = 0
        this.progressPercentage = 0
      } else {
        this.$message({
          message: '现在停止无效哦',
          type: 'warning'
        })
      }
    },
    formatTime(second) {
      return Math.floor((second / 60)) + '分钟' + (second % 60) + '秒' // Math.floor向下取整
    },
    displayBtn() {
      if (this.status === 'doing') {
        this.startBtn = true
        this.relaxBtn = true
      } else if (this.status === 'relax') {
        this.startBtn = true
        this.relaxBtn = true
      } else {
        this.startBtn = false
        this.relaxBtn = false
      }
    }
  }

}
</script>

<style scoped>
#frame {
  width: 100%;
  height: 900px;
  margin-top: 60px;
}
.countTime {
  text-align: center;
}
  .el-aside{
    width:400px;
    height: 100%;
    float: left;
  }
  .el-main{
    margin-left: auto;
    margin-right: auto;
    width: 500px;
  }
  .detail{
    line-height: 50px;
  }
  /deep/.el-progress__text{
    display: none;
  }
</style>
