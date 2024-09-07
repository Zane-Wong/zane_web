<template>
  <li>
    <a @click="jump(data.url, $event)" :href="data.url">
      <!--:href="data.url" rel="noopener noreferrer" -->
      <div class="cover-img">
        <div class="cover-mask"></div>
        <img :src="data.coverImg" :alt="data.coverImg">
      </div>
      <div class="intro p-10">
        <h3 class="m-b-5">{{ data.title }}</h3>
        <!-- <h4>{{ data.subTitle }}</h4> -->
        <p class="m-b-10">{{ data.description }}</p>
        <div>
          <Tag v-for="tag in data.tags" class="m-r-10">{{ tag }}</Tag>
        </div>
        <div class="platform">{{ data.platform }}</div>
      </div>
    </a>
  </li>
</template>
<script lang="ts">
import Tag from '@/components/Tag.vue';

export default {
  name: "Card",
  components: {Tag},
  props: ['data'],
  data() {
    return {
      // title: 'tilte',
      // subTitle: 'subTitle',
      // description: 'description'
    }
  },
  methods: {
    jump(url: string, e: Event) {
      if (url.includes('://')) {
        window.open(url, '_blank');
        e.preventDefault(); // 阻止默认事件
      }
    }
  }
}
</script>
<style scoped>
li {
  height: calc(2 * var(--height-huge));
  width: var(--width-max);
  min-width: var(--width-max);
  background-color: rgba(255, 255, 255, 0.84);
  backdrop-filter: var(--zane-card-bd-filter);
  border-radius: var(--radius-max);
  overflow: hidden;
  border: var(--border-narrow) solid var(--gray4);
  transition: transform 300ms ease-in-out;
  box-shadow: 0px 0px 20px rgba(120, 120, 120, 0.19);

  .cover-img {
    position: relative;
    background-color: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(var(--blur-small));
    height: calc(var(--height-huge));
    overflow: hidden;

    img {
      width: 100%;
    }

    .cover-mask {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .intro {
    transition: all 300ms ease-in-out;
    position: relative;

    h3 {
      height: calc(1.5 * var(--font-huge));
      font-weight: 600;
      font-size: var(--font-huge);
    }

    p {
      font-size: var(--font-default);
      height: calc(2.5 * var(--font-default));
      display: -webkit-box;
      line-height: calc(1.25 * var(--font-default));
      overflow: hidden;
      -webkit-line-clamp: 2; /** 截断的行数 */
      -webkit-box-orient: vertical;
    }

    .platform {
      background-color: var(--blue3);
      width: 100%;
      position: absolute;
      bottom: 15px;
      right: calc(-113px);
      text-align: center;
      line-height: calc(1.5 * var(--font-default));
      transform: rotateZ(-45deg);
      font-size: var(--font-small);
    }
  }
}

li:hover {
  transform: translateY(calc(-1 * var(--font-default)));
  cursor: pointer;
  user-select: none;
}

.dark li {
  background-color: rgba(160, 160, 160, 0.16);
  /* background-color: rgba(245,245,245,0.16); */
  border-color: var(--gray10);
  box-shadow: 0px 0px 20px rgba(72, 72, 72, 0.19);

  .cover-img {
    /* background-color: rgba(215,215,215,0.2); */

    .cover-mask {
      background-color: rgba(0, 0, 0, 0.4);
    }
  }

  .intro {
    .platform {
      background-color: var(--blue7);
    }
  }
}
</style>