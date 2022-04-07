<template>
    <div>
        <a-menu
            v-model:selectedKeys="current"
            mode="horizontal"
            class="menu-s"
            forceSubMenuRender="ture"
        >
            <a-menu-item
                href="https://www.novogene.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img
                    src="https://www.novogene.com/views/default/img/logo.png"
                    alt=""
                />
            </a-menu-item>
            <a-menu-item key="mail">
                <template>
                    <mail-outlined />
                </template>
                <router-link to="/"></router-link> 首页
            </a-menu-item>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title> 科技服务</template>
                <a-menu-item-group title="建库测序">
                    <a-menu-item key="setting:1"
                        ><router-link to="/2daizhijianku">
                            二代建库测序服务</router-link
                        ></a-menu-item
                    >
                    <a-menu-item key="setting:2"
                        ><router-link to="/boozhijianku"
                            >三代建库测序服务</router-link
                        ></a-menu-item
                    >
                    <a-menu-item key="setting:3"
                        >Bionano 建库测序服务
                    </a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title>科研产品</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title>肿瘤合作研究</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title>遗传合作研究</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title>药企服务</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                </a-menu-item-group>
            </a-sub-menu>
            <a-sub-menu>
                <template>
                    <setting-outlined />
                </template>
                <template #title>关于诺和</template>
                <a-menu-item-group title="Item 1">
                    <a-menu-item key="setting:1">Option 1</a-menu-item>
                    <a-menu-item key="setting:2">Option 2</a-menu-item>
                </a-menu-item-group>
                <a-menu-item-group title="Item 2">
                    <a-menu-item key="setting:3">Option 3</a-menu-item>
                    <a-menu-item key="setting:4">Option 4</a-menu-item>
                    <a
                        href="https://virtualboothnovogeneamea.com/?utm_source=Website&utm_medium=banner&utm_campaign=AMEA-Virtual+Booth"
                    ></a>
                </a-menu-item-group>
            </a-sub-menu>
        </a-menu>
    </div>
</template>
<script>
import { ref } from 'vue'
import { MailOutlined, SettingOutlined } from '@ant-design/icons-vue'
export default {
    setup() {
        const current = ref(['mail'])
        return {
            current,
        }
    },

    components: {
        MailOutlined,
        SettingOutlined,
    },
    name: '',
    props: {},
    data() {
        return {}
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
}
</script>
<style  scoped>
.menu-s {
    height: 80px;
    line-height: 80px;
}
</style>