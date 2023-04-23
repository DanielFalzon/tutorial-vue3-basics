import AssignmentList from "./AssignmentList.js";

export default {
    template:
        `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        </section>
        
    `,

    components: {AssignmentList},

    data(){
        return{
            assignments: [
                { id:1, name: 'Finish project 1', complete: false },
                { id: 2, name: 'Finish project 2', complete: false },
                { id: 3, name: 'Finish project 3', complete: false },
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
    }

}