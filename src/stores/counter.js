import {ref} from 'vue'
import {defineStore} from 'pinia'

export const useCounterStore = defineStore("counter", () => {
    const menuList = ref([
        {
            path: "/",
            name: "home",
            label: "首页",
            component: () => import('../views/home/Index.vue'),
        },
        {
            path: "/systemManage",
            name: "systemManage",
            label: "系统管理",
            children: [
                {
                    path: "/user",
                    name: "user",
                    label: "用户管理",
                    component: () => import('../views/home/Index.vue'),
                },
                {
                    path: "/dept",
                    name: "dept",
                    label: "部门管理",
                    children: [
                        {
                            path: "/o1",
                            name: "o1",
                            label: "机构管理",
                            children: [
                                {
                                    path: "/o2",
                                    name: "o2",
                                    label: "机构管理",
                                    component: () => import('../views/home/Index.vue'),
                                }
                            ]
                        }
                    ],
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
