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

            ]
        }
    },

    created(){
        fetch('http://localhost:3001/assignments')
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            })
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