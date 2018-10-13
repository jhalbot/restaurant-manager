import Vue from 'vue';
import Router from 'vue-router';
import QueueModal from '../components/QueueModal';
// import Reservations from '../components/Reservations';
import Tables from '../components/Tables';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'tables',
            component: Tables
        },
        {
            path: '/queuemodal',
            name: 'queue-modal',
            component: QueueModal
        }
    ]
})