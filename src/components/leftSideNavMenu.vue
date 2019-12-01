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
        @node-click="handleNodeClick"
      >
        <span slot-scope="{ node, data }" class="custom-tree-node"><!--slot-scope自定义树节点的内容，参数为 { node, data }-->
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
      tags: [
        {
          label: '看书',
          id: 1,
          children: [
            {
              label: '技术类',
              id: 2,
              children: [
                {
                  label: 'java',
                  id: 3
                },
                {
                  label: 'c++',
                  id: 4
                }]
            },
            {
              label: '文学类',
              id: 5
            }]
        }]
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
    append(tag, label) { // 拿到节点跟插入的数据
      const newChild = { id: id++, label: label, children: [] } // 为新节点初始化数据
      if (!tag.children) { // 判断父节点是否有子节点
        this.$set(tag, 'children', []) // 没有就加子节点
      }
      tag.children.push(newChild)
    },
    remove(node, tag) { // 拿到删除节点的所有信息和删除节点
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === tag.id)
      children.splice(index, 1)
    },
    handleNodeClick(data) {
      const tags = this.extractSubTags(data)
      this.$store.commit('chooseTag', tags)
    },
    extractSubTags(tag) {
      const queue = [] // 广搜队列
      const tags = [] // 存放提取出来的所有子标签
      queue.push(tag) // 一开始，先把标签放进队列
      while (queue.length > 0) { // 当队列不为空时，继续下列的操作
        const subTag = queue.shift() // 取出当前队列的第一个标签
        tags.push(subTag.label) // 把该标签的label属性，放进tags数组里
        if (subTag.children) { // 如果拿出来的这个标签有子标签，那么把所有子标签依次放到队列的尾部
          for (const child of subTag.children) {
            queue.push(child)
          }
        }
      }
      return tags
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
