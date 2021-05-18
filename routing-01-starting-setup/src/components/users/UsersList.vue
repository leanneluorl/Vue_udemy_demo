<template>
  <button @click="confirmInput">Confirm</button>
  <button @click="saveChange">Save change</button>
  <ul>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
  </ul>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data() {
    return {
      changeSaved: false
    }
  },
  methods: {
    confirmInput() {
      this.$router.push('/teams');
      //this.$router.back(), this.$router.forward()
    },
    saveChange() {
      console.log(this.changeSaved);
      this.changeSaved = true;
      console.log('after',this.changeSaved);
    }
  },
  beforeRouteEnter(to, from, next) {
    console.log('beforeRouteEnter usersList');
    console.log('to:', to, 'from:', from);  
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log("route",this.$router)
    console.log('beforeRouteLeave usersList', this.changeSaved);
    console.log('to:', to, 'from:', from); 
    if(this.changeSaved){
      next();
    }else{
      const userLeave = confirm("Are you sure?");
      next(userLeave);
    }
    
  },
  created() {
    
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>