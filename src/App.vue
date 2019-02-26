<template>
  <div id="app">
    <nav>
      <ul>
        <li><router-link to="/jiance">监测</router-link></li>
      </ul>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  ip: '12'
}
</script>

<style>

</style>
