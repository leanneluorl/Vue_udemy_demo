import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';

import UsersList from './components/users/UsersList.vue';
import UsersFooter from './components/users/UsersFooter.vue';

import NotFound from './components/nav/notFound.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect:'/teams' }, //rediect path  //path changed
        //alias: same way as redirect without path changed { path: '/teams', component: TeamsList, alias:'/' },

        //Nest route
        {   name: 'teams',
            path: '/teams', 
            components: {   default: TeamsList,
                            footer: TeamsFooter} ,
            children:[
                { name:'team-members', 
                path: ':teamId', 
                component: TeamMembers, 
                props: true },
            ]
        },
        {   path: '/users', 
            components: {   default: UsersList,
            footer: UsersFooter} ,
            beforeEnter(to, from, next) {
                console.log('beforeEnter users path');
                console.log('to:', to, 'from:', from);  
                next();
            }
        },
        //"Order" matters....  { path: '/teams/otherPath, component: TeamsList },  
        
        //any invalid path
        { path: '/:notFound(.*)', component:NotFound },
    ],
    linkActiveClass: 'active',
    scrollBehavior(to, from, savedPosition) {
        
        if(savedPosition){
            return savedPosition
        }
        return {top:0, left:0}
    }
});

//navigation guard
router.beforeEach( function(to, from, next){
    console.log('Global BeforeEach');
    console.log('to:', to, 'from:',from);
    
    // Redirect through next() same as next('/path...')
    // if(to.name !== 'team-members'){
    //     next({name:'team-members', params:{teamId: 't2'}});
    // } 
    next();
})
router.afterEach( function(to, from){
    // sending analytics data
    console.log('Global afterEach');
    console.log('to:', to, 'from:',from);
    
})

const app = createApp(App)

app.use(router);

app.mount('#app');
