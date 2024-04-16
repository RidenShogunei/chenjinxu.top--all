<template>
  <div class="learn">
    <div class="cleanbook">
      <div class="title">一本每次储存50个字的书</div>
      <textarea class="change" type="text" maxlength="50" v-model="text"></textarea>
      <div class="num">目前的字数:{{ number }}</div>
      <div class="button"> <el-button size="large" @click="show">{{ this.mode }}</el-button>
        <el-button size="large" type="primary" @click="store">保存</el-button>
      </div>
    </div>
    <div class="log" v-if="this.look === true">
      <div class="content" v-for="(log, index) in logs" :key="index">
        <div> {{ log.text }} by the time {{ log.time }}</div>
        <el-button size="large" type="danger" @click="deleteitem(index)">删除本条</el-button>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      look: false,
      logs: [],
      num: 0,
      mode:'过往'
    };
  },
  methods: {
   /* clean() {
      let arr = this.logs.filter((element, index, self) => {
        return self.indexOf(element) === index;
      });
      this.logs=arr;
      console.log("去重了之后的logs"+this.logs)
    },*/
    deleteitem(index){
    console.log(index);
  },
    getLogs() {
      this.look = true;
      this.logs= []
      for (let i = 0; i < this.num; i++) {
        let savedata = JSON.parse(localStorage.getItem(i));
        this.logs.push(savedata);
      }
    },
    show() {
    this.look = !this.look;  // 简单地翻转 this.look 的值
    this.mode = this.look ? '关闭' : '过往';  // 根据 this.look 的值来设定 this.mode
    if (this.look) {  // 如果 this.look 是 true，那么获取 logs
      this.getLogs();
    }
  },
    store() {
      const timeNow = new Date().toLocaleString(); // 获取当前时间
      const savedText = {
        text: this.text,            // 存储文本
        time: timeNow               // 存储时间
      };
      localStorage.setItem(this.num, JSON.stringify(savedText)); // 将对象保存到localStorage
      this.text = '';
      this.num++;
      localStorage.setItem('num', JSON.stringify(this.num));
      if(this.look===true){
        this.getLogs();
      }
    },
    getnum() {
      let savenum = localStorage.getItem('num');
      if (savenum) {
        savenum = JSON.parse(savenum);
        this.num = savenum;
        console.log("now have storage " + this.num);
      } else {
        localStorage.setItem('num', JSON.stringify(this.num));
        console.log("now we don't have");
      }
    }
  },
  created() {
    this.getnum();
  },
  computed: {
    number() {
      return this.text.length;
    }
  }
};
</script>

<style scoped>
.learn {
  /* 之前的样式不变 */
  background-image: url('../assets/learn.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.cleanbook {
  width: 40%;
  height: 40%;
  background-color: bisque;
  opacity: 0.8;
  display: flex;
  align-items: center;
  flex-direction: column;
}

.title {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
}

.change {
  width: 80%;
  height: 60%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 40px;
}

.num {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
}

.button {
  display: flex;
  /* 设置为弹性布局 */
  justify-content: space-between;
  /* 水平方向上的对齐方式 */
  align-items: center;
  /* 垂直方向上的对齐方式 */
  width: 40%;
  /* 设置容器宽度，影响按钮间距离 */
  margin: auto;
  /* 让容器在父元素中居中 */
}

.content {
  width: 90%;
  height: 90%;
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 1px solid;
  padding: 10px;

}

.log {
  width: 40%;
  background-color: bisque;
  opacity: 0.8;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
}
</style>