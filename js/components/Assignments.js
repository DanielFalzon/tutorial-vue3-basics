import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
export default {
    template:
        `
        <section class="flex gap-8">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add"></assignment-create>
            </assignment-list>
            <assignment-list can-toggle :assignments="filters.completed" title="Completed"></assignment-list>
            
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