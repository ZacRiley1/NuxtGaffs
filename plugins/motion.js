// filepath: /home/zqri/www/NuxtGaffs/plugins/motion.js
import { MotionPlugin } from '@vueuse/motion';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(MotionPlugin);
});
