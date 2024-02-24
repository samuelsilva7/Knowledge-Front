<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Base do Conhecimento" />
        <div class="stats">
          <Stat title="Categorias" :value="stat.categories"
            icon="fa fa-folder" color="#d54d50" />  
          <Stat title="Artigos" :value="stat.articles"
            icon="fa fa-file" color="#3bc480" />  
          <Stat title="Usuários" :value="stat.users"
            icon="fa fa-user" color="#3282cd" />  
        </div>
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global.js'

export default {
  name: 'Home',
  components: { PageTitle, Stat },
  data: function() {
    return {
      stat: {}
    }
  },
  methods: {
    getStat() {
      axios.get(`${baseApiUrl}/stat`)
      .then(res => this.stat = res.data)
        console.log("stat", this.stat);
    }
  },
  mounted() {
    this.getStat()
  }
}

</script>

<style>

</style>