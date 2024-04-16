<template>
  <div class="game">
    <div class="title">扫雷游戏</div>
    <div class="panzi">
      <table id="minesweeper">
        <tbody>
          <tr v-for="(row, rowIndex) in rows" :key="rowIndex">
            <td class="gezi" v-for="(col, colIndex) in row" :key="colIndex" @click="clickCell(rowIndex, colIndex)">
              <div v-if="!col.isRevealed">?</div> <!-- If not revealed, show a question mark. -->
              <div v-else-if="col.mine"><img src="../../assets/shibao.jpg" class="img"
                  :class="{ animate: isMineExploded }" /></div>
              <!-- If revealed and it's a mine, show a bomb. -->
              <div v-else>{{ col.value }}</div> <!-- If revealed and it's not a mine, show a zero. -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <audio id="mine-sound" src="/badend.wav"></audio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rows: [],
      rowNum: parseInt(this.$route.query.rows),
      colNum: parseInt(this.$route.query.columns),
      leiNum: parseInt(this.$route.query.mines),
      down:0,
    };
  },
  methods: {
    count() {
      this.rows = this.rows.map((row, rowIndex) => {
        return row.map((cell, colIndex) => {
          if (cell.mine) {
            return cell;  // 如果当前格子是雷，跳过。
          }
          let minesAround = 0;
          for (let dx = -1; dx <= 1; dx++) {
            for (let dy = -1; dy <= 1; dy++) {
              let newX = rowIndex + dx;
              let newY = colIndex + dy;
              // 如果新的位置还在地图内，并且该位置上是地雷
              if (newX >= 0 && newY >= 0 && newX < this.rowNum && newY < this.colNum && this.rows[newX][newY].mine) {
                minesAround++;
              }
            }
          }
          // 返回新的格子对象
          return { ...cell, value: minesAround };
        });
      });
    },
    clickCell(rowIndex, colIndex) {
      // 标记格子为已揭示
      console.log(rowIndex, colIndex)
      this.rows[rowIndex][colIndex].isRevealed = true;
      if (this.rows[rowIndex][colIndex].mine === true) {
        var sound = document.getElementById('mine-sound');
        sound.play();
        this.isMineExploded = true;
        setTimeout(() => {
          this.isMineExploded = false;
          this.$router.push('/end')
        }, 1000);  // 添加动
        
      }else{
        this.down++;
        if(this.down===this.left){
          this.$router.push('/win')
        }
      }

    },
    start() {
      console.log(this.rowNum,this. colNum,this.leiNum)
      let rows = Array(this.rowNum).fill().map(() => Array(this.colNum).fill().map(() => ({ value: 0, mine: false, isRevealed: false })));
      // 随机分布雷
      let count = 0;
      while (count < this.leiNum) {
        let rowIndex = Math.floor(Math.random() * this.rowNum);
        let colIndex = Math.floor(Math.random() * this.colNum);
        if (!rows[rowIndex][colIndex].mine) {
          rows[rowIndex][colIndex].mine = true;
          count++;
        }
      }
      // 更新rows
      this.rows = rows;
      this.count();
      console.log(this.rows)
    },

  },
  mounted() {
    this.start();
  },
  computed:{
    left(){
      return this.rowNum*this.colNum-this.leiNum;
    }
  }
};
</script>

<style scoped>
.game {
  /* 之前的样式不变 */
  background-image: url('../../assets/starhunter.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  /* 使用 flexbox 将内容居中 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* flex-direction 为 column 可以使 h1 和 h2 垂直排列 */
  flex-direction: column;
}

.title {
  padding: 20px;
  display: flex;
  font-family: 'Times New Roman', Times, serif;
  /* 设置字体为 Times New Roman */
  font-style: italic;
  /* 设置字体样式为斜体 */
  font-size: 60px;
  text-align: center;
  color: #ffffff;
  justify-content: center;
  align-items: center;
}

.panzi {
  height: 65%;
  width: 45%;
  background-color: brown;
  opacity: 0.8;
  padding-bottom: 10px;
  margin: 10px;
  display: flex;
}

#minesweeper {
  font-family: 'Times New Roman', Times, serif;
  /* 设置字体为 Times New Roman */
  font-style: italic;
  /* 设置字体样式为斜体 */
  font-size: 37px;
  text-align: center;
  color: #000000;
  justify-content: center;
  align-items: center;
  display: table;

}

.gezi {
  height: 25px;
  width: 25px;
  padding-left: 25px;
  padding-top: 6px;
  padding-bottom: 6px;
  padding-right: 25px;
  border: white solid;
  background-color: rgb(49, 34, 34);
  color: white;
  ;
}

.img {
  height: 60px;
  width: 60px;
  object-fit: contain;
}

.animate {
  animation: scaleUpAndDown 1.0s ease-in-out both;
}

@keyframes scaleUpAndDown {

  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(20);
    opacity: 1;
  }
}
</style>