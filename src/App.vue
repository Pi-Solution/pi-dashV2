<template>
  <div id="app">
    <PiDashboard
      :settings="piDashboardSettings"
      :widgets="widgets"
    />
  </div>
</template>

<script>
import PiDashboard from './components/Pi-dashboard'
import widgets from '../public/widgets.json'

export default {
  name: 'App',
  components: {
    PiDashboard
  },
  data () {
    return {
      piDashboardSettings: {
        gridTemplateColumns: 'repeat(15, 1fr)',
        gridTemplateRows: 'repeat(10, 80px)',
        gridGap: '5px'
      },
      widgets
    }
  }
}
</script>

<style>
  body{
    margin: 0;
    padding: 0;

    min-height: 200vh;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
