import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    template:
        `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <assignment-create @add="add"></assignment-create>
        </section>
    `,

    components: {AssignmentList, AssignmentCreate},

    data(){
        return{
            assignments: [
                { id:1, name: 'Finish project 1', complete: false, tag: 'math' },
                { id: 2, name: 'Finish project 2', complete: false, tag: 'science' },
                { id: 3, name: 'Finish project 3', complete: false, tag: 'math' },
            ]
        }
    },

    computed: {
        filters(){
            return {
                completed: this.assignments.filter (assignment => assignment.complete),
                inProgress: this.assignments.filter (assignment => ! assignment.complete)
            }
        }
    },

    methods: {
        add(name){
            this.assignments.push({
                name: name,
                completed: false,
                id: this.assignments.length + 1
            });
        }
    }

}