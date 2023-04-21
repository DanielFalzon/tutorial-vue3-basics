export default {
    template: `
        <button class="bg-gray-200 hover:bg-gray-300 border rounded p-5 py-2 disabled:cursor-not-allowed" :disabled="processing" @click="toggle">
            <slot />
        </button>
    `,
    data() {
        return {
            processing: false
        }
    },
    methods: {
        toggle() {
            this.processing = !this.processing;
        }
    }
}