<template>
    <v-sheet class="position-relative" min-height="450">
        <!-- 登入按鈕 -->
        <div class="position-absolute d-flex align-center justify-center w-100 h-100">
            <v-btn color="deep-purple-darken-2" size="x-large" @click="changeDialog">
                登入
            </v-btn>
        </div>
        <!-- 登入提示 -->
        <v-fade-transition hide-on-leave>
            <v-card v-if="dialog" append-icon="$close" class="mx-auto" elevation="16" max-width="500"
                title="Send a receipt">
                <template v-slot:append>
                    <v-btn icon="$close" variant="text" @click="dialog = false"></v-btn>
                </template>
                <div class="py-12 text-center">
                    <v-icon class="mb-6" color="success" icon="mdi-check-circle-outline" size="128"></v-icon>

                    <div class="text-h4 font-weight-bold">登入成功</div>
                </div>
                <div class="pa-4 text-end">
                    <v-btn class="text-none" color="medium-emphasis" min-width="92" variant="outlined" rounded
                        @click="dialog = false">
                        Close
                    </v-btn>
                </div>
            </v-card>
        </v-fade-transition>
        <!-- 全屏遮罩 彈窗:旋轉 loading -->
        <v-overlay :model-value="loading" class="align-center justify-center">
            <v-progress-circular color="primary" size="64" indeterminate></v-progress-circular>
        </v-overlay>
    </v-sheet>
</template>

<script setup>
import { ref } from 'vue'
const dialog = ref(false)
const loading = ref(false)
const changeDialog = () => {
    loading.value = true
    setTimeout(() => { dialog.value = true; loading.value = false }, 1000)
}
</script>