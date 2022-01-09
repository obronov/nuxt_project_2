import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '35a88799-ee22-4d9e-bbc9-ca7375cd9632',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);
