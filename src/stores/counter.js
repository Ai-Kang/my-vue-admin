import {ref, computed} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore("counter", () => {
    const menuList = ref([
        {
            path: "/",
            name: "home",
            label: "首页",
            icon: "home",
            component: () => import('../views/home/Index.vue'),
        },
        {
            path: "/systemManage",
            name: "systemManage",
            label: "系统管理",
            icon: "user",
            children: [
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    icon: "user",
                    component: () => import('../views/home/Index.vue'),
                }
            ]
        }
    ]);

    const menuCollapse = ref(false);

    function setMenuCollapse() {
        menuCollapse.value = !menuCollapse.value
    }


    return {
        menuList,
        menuCollapse,
        setMenuCollapse,
    }
})
