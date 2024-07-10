<template>
  <div class="dark-checkbox">
    <label for="d_checkbox">
      ☀
    </label>
    <input id="d_checkbox" 
    type="checkbox" :checked="isDark" 
    @change="switchColorMode">
  </div>
</template>
<script lang="ts" setup>
import {
    darkModeQuery, 
    switchToDarkMode, 
    switchToLightMode, 
    isDarkModeInWeb, 
    isDarkModeInSystem 
} from '../utils/theme_util.ts';
import {ref} from 'vue';
const isDark = ref(true);
// 跟随浏览器初始化暗色模式
if(isDarkModeInSystem()){
  switchToDarkMode();
}else{
  switchToLightMode();
}
isDark.value=darkModeQuery.matches;
// 媒体查询响应颜色模式
darkModeQuery.addEventListener(
  "change", 
  switchColorMode);
// 手动切换暗色模式
function switchColorMode(event: any): void{
  if(event instanceof Event)
  {
    if(isDarkModeInWeb()){
      switchToLightMode();
    }else{
      switchToDarkMode();
    }
  }
  if(event instanceof MediaQueryListEvent){
    if(isDarkModeInSystem()){
      switchToDarkMode();
    }else{
      switchToLightMode();
    }
  }
  isDark.value=darkModeQuery.matches;
}
</script>
<style scoped>
.dark-checkbox {
  display:inline-flex;
  align-items: center;
  vertical-align: middle;
  flex-wrap: nowrap;
  user-select: none;
  padding-bottom: calc(var(--margin-small));
  transition: all 200ms ease-in-out;
}
.dark-checkbox:hover{
  color: var(--orange5);
}
input[type=checkbox] {
  display: none;
}
.dark-checkbox label{
  cursor: pointer;
  padding: 0 var(--padding-large);
  line-height:  calc(var(--font-small)*2);
  font-size: calc(var(--font-small)*2);
}
</style>