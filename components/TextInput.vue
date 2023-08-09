<template>
    <div>
        <client-only>
            <input
                :placeholder="placeholder"
                :maxlength="max"
                class="
                    w-full
                    bg-white
                    text-gray-800
                    border
                    text-sm
                    border-[#EFF0EB]
                    rounded-lg
                    p-3
                    placeholder-gray-500
                    focus:outline-none"
                    @focus="isFocused = true"
                    @blur="isFocused = false"
                    :class="
                        {'border-gray-900': isFocused},
                        {'border-red-500': error}"
                    :type="inputType"
                    v-model="inputComputed"
                    autocomplete="off"/>

        </client-only>

        <span v-if="error" class="text-red-500 text-[14px] font-semibold">
            {{  error }}
        </span>
    </div>
</template>

<script setup>
// 自定義update:input
const emit = defineEmits(['update:input'])
// 在父元件中使用v-bind傳遞給子元件
const props = defineProps(['input', 'placeholder', 'max', 'inputType', 'error'])
// 使用toRefs 解構props
const { input, placeholder, max, inputType, error } = toRefs(props)
// 追蹤輸入框
let isFocused = ref(false)
// 計算屬性定義
const inputComputed = computed({
    // get : prop的input值
    get: () => input.value,
    // 透過emit 觸發update:input事件 將新值傳遞給父元件
    set: (val) => emit('update:input', val)
})
</script>