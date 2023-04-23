export default {
    template: `
        <li>
            <label>{{assignment.name}}</label>
            <input type="checkbox" v-model="assignment.complete">
        </li>
    `,
    props:{
        assignment: Object
    }
}