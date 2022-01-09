import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'


const settings = {
  apiKey: '19be89f7-5a76-46d1-bc82-9d61cd680af8',
  coordorder: 'latlong',
  version: '2.1',
}

Vue.use(YmapPlugin, settings);
