export default {
    template: `
        <button :class="{
            'border rounded p-5 py-2 disabled:cursor-not-allowed relative': true,
            'bg-blue-600 hover:bg-blue-700': type === 'primary',
            'bg-purple-200 hover:bg-purple-300': type === 'secondary',
            'bg-gray-200 hover:bg-gray-300': type === 'muted',
            'is-loading': processing
        }" :disabled="processing" @click="toggle">
            <slot />
        </button>
    `,
    data() {
        // return {
        //     processing: false
        // }
    },
    props: {
        type: {
            type: String,
            default: 'primary'
        },
        processing: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggle() {
            this.processing = !this.processing;
        }
    }
}