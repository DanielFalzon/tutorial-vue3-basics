import AssignmentList from "./AssignmentList.js";

export default {
    template:
        `
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
            <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
            
            <form @submit.prevent="add">
                <div class="border border-gray-600 text-black">
                <input placeholder="New assignment..." v-model="newAssignment" class="p-2"/>
                <button type="submit" class="bg-white p-2 border-l">Add</button>
                </div>
            </form>
        </section>
    `,

    components: {AssignmentList},

    data(){
        return{
            assignments: [
                { id:1, name: 'Finish project 1', complete: false },
                { id: 2, name: 'Finish project 2', complete: false },
                { id: 3, name: 'Finish project 3', complete: false },
            ],

            newAssignment: ''
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
        add(){
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
                id: this.assignments.length + 1
            });

            this.newAssignment = '';
        }
    }

}