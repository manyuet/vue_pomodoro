<template>
  <div id="frame">
    <el-row class="input-tag">
      <el-col :span="17">
        <el-input v-model="label" placeholder="请输入标签" />
      </el-col>
      <el-col :span="4">
        <el-button @click="addTag">add</el-button>
      </el-col>
    </el-row>
    <el-row>
      <el-tree
        :data="tags"
        node-key="id"
        default-expand-all
        :expand-on-click-node="false"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node">
          <span>{{ node.label }}</span>
          <span class="node-button">
            <span class="icon-plus" @click="addTask(data)">
              <font-awesome-icon :icon="['fas', 'plus']" />
            </span>
            <span class="icon-trash" @click="() => remove(node, data)">
              <font-awesome-icon :icon="['fas', 'trash-alt']" />
            </span>
          </span>
        </span>
      </el-tree>
    </el-row>
  </div>
</template>

<script>
let id = 1000
export default {
  name: 'LeftSideNavMenu',
  data() {
    return {
      label: '',
      tags: []
    }
  },
  computed: {},
  methods: {
    addTag() {
      this.tags.push({ id: id++, label: this.label, children: [] })
      this.label = ''
    },
    addTask(tag) {
      this.$prompt('请输入待办事项', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.append(tag, value)
        this.$message({
          type: 'success',
          message: '添加 ' + value + ' 成功'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '取消输入'
        })
      })
    },
    append(tag, label) {
      const newChild = { id: id++, label: label, children: [] }
      if (!tag.children) {
        this.$set(tag, 'children', [])
      }
      tag.children.push(newChild)
    },
    remove(node, tag) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === tag.id)
      children.splice(index, 1)
    }

  }
}
</script>

<style scoped>
#frame {
  height: 100%;
  background-color: white;
}

.input-tag {
  margin-bottom: 30px;
}
  .node-button{
    float: right;
  }
</style>
